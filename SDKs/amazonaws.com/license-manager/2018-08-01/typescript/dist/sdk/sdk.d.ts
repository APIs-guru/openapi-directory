import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://license-manager.{region}.amazonaws.com", "https://license-manager.{region}.amazonaws.com", "http://license-manager.{region}.amazonaws.com.cn", "https://license-manager.{region}.amazonaws.com.cn"];
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
     * acceptGrant - Accepts the specified grant.
    **/
    acceptGrant(req: operations.AcceptGrantRequest, config?: AxiosRequestConfig): Promise<operations.AcceptGrantResponse>;
    /**
     * checkInLicense - Checks in the specified license. Check in a license when it is no longer in use.
    **/
    checkInLicense(req: operations.CheckInLicenseRequest, config?: AxiosRequestConfig): Promise<operations.CheckInLicenseResponse>;
    /**
     * checkoutBorrowLicense - Checks out the specified license for offline use.
    **/
    checkoutBorrowLicense(req: operations.CheckoutBorrowLicenseRequest, config?: AxiosRequestConfig): Promise<operations.CheckoutBorrowLicenseResponse>;
    /**
     * checkoutLicense - Checks out the specified license.
    **/
    checkoutLicense(req: operations.CheckoutLicenseRequest, config?: AxiosRequestConfig): Promise<operations.CheckoutLicenseResponse>;
    /**
     * createGrant - Creates a grant for the specified license. A grant shares the use of license entitlements with specific AWS accounts.
    **/
    createGrant(req: operations.CreateGrantRequest, config?: AxiosRequestConfig): Promise<operations.CreateGrantResponse>;
    /**
     * createGrantVersion - Creates a new version of the specified grant.
    **/
    createGrantVersion(req: operations.CreateGrantVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreateGrantVersionResponse>;
    /**
     * createLicense - Creates a license.
    **/
    createLicense(req: operations.CreateLicenseRequest, config?: AxiosRequestConfig): Promise<operations.CreateLicenseResponse>;
    /**
     * createLicenseConfiguration - <p>Creates a license configuration.</p> <p>A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), license affinity to host (how long a license must be associated with a host), and the number of licenses purchased and used.</p>
    **/
    createLicenseConfiguration(req: operations.CreateLicenseConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.CreateLicenseConfigurationResponse>;
    /**
     * createLicenseManagerReportGenerator - Creates a new report generator.
    **/
    createLicenseManagerReportGenerator(req: operations.CreateLicenseManagerReportGeneratorRequest, config?: AxiosRequestConfig): Promise<operations.CreateLicenseManagerReportGeneratorResponse>;
    /**
     * createLicenseVersion - Creates a new version of the specified license.
    **/
    createLicenseVersion(req: operations.CreateLicenseVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreateLicenseVersionResponse>;
    /**
     * createToken - <p>Creates a long-lived token.</p> <p>A refresh token is a JWT token used to get an access token. With an access token, you can call AssumeRoleWithWebIdentity to get role credentials that you can use to call License Manager to manage the specified license.</p>
    **/
    createToken(req: operations.CreateTokenRequest, config?: AxiosRequestConfig): Promise<operations.CreateTokenResponse>;
    /**
     * deleteGrant - Deletes the specified grant.
    **/
    deleteGrant(req: operations.DeleteGrantRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGrantResponse>;
    /**
     * deleteLicense - Deletes the specified license.
    **/
    deleteLicense(req: operations.DeleteLicenseRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLicenseResponse>;
    /**
     * deleteLicenseConfiguration - <p>Deletes the specified license configuration.</p> <p>You cannot delete a license configuration that is in use.</p>
    **/
    deleteLicenseConfiguration(req: operations.DeleteLicenseConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLicenseConfigurationResponse>;
    /**
     * deleteLicenseManagerReportGenerator - <p>Delete an existing report generator.</p> <p>This action deletes the report generator, which stops it from generating future reports and cannot be reversed. However, the previous reports from this generator will remain in your S3 bucket.</p>
    **/
    deleteLicenseManagerReportGenerator(req: operations.DeleteLicenseManagerReportGeneratorRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLicenseManagerReportGeneratorResponse>;
    /**
     * deleteToken - Deletes the specified token. Must be called in the license home Region.
    **/
    deleteToken(req: operations.DeleteTokenRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTokenResponse>;
    /**
     * extendLicenseConsumption - Extends the expiration date for license consumption.
    **/
    extendLicenseConsumption(req: operations.ExtendLicenseConsumptionRequest, config?: AxiosRequestConfig): Promise<operations.ExtendLicenseConsumptionResponse>;
    /**
     * getAccessToken - Gets a temporary access token to use with AssumeRoleWithWebIdentity. Access tokens are valid for one hour.
    **/
    getAccessToken(req: operations.GetAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetAccessTokenResponse>;
    /**
     * getGrant - Gets detailed information about the specified grant.
    **/
    getGrant(req: operations.GetGrantRequest, config?: AxiosRequestConfig): Promise<operations.GetGrantResponse>;
    /**
     * getLicense - Gets detailed information about the specified license.
    **/
    getLicense(req: operations.GetLicenseRequest, config?: AxiosRequestConfig): Promise<operations.GetLicenseResponse>;
    /**
     * getLicenseConfiguration - Gets detailed information about the specified license configuration.
    **/
    getLicenseConfiguration(req: operations.GetLicenseConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetLicenseConfigurationResponse>;
    /**
     * getLicenseManagerReportGenerator - Gets information on the specified report generator.
    **/
    getLicenseManagerReportGenerator(req: operations.GetLicenseManagerReportGeneratorRequest, config?: AxiosRequestConfig): Promise<operations.GetLicenseManagerReportGeneratorResponse>;
    /**
     * getLicenseUsage - Gets detailed information about the usage of the specified license.
    **/
    getLicenseUsage(req: operations.GetLicenseUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetLicenseUsageResponse>;
    /**
     * getServiceSettings - Gets the License Manager settings for the current Region.
    **/
    getServiceSettings(req: operations.GetServiceSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetServiceSettingsResponse>;
    /**
     * listAssociationsForLicenseConfiguration - <p>Lists the resource associations for the specified license configuration.</p> <p>Resource associations need not consume licenses from a license configuration. For example, an AMI or a stopped instance might not consume a license (depending on the license rules).</p>
    **/
    listAssociationsForLicenseConfiguration(req: operations.ListAssociationsForLicenseConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.ListAssociationsForLicenseConfigurationResponse>;
    /**
     * listDistributedGrants - Lists the grants distributed for the specified license.
    **/
    listDistributedGrants(req: operations.ListDistributedGrantsRequest, config?: AxiosRequestConfig): Promise<operations.ListDistributedGrantsResponse>;
    /**
     * listFailuresForLicenseConfigurationOperations - Lists the license configuration operations that failed.
    **/
    listFailuresForLicenseConfigurationOperations(req: operations.ListFailuresForLicenseConfigurationOperationsRequest, config?: AxiosRequestConfig): Promise<operations.ListFailuresForLicenseConfigurationOperationsResponse>;
    /**
     * listLicenseConfigurations - Lists the license configurations for your account.
    **/
    listLicenseConfigurations(req: operations.ListLicenseConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.ListLicenseConfigurationsResponse>;
    /**
     * listLicenseManagerReportGenerators - Lists the report generators for your account.
    **/
    listLicenseManagerReportGenerators(req: operations.ListLicenseManagerReportGeneratorsRequest, config?: AxiosRequestConfig): Promise<operations.ListLicenseManagerReportGeneratorsResponse>;
    /**
     * listLicenseSpecificationsForResource - Describes the license configurations for the specified resource.
    **/
    listLicenseSpecificationsForResource(req: operations.ListLicenseSpecificationsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListLicenseSpecificationsForResourceResponse>;
    /**
     * listLicenseVersions - Lists all versions of the specified license.
    **/
    listLicenseVersions(req: operations.ListLicenseVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListLicenseVersionsResponse>;
    /**
     * listLicenses - Lists the licenses for your account.
    **/
    listLicenses(req: operations.ListLicensesRequest, config?: AxiosRequestConfig): Promise<operations.ListLicensesResponse>;
    /**
     * listReceivedGrants - Lists grants that are received but not accepted.
    **/
    listReceivedGrants(req: operations.ListReceivedGrantsRequest, config?: AxiosRequestConfig): Promise<operations.ListReceivedGrantsResponse>;
    /**
     * listReceivedLicenses - Lists received licenses.
    **/
    listReceivedLicenses(req: operations.ListReceivedLicensesRequest, config?: AxiosRequestConfig): Promise<operations.ListReceivedLicensesResponse>;
    /**
     * listResourceInventory - Lists resources managed using Systems Manager inventory.
    **/
    listResourceInventory(req: operations.ListResourceInventoryRequest, config?: AxiosRequestConfig): Promise<operations.ListResourceInventoryResponse>;
    /**
     * listTagsForResource - Lists the tags for the specified license configuration.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * listTokens - Lists your tokens.
    **/
    listTokens(req: operations.ListTokensRequest, config?: AxiosRequestConfig): Promise<operations.ListTokensResponse>;
    /**
     * listUsageForLicenseConfiguration - Lists all license usage records for a license configuration, displaying license consumption details by resource at a selected point in time. Use this action to audit the current license consumption for any license inventory and configuration.
    **/
    listUsageForLicenseConfiguration(req: operations.ListUsageForLicenseConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.ListUsageForLicenseConfigurationResponse>;
    /**
     * rejectGrant - Rejects the specified grant.
    **/
    rejectGrant(req: operations.RejectGrantRequest, config?: AxiosRequestConfig): Promise<operations.RejectGrantResponse>;
    /**
     * tagResource - Adds the specified tags to the specified license configuration.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes the specified tags from the specified license configuration.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateLicenseConfiguration - Modifies the attributes of an existing license configuration.
    **/
    updateLicenseConfiguration(req: operations.UpdateLicenseConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLicenseConfigurationResponse>;
    /**
     * updateLicenseManagerReportGenerator - <p>Updates a report generator.</p> <p>After you make changes to a report generator, it will start generating new reports within 60 minutes of being updated.</p>
    **/
    updateLicenseManagerReportGenerator(req: operations.UpdateLicenseManagerReportGeneratorRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLicenseManagerReportGeneratorResponse>;
    /**
     * updateLicenseSpecificationsForResource - <p>Adds or removes the specified license configurations for the specified AWS resource.</p> <p>You can update the license specifications of AMIs, instances, and hosts. You cannot update the license specifications for launch templates and AWS CloudFormation templates, as they send license configurations to the operation that creates the resource.</p>
    **/
    updateLicenseSpecificationsForResource(req: operations.UpdateLicenseSpecificationsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLicenseSpecificationsForResourceResponse>;
    /**
     * updateServiceSettings - Updates License Manager settings for the current Region.
    **/
    updateServiceSettings(req: operations.UpdateServiceSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceSettingsResponse>;
}
export {};
