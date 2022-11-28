import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.configcat.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * addOrUpdateIntegrationLink - Add or update Integration link
    **/
    addOrUpdateIntegrationLink(req: operations.AddOrUpdateIntegrationLinkRequest, config?: AxiosRequestConfig): Promise<operations.AddOrUpdateIntegrationLinkResponse>;
    /**
     * createConfig - Create Config
     *
     * This endpoint creates a new Config in a specified Product
     * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
    **/
    createConfig(req: operations.CreateConfigRequest, config?: AxiosRequestConfig): Promise<operations.CreateConfigResponse>;
    /**
     * createEnvironment - Create Environment
     *
     * This endpoint creates a new Environment in a specified Product
     * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
    **/
    createEnvironment(req: operations.CreateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateEnvironmentResponse>;
    /**
     * createPermissionGroup - Create Permission Group
     *
     * This endpoint creates a new Permission Group in a specified Product
     * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
    **/
    createPermissionGroup(req: operations.CreatePermissionGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreatePermissionGroupResponse>;
    /**
     * createProduct - Create Product
     *
     * This endpoint creates a new Product in a specified Organization
     * identified by the `organizationId` parameter, which can be obtained from the [List Organizations](#operation/get-organizations) endpoint.
    **/
    createProduct(req: operations.CreateProductRequest, config?: AxiosRequestConfig): Promise<operations.CreateProductResponse>;
    /**
     * createSetting - Create Flag
     *
     * This endpoint creates a new Feature Flag or Setting in a specified Config
     * identified by the `configId` parameter.
     *
     * **Important:** The `key` attribute must be unique within the given Config.
    **/
    createSetting(req: operations.CreateSettingRequest, config?: AxiosRequestConfig): Promise<operations.CreateSettingResponse>;
    /**
     * createTag - Create Tag
     *
     * This endpoint creates a new Tag in a specified Product
     * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
    **/
    createTag(req: operations.CreateTagRequest, config?: AxiosRequestConfig): Promise<operations.CreateTagResponse>;
    /**
     * deleteConfig - Delete Config
     *
     * This endpoint removes a Config identified by the `configId` parameter.
    **/
    deleteConfig(req: operations.DeleteConfigRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConfigResponse>;
    /**
     * deleteEnvironment - Delete Environment
     *
     * This endpoint removes an Environment identified by the `environmentId` parameter.
    **/
    deleteEnvironment(req: operations.DeleteEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEnvironmentResponse>;
    /**
     * deleteIntegrationLink - Delete Integration link
    **/
    deleteIntegrationLink(req: operations.DeleteIntegrationLinkRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIntegrationLinkResponse>;
    /**
     * deleteOrganizationMember - Delete Member from Organization
     *
     * This endpoint removes a Member identified by the `userId` from the
     * given Organization identified by the `organizationId` parameter.
    **/
    deleteOrganizationMember(req: operations.DeleteOrganizationMemberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationMemberResponse>;
    /**
     * deletePermissionGroup - Delete Permission Group
     *
     * This endpoint removes a Permission Group identified by the `permissionGroupId` parameter.
    **/
    deletePermissionGroup(req: operations.DeletePermissionGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeletePermissionGroupResponse>;
    /**
     * deleteProduct - Delete Product
     *
     * This endpoint removes a Product identified by the `productId` parameter.
    **/
    deleteProduct(req: operations.DeleteProductRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductResponse>;
    /**
     * deleteProductMember - Delete Member from Product
     *
     * This endpoint removes a Member identified by the `userId` from the
     * given Product identified by the `productId` parameter.
    **/
    deleteProductMember(req: operations.DeleteProductMemberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductMemberResponse>;
    /**
     * deleteSetting - Delete Flag
     *
     * This endpoint removes a Feature Flag or Setting from a specified Config,
     * identified by the `configId` parameter.
    **/
    deleteSetting(req: operations.DeleteSettingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSettingResponse>;
    /**
     * deleteTag - Delete Tag
     *
     * This endpoint deletes a Tag identified by the `tagId` parameter. To remove a Tag from a Feature Flag or Setting use the [Update Flag](#operation/update-setting) endpoint.
    **/
    deleteTag(req: operations.DeleteTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTagResponse>;
    /**
     * getAuditlogs - List Audit log items for Product
     *
     * This endpoint returns the list of Audit log items for a given Product
     * and the result can be optionally filtered by Config and/or Environment.
    **/
    getAuditlogs(req: operations.GetAuditlogsRequest, config?: AxiosRequestConfig): Promise<operations.GetAuditlogsResponse>;
    /**
     * getConfig - Get Config
     *
     * This endpoint returns the metadata of a Config
     * identified by the `configId`.
    **/
    getConfig(req: operations.GetConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigResponse>;
    /**
     * getConfigs - List Configs
     *
     * This endpoint returns the list of the Configs that belongs to the given Product identified by the
     * `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
    **/
    getConfigs(req: operations.GetConfigsRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigsResponse>;
    /**
     * getDeletedSettings - List Deleted Settings
     *
     * This endpoint returns the list of Feature Flags and Settings that were deleted from the given Config.
    **/
    getDeletedSettings(req: operations.GetDeletedSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeletedSettingsResponse>;
    /**
     * getEnvironment - Get Environment
     *
     * This endpoint returns the metadata of an Environment
     * identified by the `environmentId`.
    **/
    getEnvironment(req: operations.GetEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.GetEnvironmentResponse>;
    /**
     * getEnvironments - List Environments
     *
     * This endpoint returns the list of the Environments that belongs to the given Product identified by the
     * `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
    **/
    getEnvironments(req: operations.GetEnvironmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetEnvironmentsResponse>;
    /**
     * getIntegrationLinkDetails - Get Integration link
    **/
    getIntegrationLinkDetails(req: operations.GetIntegrationLinkDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetIntegrationLinkDetailsResponse>;
    /**
     * getMe - Get authenticated user details
    **/
    getMe(config?: AxiosRequestConfig): Promise<operations.GetMeResponse>;
    /**
     * getOrganizationAuditlogs - List Audit log items for Organization
     *
     * This endpoint returns the list of Audit log items for a given Organization
     * and the result can be optionally filtered by Product and/or Config and/or Environment.
    **/
    getOrganizationAuditlogs(req: operations.GetOrganizationAuditlogsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAuditlogsResponse>;
    /**
     * getOrganizationMembers - List Organization Members
     *
     * This endpoint returns the list of Members that belongs
     * to the given Organization, identified by the `organizationId` parameter.
    **/
    getOrganizationMembers(req: operations.GetOrganizationMembersRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationMembersResponse>;
    /**
     * getOrganizations - List Organizations
     *
     * This endpoint returns the list of the Organizations that belongs to the user.
    **/
    getOrganizations(config?: AxiosRequestConfig): Promise<operations.GetOrganizationsResponse>;
    /**
     * getPermissionGroup - Get Permission Group
     *
     * This endpoint returns the metadata of a Permission Group
     * identified by the `permissionGroupId`.
    **/
    getPermissionGroup(req: operations.GetPermissionGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetPermissionGroupResponse>;
    /**
     * getPermissionGroups - List Permission Groups
     *
     * This endpoint returns the list of the Permission Groups that belongs to the given Product identified by the
     * `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
    **/
    getPermissionGroups(req: operations.GetPermissionGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetPermissionGroupsResponse>;
    /**
     * getProduct - Get Product
     *
     * This endpoint returns the metadata of a Product
     * identified by the `productId`.
    **/
    getProduct(req: operations.GetProductRequest, config?: AxiosRequestConfig): Promise<operations.GetProductResponse>;
    /**
     * getProductMembers - List Product Members
     *
     * This endpoint returns the list of Members that belongs
     * to the given Product, identified by the `productId` parameter.
    **/
    getProductMembers(req: operations.GetProductMembersRequest, config?: AxiosRequestConfig): Promise<operations.GetProductMembersResponse>;
    /**
     * getProducts - List Products
     *
     * This endpoint returns the list of the Products that belongs to the user.
    **/
    getProducts(config?: AxiosRequestConfig): Promise<operations.GetProductsResponse>;
    /**
     * getSdkKeys - Get SDK Key
     *
     * This endpoint returns the SDK Key for your Config in a specified Environment.
    **/
    getSdkKeys(req: operations.GetSDKKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetSDKKeysResponse>;
    /**
     * getSetting - Get Flag
     *
     * This endpoint returns the metadata attributes of a Feature Flag or Setting
     * identified by the `settingId` parameter.
    **/
    getSetting(req: operations.GetSettingRequest, config?: AxiosRequestConfig): Promise<operations.GetSettingResponse>;
    /**
     * getSettingValue - Get value
     *
     * This endpoint returns the value of a Feature Flag or Setting
     * in a specified Environment identified by the `environmentId` parameter.
     *
     * The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
     * The `value` represents what the clients will get when the evaluation requests of our SDKs
     * are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.
     *
     * The `rolloutRules` and `percentageRules` attributes are representing the current
     * Targeting and Percentage Rules configuration of the actual Feature Flag or Setting
     * in an **ordered** collection, which means the order of the returned rules is matching to the
     * evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).
    **/
    getSettingValue(req: operations.GetSettingValueRequest, config?: AxiosRequestConfig): Promise<operations.GetSettingValueResponse>;
    /**
     * getSettingValueBySdkkey - Get value
     *
     * This endpoint returns the value of a Feature Flag or Setting
     * in a specified Environment identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.
     *
     * The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
     * The `value` represents what the clients will get when the evaluation requests of our SDKs
     * are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.
     *
     * The `rolloutRules` and `percentageRules` attributes are representing the current
     * Targeting and Percentage Rules configuration of the actual Feature Flag or Setting
     * in an **ordered** collection, which means the order of the returned rules is matching to the
     * evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).
    **/
    getSettingValueBySdkkey(req: operations.GetSettingValueBySdkkeyRequest, config?: AxiosRequestConfig): Promise<operations.GetSettingValueBySdkkeyResponse>;
    /**
     * getSettingValues - Get values
     *
     * This endpoint returns the value of a specified Config's Feature Flags or Settings identified by the `configId` parameter
     * in a specified Environment identified by the `environmentId` parameter.
     *
     * The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
     * The `value` represents what the clients will get when the evaluation requests of our SDKs
     * are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.
     *
     * The `rolloutRules` and `percentageRules` attributes are representing the current
     * Targeting and Percentage Rules configuration of the actual Feature Flag or Setting
     * in an **ordered** collection, which means the order of the returned rules is matching to the
     * evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).
    **/
    getSettingValues(req: operations.GetSettingValuesRequest, config?: AxiosRequestConfig): Promise<operations.GetSettingValuesResponse>;
    /**
     * getSettings - List Flags
     *
     * This endpoint returns the list of the Feature Flags and Settings defined in a
     * specified Config, identified by the `configId` parameter.
    **/
    getSettings(req: operations.GetSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetSettingsResponse>;
    /**
     * getSettingsByTag - List Settings by Tag
     *
     * This endpoint returns the list of the Settings that
     * has the specified Tag, identified by the `tagId` parameter.
    **/
    getSettingsByTag(req: operations.GetSettingsByTagRequest, config?: AxiosRequestConfig): Promise<operations.GetSettingsByTagResponse>;
    /**
     * getTag - Get Tag
     *
     * This endpoint returns the metadata of a Tag
     * identified by the `tagId`.
    **/
    getTag(req: operations.GetTagRequest, config?: AxiosRequestConfig): Promise<operations.GetTagResponse>;
    /**
     * getTags - List Tags
     *
     * This endpoint returns the list of the Tags in a
     * specified Product, identified by the `productId` parameter.
    **/
    getTags(req: operations.GetTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsResponse>;
    /**
     * inviteMember - Invite Member
     *
     * This endpoint invites a Member into the given Product identified by the `productId` parameter.
    **/
    inviteMember(req: operations.InviteMemberRequest, config?: AxiosRequestConfig): Promise<operations.InviteMemberResponse>;
    /**
     * replaceSettingValue - Replace value
     *
     * This endpoint replaces the whole value of a Feature Flag or Setting in a specified Environment.
     *
     * Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
     *
     * **Important:** As this endpoint is doing a complete replace, it's important to set every other attribute that you don't
     * want to change in its original state. Not listing one means that it will reset.
     *
     * For example: We have the following resource.
     * ```
     * {
     * 	"rolloutPercentageItems": [
     * 		{
     * 			"percentage": 30,
     * 			"value": true
     * 		},
     * 		{
     * 			"percentage": 70,
     * 			"value": false
     * 		}
     * 	],
     * 	"rolloutRules": [],
     * 	"value": false
     * }
     * ```
     * If we send a replace request body as below:
     * ```
     * {
     * 	"value": true
     * }
     * ```
     * Then besides that the default value is set to `true`, all the Percentage Rules are deleted.
     * So we get a response like this:
     * ```
     * {
     * 	"rolloutPercentageItems": [],
     * 	"rolloutRules": [],
     * 	"value": true
     * }
     * ```
    **/
    replaceSettingValue(req: operations.ReplaceSettingValueRequest, config?: AxiosRequestConfig): Promise<operations.ReplaceSettingValueResponse>;
    /**
     * replaceSettingValueBySdkkey - Replace value
     *
     * This endpoint replaces the value of a Feature Flag or Setting
     * in a specified Environment identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.
     *
     * Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
     *
     * **Important:** As this endpoint is doing a complete replace, it's important to set every other attribute that you don't
     * want to change to its original state. Not listing one means that it will reset.
     *
     * For example: We have the following resource.
     * ```
     * {
     * 	"rolloutPercentageItems": [
     * 		{
     * 			"percentage": 30,
     * 			"value": true
     * 		},
     * 		{
     * 			"percentage": 70,
     * 			"value": false
     * 		}
     * 	],
     * 	"rolloutRules": [],
     * 	"value": false
     * }
     * ```
     * If we send a replace request body as below:
     * ```
     * {
     * 	"value": true
     * }
     * ```
     * Then besides that the default served value is set to `true`, all the Percentage Rules are deleted.
     * So we get a response like this:
     * ```
     * {
     * 	"rolloutPercentageItems": [],
     * 	"rolloutRules": [],
     * 	"value": true
     * }
     * ```
    **/
    replaceSettingValueBySdkkey(req: operations.ReplaceSettingValueBySdkkeyRequest, config?: AxiosRequestConfig): Promise<operations.ReplaceSettingValueBySdkkeyResponse>;
    /**
     * updateConfig - Update Config
     *
     * This endpoint updates a Config identified by the `configId` parameter.
    **/
    updateConfig(req: operations.UpdateConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConfigResponse>;
    /**
     * updateEnvironment - Update Environment
     *
     * This endpoint updates an Environment identified by the `environmentId` parameter.
    **/
    updateEnvironment(req: operations.UpdateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEnvironmentResponse>;
    /**
     * updatePermissionGroup - Update Permission Group
     *
     * This endpoint updates a Permission Group identified by the `permissionGroupId` parameter.
    **/
    updatePermissionGroup(req: operations.UpdatePermissionGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePermissionGroupResponse>;
    /**
     * updateProduct - Update Product
     *
     * This endpoint updates a Product identified by the `productId` parameter.
    **/
    updateProduct(req: operations.UpdateProductRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProductResponse>;
    /**
     * updateSetting - Update Flag
     *
     * This endpoint updates the metadata of a Feature Flag or Setting
     * with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Config.
     *
     * Only the `name`, `hint` and `tags` attributes are modifiable by this endpoint.
     * The `tags` attribute is a simple collection of the [tag IDs](#operation/get-tags) attached to the given setting.
     *
     * The advantage of using JSON Patch is that you can describe individual update operations on a resource
     * without touching attributes that you don't want to change.
     *
     * For example: We have the following resource.
     * ```
     * {
     * 	"settingId": 5345,
     * 	"key": "myGrandFeature",
     * 	"name": "Tihs is a naem with soem typos.",
     * 	"hint": "This flag controls my grandioso feature.",
     * 	"settingType": "boolean",
     * 	"tags": [
     * 		{
     * 			"tagId": 0,
     * 			"name": "sample tag",
     * 			"color": "whale"
     * 		}
     * 	]
     * }
     * ```
     * If we send an update request body as below (it changes the name and adds the already existing tag with the id 2):
     * ```
     * [
     * 	{
     * 		"op": "replace",
     * 		"path": "/name",
     * 		"value": "This is the name without typos."
     * 	},
     * 	{
     * 		"op": "add",
     * 		"path": "/tags/-",
     * 		"value": 2
     * 	}
     * ]
     * ```
     * Only the `name` and `tags` are going to be updated and all the other attributes are remaining unchanged.
     * So we get a response like this:
     * ```
     * {
     * 	"settingId": 5345,
     * 	"key": "myGrandFeature",
     * 	"name": "This is the name without typos.",
     * 	"hint": "This flag controls my grandioso feature.",
     * 	"settingType": "boolean",
     * 	"tags": [
     * 		{
     * 			"tagId": 0,
     * 			"name": "sample tag",
     * 			"color": "whale"
     * 		},
     * 		{
     * 			"tagId": 2,
     * 			"name": "another tag",
     * 			"color": "koala"
     * 		}
     * 	]
     * }
     * ```
    **/
    updateSetting(req: operations.UpdateSettingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSettingResponse>;
    /**
     * updateSettingValue - Update value
     *
     * This endpoint updates the value of a Feature Flag or Setting
     * with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Environment.
     *
     * Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
     *
     * The advantage of using JSON Patch is that you can describe individual update operations on a resource
     * without touching attributes that you don't want to change. It supports collection reordering, so it also
     * can be used for reordering the targeting rules of a Feature Flag or Setting.
     *
     * For example: We have the following resource.
     * ```
     * {
     * 	"rolloutPercentageItems": [
     * 		{
     * 			"percentage": 30,
     * 			"value": true
     * 		},
     * 		{
     * 			"percentage": 70,
     * 			"value": false
     * 		}
     * 	],
     * 	"rolloutRules": [],
     * 	"value": false
     * }
     * ```
     * If we send an update request body as below:
     * ```
     * [
     * 	{
     * 		"op": "replace",
     * 		"path": "/value",
     * 		"value": true
     * 	}
     * ]
     * ```
     * Only the default value is going to be set to `true` and all the Percentage Rules are remaining unchanged.
     * So we get a response like this:
     * ```
     * {
     * 	"rolloutPercentageItems": [
     * 		{
     * 			"percentage": 30,
     * 			"value": true
     * 		},
     * 		{
     * 			"percentage": 70,
     * 			"value": false
     * 		}
     * 	],
     * 	"rolloutRules": [],
     * 	"value": true
     * }
     * ```
    **/
    updateSettingValue(req: operations.UpdateSettingValueRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSettingValueResponse>;
    /**
     * updateSettingValueBySdkkey - Update value
     *
     * This endpoint updates the value of a Feature Flag or Setting
     * with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Environment
     * identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.
     *
     * Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
     *
     * The advantage of using JSON Patch is that you can describe individual update operations on a resource
     * without touching attributes that you don't want to change. It supports collection reordering, so it also
     * can be used for reordering the targeting rules of a Feature Flag or Setting.
     *
     * For example: We have the following resource.
     * ```
     * {
     * 	"rolloutPercentageItems": [
     * 		{
     * 			"percentage": 30,
     * 			"value": true
     * 		},
     * 		{
     * 			"percentage": 70,
     * 			"value": false
     * 		}
     * 	],
     * 	"rolloutRules": [],
     * 	"value": false
     * }
     * ```
     * If we send an update request body as below:
     * ```
     * [
     * 	{
     * 		"op": "replace",
     * 		"path": "/value",
     * 		"value": true
     * 	}
     * ]
     * ```
     * Only the default served value is going to be set to `true` and all the Percentage Rules are remaining unchanged.
     * So we get a response like this:
     * ```
     * {
     * 	"rolloutPercentageItems": [
     * 		{
     * 			"percentage": 30,
     * 			"value": true
     * 		},
     * 		{
     * 			"percentage": 70,
     * 			"value": false
     * 		}
     * 	],
     * 	"rolloutRules": [],
     * 	"value": true
     * }
     * ```
    **/
    updateSettingValueBySdkkey(req: operations.UpdateSettingValueBySdkkeyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSettingValueBySdkkeyResponse>;
    /**
     * updateTag - Update Tag
     *
     * This endpoint updates a Tag identified by the `tagId` parameter.
    **/
    updateTag(req: operations.UpdateTagRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTagResponse>;
}
export {};
