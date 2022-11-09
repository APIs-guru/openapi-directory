import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    AddOrUpdateIntegrationLink(req: operations.AddOrUpdateIntegrationLinkRequest, config?: AxiosRequestConfig): Promise<operations.AddOrUpdateIntegrationLinkResponse>;
    /**
     * This endpoint creates a new Config in a specified Product
     * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
    **/
    CreateConfig(req: operations.CreateConfigRequest, config?: AxiosRequestConfig): Promise<operations.CreateConfigResponse>;
    /**
     * This endpoint creates a new Environment in a specified Product
     * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
    **/
    CreateEnvironment(req: operations.CreateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateEnvironmentResponse>;
    /**
     * This endpoint creates a new Permission Group in a specified Product
     * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
    **/
    CreatePermissionGroup(req: operations.CreatePermissionGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreatePermissionGroupResponse>;
    /**
     * This endpoint creates a new Product in a specified Organization
     * identified by the `organizationId` parameter, which can be obtained from the [List Organizations](#operation/get-organizations) endpoint.
    **/
    CreateProduct(req: operations.CreateProductRequest, config?: AxiosRequestConfig): Promise<operations.CreateProductResponse>;
    /**
     * This endpoint creates a new Feature Flag or Setting in a specified Config
     * identified by the `configId` parameter.
     *
     * **Important:** The `key` attribute must be unique within the given Config.
    **/
    CreateSetting(req: operations.CreateSettingRequest, config?: AxiosRequestConfig): Promise<operations.CreateSettingResponse>;
    /**
     * This endpoint creates a new Tag in a specified Product
     * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
    **/
    CreateTag(req: operations.CreateTagRequest, config?: AxiosRequestConfig): Promise<operations.CreateTagResponse>;
    /**
     * This endpoint removes a Config identified by the `configId` parameter.
    **/
    DeleteConfig(req: operations.DeleteConfigRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConfigResponse>;
    /**
     * This endpoint removes an Environment identified by the `environmentId` parameter.
    **/
    DeleteEnvironment(req: operations.DeleteEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEnvironmentResponse>;
    DeleteIntegrationLink(req: operations.DeleteIntegrationLinkRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIntegrationLinkResponse>;
    /**
     * This endpoint removes a Member identified by the `userId` from the
     * given Organization identified by the `organizationId` parameter.
    **/
    DeleteOrganizationMember(req: operations.DeleteOrganizationMemberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationMemberResponse>;
    /**
     * This endpoint removes a Permission Group identified by the `permissionGroupId` parameter.
    **/
    DeletePermissionGroup(req: operations.DeletePermissionGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeletePermissionGroupResponse>;
    /**
     * This endpoint removes a Product identified by the `productId` parameter.
    **/
    DeleteProduct(req: operations.DeleteProductRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductResponse>;
    /**
     * This endpoint removes a Member identified by the `userId` from the
     * given Product identified by the `productId` parameter.
    **/
    DeleteProductMember(req: operations.DeleteProductMemberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductMemberResponse>;
    /**
     * This endpoint removes a Feature Flag or Setting from a specified Config,
     * identified by the `configId` parameter.
    **/
    DeleteSetting(req: operations.DeleteSettingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSettingResponse>;
    /**
     * This endpoint deletes a Tag identified by the `tagId` parameter. To remove a Tag from a Feature Flag or Setting use the [Update Flag](#operation/update-setting) endpoint.
    **/
    DeleteTag(req: operations.DeleteTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTagResponse>;
    /**
     * This endpoint returns the list of Audit log items for a given Product
     * and the result can be optionally filtered by Config and/or Environment.
    **/
    GetAuditlogs(req: operations.GetAuditlogsRequest, config?: AxiosRequestConfig): Promise<operations.GetAuditlogsResponse>;
    /**
     * This endpoint returns the metadata of a Config
     * identified by the `configId`.
    **/
    GetConfig(req: operations.GetConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigResponse>;
    /**
     * This endpoint returns the list of the Configs that belongs to the given Product identified by the
     * `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
    **/
    GetConfigs(req: operations.GetConfigsRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigsResponse>;
    /**
     * This endpoint returns the list of Feature Flags and Settings that were deleted from the given Config.
    **/
    GetDeletedSettings(req: operations.GetDeletedSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeletedSettingsResponse>;
    /**
     * This endpoint returns the metadata of an Environment
     * identified by the `environmentId`.
    **/
    GetEnvironment(req: operations.GetEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.GetEnvironmentResponse>;
    /**
     * This endpoint returns the list of the Environments that belongs to the given Product identified by the
     * `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
    **/
    GetEnvironments(req: operations.GetEnvironmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetEnvironmentsResponse>;
    GetIntegrationLinkDetails(req: operations.GetIntegrationLinkDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetIntegrationLinkDetailsResponse>;
    GetMe(config?: AxiosRequestConfig): Promise<operations.GetMeResponse>;
    /**
     * This endpoint returns the list of Audit log items for a given Organization
     * and the result can be optionally filtered by Product and/or Config and/or Environment.
    **/
    GetOrganizationAuditlogs(req: operations.GetOrganizationAuditlogsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAuditlogsResponse>;
    /**
     * This endpoint returns the list of Members that belongs
     * to the given Organization, identified by the `organizationId` parameter.
    **/
    GetOrganizationMembers(req: operations.GetOrganizationMembersRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationMembersResponse>;
    /**
     * This endpoint returns the list of the Organizations that belongs to the user.
    **/
    GetOrganizations(config?: AxiosRequestConfig): Promise<operations.GetOrganizationsResponse>;
    /**
     * This endpoint returns the metadata of a Permission Group
     * identified by the `permissionGroupId`.
    **/
    GetPermissionGroup(req: operations.GetPermissionGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetPermissionGroupResponse>;
    /**
     * This endpoint returns the list of the Permission Groups that belongs to the given Product identified by the
     * `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
    **/
    GetPermissionGroups(req: operations.GetPermissionGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetPermissionGroupsResponse>;
    /**
     * This endpoint returns the metadata of a Product
     * identified by the `productId`.
    **/
    GetProduct(req: operations.GetProductRequest, config?: AxiosRequestConfig): Promise<operations.GetProductResponse>;
    /**
     * This endpoint returns the list of Members that belongs
     * to the given Product, identified by the `productId` parameter.
    **/
    GetProductMembers(req: operations.GetProductMembersRequest, config?: AxiosRequestConfig): Promise<operations.GetProductMembersResponse>;
    /**
     * This endpoint returns the list of the Products that belongs to the user.
    **/
    GetProducts(config?: AxiosRequestConfig): Promise<operations.GetProductsResponse>;
    /**
     * This endpoint returns the SDK Key for your Config in a specified Environment.
    **/
    GetSdkKeys(req: operations.GetSdkKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetSdkKeysResponse>;
    /**
     * This endpoint returns the metadata attributes of a Feature Flag or Setting
     * identified by the `settingId` parameter.
    **/
    GetSetting(req: operations.GetSettingRequest, config?: AxiosRequestConfig): Promise<operations.GetSettingResponse>;
    /**
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
    GetSettingValue(req: operations.GetSettingValueRequest, config?: AxiosRequestConfig): Promise<operations.GetSettingValueResponse>;
    /**
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
    GetSettingValueBySdkkey(req: operations.GetSettingValueBySdkkeyRequest, config?: AxiosRequestConfig): Promise<operations.GetSettingValueBySdkkeyResponse>;
    /**
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
    GetSettingValues(req: operations.GetSettingValuesRequest, config?: AxiosRequestConfig): Promise<operations.GetSettingValuesResponse>;
    /**
     * This endpoint returns the list of the Feature Flags and Settings defined in a
     * specified Config, identified by the `configId` parameter.
    **/
    GetSettings(req: operations.GetSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetSettingsResponse>;
    /**
     * This endpoint returns the list of the Settings that
     * has the specified Tag, identified by the `tagId` parameter.
    **/
    GetSettingsByTag(req: operations.GetSettingsByTagRequest, config?: AxiosRequestConfig): Promise<operations.GetSettingsByTagResponse>;
    /**
     * This endpoint returns the metadata of a Tag
     * identified by the `tagId`.
    **/
    GetTag(req: operations.GetTagRequest, config?: AxiosRequestConfig): Promise<operations.GetTagResponse>;
    /**
     * This endpoint returns the list of the Tags in a
     * specified Product, identified by the `productId` parameter.
    **/
    GetTags(req: operations.GetTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsResponse>;
    /**
     * This endpoint invites a Member into the given Product identified by the `productId` parameter.
    **/
    InviteMember(req: operations.InviteMemberRequest, config?: AxiosRequestConfig): Promise<operations.InviteMemberResponse>;
    /**
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
    ReplaceSettingValue(req: operations.ReplaceSettingValueRequest, config?: AxiosRequestConfig): Promise<operations.ReplaceSettingValueResponse>;
    /**
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
    ReplaceSettingValueBySdkkey(req: operations.ReplaceSettingValueBySdkkeyRequest, config?: AxiosRequestConfig): Promise<operations.ReplaceSettingValueBySdkkeyResponse>;
    /**
     * This endpoint updates a Config identified by the `configId` parameter.
    **/
    UpdateConfig(req: operations.UpdateConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConfigResponse>;
    /**
     * This endpoint updates an Environment identified by the `environmentId` parameter.
    **/
    UpdateEnvironment(req: operations.UpdateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEnvironmentResponse>;
    /**
     * This endpoint updates a Permission Group identified by the `permissionGroupId` parameter.
    **/
    UpdatePermissionGroup(req: operations.UpdatePermissionGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePermissionGroupResponse>;
    /**
     * This endpoint updates a Product identified by the `productId` parameter.
    **/
    UpdateProduct(req: operations.UpdateProductRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProductResponse>;
    /**
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
    UpdateSetting(req: operations.UpdateSettingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSettingResponse>;
    /**
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
    UpdateSettingValue(req: operations.UpdateSettingValueRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSettingValueResponse>;
    /**
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
    UpdateSettingValueBySdkkey(req: operations.UpdateSettingValueBySdkkeyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSettingValueBySdkkeyResponse>;
    /**
     * This endpoint updates a Tag identified by the `tagId` parameter.
    **/
    UpdateTag(req: operations.UpdateTagRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTagResponse>;
}
export {};
