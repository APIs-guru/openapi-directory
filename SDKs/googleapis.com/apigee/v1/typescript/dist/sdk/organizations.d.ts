import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Organizations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * apigeeOrganizationsAnalyticsDatastoresCreate - Create a Datastore for an org
    **/
    apigeeOrganizationsAnalyticsDatastoresCreate(req: operations.ApigeeOrganizationsAnalyticsDatastoresCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsAnalyticsDatastoresCreateResponse>;
    /**
     * apigeeOrganizationsAnalyticsDatastoresList - List Datastores
    **/
    apigeeOrganizationsAnalyticsDatastoresList(req: operations.ApigeeOrganizationsAnalyticsDatastoresListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsAnalyticsDatastoresListResponse>;
    /**
     * apigeeOrganizationsAnalyticsDatastoresTest - Test if Datastore configuration is correct. This includes checking if credentials provided by customer have required permissions in target destination storage
    **/
    apigeeOrganizationsAnalyticsDatastoresTest(req: operations.ApigeeOrganizationsAnalyticsDatastoresTestRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsAnalyticsDatastoresTestResponse>;
    /**
     * apigeeOrganizationsApiproductsCreate - Creates an API product in an organization. You create API products after you have proxied backend services using API proxies. An API product is a collection of API resources combined with quota settings and metadata that you can use to deliver customized and productized API bundles to your developer community. This metadata can include: - Scope - Environments - API proxies - Extensible profile API products enable you repackage APIs on the fly, without having to do any additional coding or configuration. Apigee recommends that you start with a simple API product including only required elements. You then provision credentials to apps to enable them to start testing your APIs. After you have authentication and authorization working against a simple API product, you can iterate to create finer-grained API products, defining different sets of API resources for each API product. **WARNING:** - If you don't specify an API proxy in the request body, *any* app associated with the product can make calls to *any* API in your entire organization. - If you don't specify an environment in the request body, the product allows access to all environments. For more information, see What is an API product?
    **/
    apigeeOrganizationsApiproductsCreate(req: operations.ApigeeOrganizationsApiproductsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsApiproductsCreateResponse>;
    /**
     * apigeeOrganizationsApiproductsList - Lists all API product names for an organization. Filter the list by passing an `attributename` and `attibutevalue`. The maximum number of API products returned is 1000. You can paginate the list of API products returned using the `startKey` and `count` query parameters.
    **/
    apigeeOrganizationsApiproductsList(req: operations.ApigeeOrganizationsApiproductsListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsApiproductsListResponse>;
    /**
     * apigeeOrganizationsApiproductsRateplansCreate - Create a rate plan that is associated with an API product in an organization. Using rate plans, API product owners can monetize their API products by configuring one or more of the following: - Billing frequency - Initial setup fees for using an API product - Payment funding model (postpaid only) - Fixed recurring or consumption-based charges for using an API product - Revenue sharing with developer partners An API product can have multiple rate plans associated with it but *only one* rate plan can be active at any point of time. **Note: From the developer's perspective, they purchase API products not rate plans.
    **/
    apigeeOrganizationsApiproductsRateplansCreate(req: operations.ApigeeOrganizationsApiproductsRateplansCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsApiproductsRateplansCreateResponse>;
    /**
     * apigeeOrganizationsApiproductsRateplansList - Lists all the rate plans for an API product.
    **/
    apigeeOrganizationsApiproductsRateplansList(req: operations.ApigeeOrganizationsApiproductsRateplansListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsApiproductsRateplansListResponse>;
    /**
     * apigeeOrganizationsApisCreate - Creates an API proxy. The API proxy created will not be accessible at runtime until it is deployed to an environment. Create a new API proxy by setting the `name` query parameter to the name of the API proxy. Import an API proxy configuration bundle stored in zip format on your local machine to your organization by doing the following: * Set the `name` query parameter to the name of the API proxy. * Set the `action` query parameter to `import`. * Set the `Content-Type` header to `multipart/form-data`. * Pass as a file the name of API proxy configuration bundle stored in zip format on your local machine using the `file` form field. **Note**: To validate the API proxy configuration bundle only without importing it, set the `action` query parameter to `validate`. When importing an API proxy configuration bundle, if the API proxy does not exist, it will be created. If the API proxy exists, then a new revision is created. Invalid API proxy configurations are rejected, and a list of validation errors is returned to the client.
    **/
    apigeeOrganizationsApisCreate(req: operations.ApigeeOrganizationsApisCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsApisCreateResponse>;
    /**
     * apigeeOrganizationsApisList - Lists the names of all API proxies in an organization. The names returned correspond to the names defined in the configuration files for each API proxy.
    **/
    apigeeOrganizationsApisList(req: operations.ApigeeOrganizationsApisListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsApisListResponse>;
    /**
     * apigeeOrganizationsCreate - Creates an Apigee organization. See [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).
    **/
    apigeeOrganizationsCreate(req: operations.ApigeeOrganizationsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsCreateResponse>;
    /**
     * apigeeOrganizationsDatacollectorsCreate - Creates a new data collector.
    **/
    apigeeOrganizationsDatacollectorsCreate(req: operations.ApigeeOrganizationsDatacollectorsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsDatacollectorsCreateResponse>;
    /**
     * apigeeOrganizationsDatacollectorsList - Lists all data collectors.
    **/
    apigeeOrganizationsDatacollectorsList(req: operations.ApigeeOrganizationsDatacollectorsListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsDatacollectorsListResponse>;
    /**
     * apigeeOrganizationsDevelopersAppsAttributes - Updates attributes for a developer app. This API replaces the current attributes with those specified in the request.
    **/
    apigeeOrganizationsDevelopersAppsAttributes(req: operations.ApigeeOrganizationsDevelopersAppsAttributesRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsDevelopersAppsAttributesResponse>;
    /**
     * apigeeOrganizationsDevelopersAppsCreate - Creates an app associated with a developer. This API associates the developer app with the specified API product and auto-generates an API key for the app to use in calls to API proxies inside that API product. The `name` is the unique ID of the app that you can use in API calls. The `DisplayName` (set as an attribute) appears in the UI. If you don't set the `DisplayName` attribute, the `name` appears in the UI.
    **/
    apigeeOrganizationsDevelopersAppsCreate(req: operations.ApigeeOrganizationsDevelopersAppsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsDevelopersAppsCreateResponse>;
    /**
     * apigeeOrganizationsDevelopersAppsKeysCreate - Creates a custom consumer key and secret for a developer app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. **Note**: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteDeveloperAppKey API.
    **/
    apigeeOrganizationsDevelopersAppsKeysCreate(req: operations.ApigeeOrganizationsDevelopersAppsKeysCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsDevelopersAppsKeysCreateResponse>;
    /**
     * apigeeOrganizationsDevelopersAppsKeysCreateCreate - Creates a custom consumer key and secret for a developer app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. **Note**: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteDeveloperAppKey API.
    **/
    apigeeOrganizationsDevelopersAppsKeysCreateCreate(req: operations.ApigeeOrganizationsDevelopersAppsKeysCreateCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsDevelopersAppsKeysCreateCreateResponse>;
    /**
     * apigeeOrganizationsDevelopersAppsList - Lists all apps created by a developer in an Apigee organization. Optionally, you can request an expanded view of the developer apps. A maximum of 100 developer apps are returned per API call. You can paginate the list of deveoper apps returned using the `startKey` and `count` query parameters.
    **/
    apigeeOrganizationsDevelopersAppsList(req: operations.ApigeeOrganizationsDevelopersAppsListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsDevelopersAppsListResponse>;
    /**
     * apigeeOrganizationsDevelopersAttributes - Updates developer attributes. This API replaces the existing attributes with those specified in the request. Add new attributes, and include or exclude any existing attributes that you want to retain or remove, respectively. The custom attribute limit is 18. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (default). Any custom attributes associated with these entities are cached for at least 180 seconds after the entity is accessed at runtime. Therefore, an `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.
    **/
    apigeeOrganizationsDevelopersAttributes(req: operations.ApigeeOrganizationsDevelopersAttributesRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsDevelopersAttributesResponse>;
    /**
     * apigeeOrganizationsDevelopersAttributesList - Returns a list of all developer attributes.
    **/
    apigeeOrganizationsDevelopersAttributesList(req: operations.ApigeeOrganizationsDevelopersAttributesListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsDevelopersAttributesListResponse>;
    /**
     * apigeeOrganizationsDevelopersBalanceAdjust - Adjust the prepaid balance for the developer. This API will be used in scenarios where the developer has been under-charged or over-charged.
    **/
    apigeeOrganizationsDevelopersBalanceAdjust(req: operations.ApigeeOrganizationsDevelopersBalanceAdjustRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsDevelopersBalanceAdjustResponse>;
    /**
     * apigeeOrganizationsDevelopersBalanceCredit - Credits the account balance for the developer.
    **/
    apigeeOrganizationsDevelopersBalanceCredit(req: operations.ApigeeOrganizationsDevelopersBalanceCreditRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsDevelopersBalanceCreditResponse>;
    /**
     * apigeeOrganizationsDevelopersCreate - Creates a developer. Once created, the developer can register an app and obtain an API key. At creation time, a developer is set as `active`. To change the developer status, use the SetDeveloperStatus API.
    **/
    apigeeOrganizationsDevelopersCreate(req: operations.ApigeeOrganizationsDevelopersCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsDevelopersCreateResponse>;
    /**
     * apigeeOrganizationsDevelopersList - Lists all developers in an organization by email address. By default, the response does not include company developers. Set the `includeCompany` query parameter to `true` to include company developers. **Note**: A maximum of 1000 developers are returned in the response. You paginate the list of developers returned using the `startKey` and `count` query parameters.
    **/
    apigeeOrganizationsDevelopersList(req: operations.ApigeeOrganizationsDevelopersListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsDevelopersListResponse>;
    /**
     * apigeeOrganizationsDevelopersSubscriptionsCreate - Creates a subscription to an API product.
    **/
    apigeeOrganizationsDevelopersSubscriptionsCreate(req: operations.ApigeeOrganizationsDevelopersSubscriptionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsDevelopersSubscriptionsCreateResponse>;
    /**
     * apigeeOrganizationsDevelopersSubscriptionsExpire - Expires an API product subscription immediately.
    **/
    apigeeOrganizationsDevelopersSubscriptionsExpire(req: operations.ApigeeOrganizationsDevelopersSubscriptionsExpireRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsDevelopersSubscriptionsExpireResponse>;
    /**
     * apigeeOrganizationsDevelopersSubscriptionsList - Lists all API product subscriptions for a developer.
    **/
    apigeeOrganizationsDevelopersSubscriptionsList(req: operations.ApigeeOrganizationsDevelopersSubscriptionsListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsDevelopersSubscriptionsListResponse>;
    /**
     * apigeeOrganizationsEndpointAttachmentsCreate - Creates an endpoint attachment. **Note:** Not supported for Apigee hybrid.
    **/
    apigeeOrganizationsEndpointAttachmentsCreate(req: operations.ApigeeOrganizationsEndpointAttachmentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEndpointAttachmentsCreateResponse>;
    /**
     * apigeeOrganizationsEndpointAttachmentsList - Lists the endpoint attachments in an organization.
    **/
    apigeeOrganizationsEndpointAttachmentsList(req: operations.ApigeeOrganizationsEndpointAttachmentsListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEndpointAttachmentsListResponse>;
    /**
     * apigeeOrganizationsEnvgroupsCreate - Creates a new environment group.
    **/
    apigeeOrganizationsEnvgroupsCreate(req: operations.ApigeeOrganizationsEnvgroupsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvgroupsCreateResponse>;
    /**
     * apigeeOrganizationsEnvgroupsList - Lists all environment groups.
    **/
    apigeeOrganizationsEnvgroupsList(req: operations.ApigeeOrganizationsEnvgroupsListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvgroupsListResponse>;
    /**
     * apigeeOrganizationsEnvironmentsAnalyticsExportsCreate - Submit a data export job to be processed in the background. If the request is successful, the API returns a 201 status, a URI that can be used to retrieve the status of the export job, and the `state` value of "enqueued".
    **/
    apigeeOrganizationsEnvironmentsAnalyticsExportsCreate(req: operations.ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateResponse>;
    /**
     * apigeeOrganizationsEnvironmentsAnalyticsExportsList - Lists the details and status of all analytics export jobs belonging to the parent organization and environment.
    **/
    apigeeOrganizationsEnvironmentsAnalyticsExportsList(req: operations.ApigeeOrganizationsEnvironmentsAnalyticsExportsListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsAnalyticsExportsListResponse>;
    /**
     * apigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreate - Creates a debug session for a deployed API Proxy revision.
    **/
    apigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreate(req: operations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateResponse>;
    /**
     * apigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteData - Deletes the data from a debug session. This does not cancel the debug session or prevent further data from being collected if the session is still active in runtime pods.
    **/
    apigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteData(req: operations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataResponse>;
    /**
     * apigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsList - Lists debug sessions that are currently active in the given API Proxy revision.
    **/
    apigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsList(req: operations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListResponse>;
    /**
     * apigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReport - Generates a report for a dry run analysis of a DeployApiProxy request without committing the deployment. In addition to the standard validations performed when adding deployments, additional analysis will be done to detect possible traffic routing changes that would result from this deployment being created. Any potential routing conflicts or unsafe changes will be reported in the response. This routing analysis is not performed for a non-dry-run DeployApiProxy request. For a request path `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}/deployments:generateDeployChangeReport`, two permissions are required: * `apigee.deployments.create` on the resource `organizations/{org}/environments/{env}` * `apigee.proxyrevisions.deploy` on the resource `organizations/{org}/apis/{api}/revisions/{rev}`
    **/
    apigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReport(req: operations.ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportResponse>;
    /**
     * apigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReport - Generates a report for a dry run analysis of an UndeployApiProxy request without committing the undeploy. In addition to the standard validations performed when removing deployments, additional analysis will be done to detect possible traffic routing changes that would result from this deployment being removed. Any potential routing conflicts or unsafe changes will be reported in the response. This routing analysis is not performed for a non-dry-run UndeployApiProxy request. For a request path `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}/deployments:generateUndeployChangeReport`, two permissions are required: * `apigee.deployments.delete` on the resource `organizations/{org}/environments/{env}` * `apigee.proxyrevisions.undeploy` on the resource `organizations/{org}/apis/{api}/revisions/{rev}`
    **/
    apigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReport(req: operations.ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportResponse>;
    /**
     * apigeeOrganizationsEnvironmentsArchiveDeploymentsCreate - Creates a new ArchiveDeployment.
    **/
    apigeeOrganizationsEnvironmentsArchiveDeploymentsCreate(req: operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateResponse>;
    /**
     * apigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrl - Generates a signed URL for downloading the original zip file used to create an Archive Deployment. The URL is only valid for a limited period and should be used within minutes after generation. Each call returns a new upload URL.
    **/
    apigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrl(req: operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlResponse>;
    /**
     * apigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrl - Generates a signed URL for uploading an Archive zip file to Google Cloud Storage. Once the upload is complete, the signed URL should be passed to CreateArchiveDeployment. When uploading to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * Source file size should not exceed 1GB limit. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified: * `content-type: application/zip` * `x-goog-content-length-range: 0,1073741824` And this header SHOULD NOT be specified: * `Authorization: Bearer YOUR_TOKEN`
    **/
    apigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrl(req: operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlResponse>;
    /**
     * apigeeOrganizationsEnvironmentsArchiveDeploymentsList - Lists the ArchiveDeployments in the specified Environment.
    **/
    apigeeOrganizationsEnvironmentsArchiveDeploymentsList(req: operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsListResponse>;
    /**
     * apigeeOrganizationsEnvironmentsGetIamPolicy - Gets the IAM policy on an environment. For more information, see [Manage users, roles, and permissions using the API](https://cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles). You must have the `apigee.environments.getIamPolicy` permission to call this API.
    **/
    apigeeOrganizationsEnvironmentsGetIamPolicy(req: operations.ApigeeOrganizationsEnvironmentsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsGetIamPolicyResponse>;
    /**
     * apigeeOrganizationsEnvironmentsKeystoresAliasesCreate - Creates an alias from a key/certificate pair. The structure of the request is controlled by the `format` query parameter: - `keycertfile` - Separate PEM-encoded key and certificate files are uploaded. Set `Content-Type: multipart/form-data` and include the `keyFile`, `certFile`, and `password` (if keys are encrypted) fields in the request body. If uploading to a truststore, omit `keyFile`. - `pkcs12` - A PKCS12 file is uploaded. Set `Content-Type: multipart/form-data`, provide the file in the `file` field, and include the `password` field if the file is encrypted in the request body. - `selfsignedcert` - A new private key and certificate are generated. Set `Content-Type: application/json` and include CertificateGenerationSpec in the request body.
    **/
    apigeeOrganizationsEnvironmentsKeystoresAliasesCreate(req: operations.ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateResponse>;
    /**
     * apigeeOrganizationsEnvironmentsKeystoresAliasesCsr - Generates a PKCS #10 Certificate Signing Request for the private key in an alias.
    **/
    apigeeOrganizationsEnvironmentsKeystoresAliasesCsr(req: operations.ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrResponse>;
    /**
     * apigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificate - Gets the certificate from an alias in PEM-encoded form.
    **/
    apigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificate(req: operations.ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateResponse>;
    /**
     * apigeeOrganizationsEnvironmentsKeystoresCreate - Creates a keystore or truststore. - Keystore: Contains certificates and their associated keys. - Truststore: Contains trusted certificates used to validate a server's certificate. These certificates are typically self-signed certificates or certificates that are not signed by a trusted CA.
    **/
    apigeeOrganizationsEnvironmentsKeystoresCreate(req: operations.ApigeeOrganizationsEnvironmentsKeystoresCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsKeystoresCreateResponse>;
    /**
     * apigeeOrganizationsEnvironmentsQueriesCreate - Submit a query to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of "enqueued" means that the request succeeded.
    **/
    apigeeOrganizationsEnvironmentsQueriesCreate(req: operations.ApigeeOrganizationsEnvironmentsQueriesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsQueriesCreateResponse>;
    /**
     * apigeeOrganizationsEnvironmentsQueriesList - Return a list of Asynchronous Queries
    **/
    apigeeOrganizationsEnvironmentsQueriesList(req: operations.ApigeeOrganizationsEnvironmentsQueriesListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsQueriesListResponse>;
    /**
     * apigeeOrganizationsEnvironmentsReferencesCreate - Creates a Reference in the specified environment.
    **/
    apigeeOrganizationsEnvironmentsReferencesCreate(req: operations.ApigeeOrganizationsEnvironmentsReferencesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsReferencesCreateResponse>;
    /**
     * apigeeOrganizationsEnvironmentsResourcefilesCreate - Creates a resource file. Specify the `Content-Type` as `application/octet-stream` or `multipart/form-data`. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).
    **/
    apigeeOrganizationsEnvironmentsResourcefilesCreate(req: operations.ApigeeOrganizationsEnvironmentsResourcefilesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsResourcefilesCreateResponse>;
    /**
     * apigeeOrganizationsEnvironmentsResourcefilesDelete - Deletes a resource file. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).
    **/
    apigeeOrganizationsEnvironmentsResourcefilesDelete(req: operations.ApigeeOrganizationsEnvironmentsResourcefilesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsResourcefilesDeleteResponse>;
    /**
     * apigeeOrganizationsEnvironmentsResourcefilesGet - Gets the contents of a resource file. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).
    **/
    apigeeOrganizationsEnvironmentsResourcefilesGet(req: operations.ApigeeOrganizationsEnvironmentsResourcefilesGetRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsResourcefilesGetResponse>;
    /**
     * apigeeOrganizationsEnvironmentsResourcefilesList - Lists all resource files, optionally filtering by type. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).
    **/
    apigeeOrganizationsEnvironmentsResourcefilesList(req: operations.ApigeeOrganizationsEnvironmentsResourcefilesListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsResourcefilesListResponse>;
    /**
     * apigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResources - Lists all resource files, optionally filtering by type. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).
    **/
    apigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResources(req: operations.ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesResponse>;
    /**
     * apigeeOrganizationsEnvironmentsResourcefilesUpdate - Updates a resource file. Specify the `Content-Type` as `application/octet-stream` or `multipart/form-data`. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).
    **/
    apigeeOrganizationsEnvironmentsResourcefilesUpdate(req: operations.ApigeeOrganizationsEnvironmentsResourcefilesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsResourcefilesUpdateResponse>;
    /**
     * apigeeOrganizationsEnvironmentsSecurityReportsCreate - Submit a report request to be processed in the background. If the submission succeeds, the API returns a 200 status and an ID that refer to the report request. In addition to the HTTP status 200, the `state` of "enqueued" means that the request succeeded.
    **/
    apigeeOrganizationsEnvironmentsSecurityReportsCreate(req: operations.ApigeeOrganizationsEnvironmentsSecurityReportsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsSecurityReportsCreateResponse>;
    /**
     * apigeeOrganizationsEnvironmentsSecurityReportsList - Return a list of Security Reports
    **/
    apigeeOrganizationsEnvironmentsSecurityReportsList(req: operations.ApigeeOrganizationsEnvironmentsSecurityReportsListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsSecurityReportsListResponse>;
    /**
     * apigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStats - Retrieve security statistics as tabular rows.
    **/
    apigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStats(req: operations.ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsResponse>;
    /**
     * apigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStats - Retrieve security statistics as a collection of time series.
    **/
    apigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStats(req: operations.ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsResponse>;
    /**
     * apigeeOrganizationsEnvironmentsSetIamPolicy - Sets the IAM policy on an environment, if the policy already exists it will be replaced. For more information, see [Manage users, roles, and permissions using the API](https://cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles). You must have the `apigee.environments.setIamPolicy` permission to call this API.
    **/
    apigeeOrganizationsEnvironmentsSetIamPolicy(req: operations.ApigeeOrganizationsEnvironmentsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsSetIamPolicyResponse>;
    /**
     * apigeeOrganizationsEnvironmentsSharedflowsRevisionsDeploy - Deploys a revision of a shared flow. If another revision of the same shared flow is currently deployed, set the `override` parameter to `true` to have this revision replace the currently deployed revision. You cannot use a shared flow until it has been deployed to an environment. For a request path `organizations/{org}/environments/{env}/sharedflows/{sf}/revisions/{rev}/deployments`, two permissions are required: * `apigee.deployments.create` on the resource `organizations/{org}/environments/{env}` * `apigee.sharedflowrevisions.deploy` on the resource `organizations/{org}/sharedflows/{sf}/revisions/{rev}`
    **/
    apigeeOrganizationsEnvironmentsSharedflowsRevisionsDeploy(req: operations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployResponse>;
    /**
     * apigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeployments - Gets the deployment of a shared flow revision and actual state reported by runtime pods.
    **/
    apigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeployments(req: operations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsResponse>;
    /**
     * apigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeploy - Undeploys a shared flow revision from an environment. For a request path `organizations/{org}/environments/{env}/sharedflows/{sf}/revisions/{rev}/deployments`, two permissions are required: * `apigee.deployments.delete` on the resource `organizations/{org}/environments/{env}` * `apigee.sharedflowrevisions.undeploy` on the resource `organizations/{org}/sharedflows/{sf}/revisions/{rev}`
    **/
    apigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeploy(req: operations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployResponse>;
    /**
     * apigeeOrganizationsEnvironmentsSubscribe - Creates a subscription for the environment's Pub/Sub topic. The server will assign a random name for this subscription. The "name" and "push_config" must *not* be specified.
    **/
    apigeeOrganizationsEnvironmentsSubscribe(req: operations.ApigeeOrganizationsEnvironmentsSubscribeRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsSubscribeResponse>;
    /**
     * apigeeOrganizationsEnvironmentsTargetserversCreate - Creates a TargetServer in the specified environment.
    **/
    apigeeOrganizationsEnvironmentsTargetserversCreate(req: operations.ApigeeOrganizationsEnvironmentsTargetserversCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsTargetserversCreateResponse>;
    /**
     * apigeeOrganizationsEnvironmentsTestIamPermissions - Tests the permissions of a user on an environment, and returns a subset of permissions that the user has on the environment. If the environment does not exist, an empty permission set is returned (a NOT_FOUND error is not returned).
    **/
    apigeeOrganizationsEnvironmentsTestIamPermissions(req: operations.ApigeeOrganizationsEnvironmentsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsTestIamPermissionsResponse>;
    /**
     * apigeeOrganizationsEnvironmentsTraceConfigOverridesCreate - Creates a trace configuration override. The response contains a system-generated UUID, that can be used to view, update, or delete the configuration override. Use the List API to view the existing trace configuration overrides.
    **/
    apigeeOrganizationsEnvironmentsTraceConfigOverridesCreate(req: operations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateResponse>;
    /**
     * apigeeOrganizationsEnvironmentsTraceConfigOverridesList - Lists all of the distributed trace configuration overrides in an environment.
    **/
    apigeeOrganizationsEnvironmentsTraceConfigOverridesList(req: operations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesListResponse>;
    /**
     * apigeeOrganizationsEnvironmentsUnsubscribe - Deletes a subscription for the environment's Pub/Sub topic.
    **/
    apigeeOrganizationsEnvironmentsUnsubscribe(req: operations.ApigeeOrganizationsEnvironmentsUnsubscribeRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsEnvironmentsUnsubscribeResponse>;
    /**
     * apigeeOrganizationsGetProjectMapping - Gets the project ID and region for an Apigee organization.
    **/
    apigeeOrganizationsGetProjectMapping(req: operations.ApigeeOrganizationsGetProjectMappingRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsGetProjectMappingResponse>;
    /**
     * apigeeOrganizationsGetSyncAuthorization - Lists the service accounts with the permissions required to allow the Synchronizer to download environment data from the control plane. An ETag is returned in the response to `getSyncAuthorization`. Pass that ETag when calling [setSyncAuthorization](setSyncAuthorization) to ensure that you are updating the correct version. If you don't pass the ETag in the call to `setSyncAuthorization`, then the existing authorization is overwritten indiscriminately. For more information, see [Configure the Synchronizer](https://cloud.google.com/apigee/docs/hybrid/latest/synchronizer-access). **Note**: Available to Apigee hybrid only.
    **/
    apigeeOrganizationsGetSyncAuthorization(req: operations.ApigeeOrganizationsGetSyncAuthorizationRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsGetSyncAuthorizationResponse>;
    /**
     * apigeeOrganizationsHostQueriesCreate - Submit a query at host level to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of "enqueued" means that the request succeeded.
    **/
    apigeeOrganizationsHostQueriesCreate(req: operations.ApigeeOrganizationsHostQueriesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsHostQueriesCreateResponse>;
    /**
     * apigeeOrganizationsHostQueriesList - Return a list of Asynchronous Queries at host level.
    **/
    apigeeOrganizationsHostQueriesList(req: operations.ApigeeOrganizationsHostQueriesListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsHostQueriesListResponse>;
    /**
     * apigeeOrganizationsHostSecurityReportsCreate - Submit a query at host level to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of "enqueued" means that the request succeeded.
    **/
    apigeeOrganizationsHostSecurityReportsCreate(req: operations.ApigeeOrganizationsHostSecurityReportsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsHostSecurityReportsCreateResponse>;
    /**
     * apigeeOrganizationsHostSecurityReportsList - Return a list of Security Reports at host level.
    **/
    apigeeOrganizationsHostSecurityReportsList(req: operations.ApigeeOrganizationsHostSecurityReportsListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsHostSecurityReportsListResponse>;
    /**
     * apigeeOrganizationsInstancesAttachmentsCreate - Creates a new attachment of an environment to an instance. **Note:** Not supported for Apigee hybrid.
    **/
    apigeeOrganizationsInstancesAttachmentsCreate(req: operations.ApigeeOrganizationsInstancesAttachmentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsInstancesAttachmentsCreateResponse>;
    /**
     * apigeeOrganizationsInstancesAttachmentsList - Lists all attachments to an instance. **Note:** Not supported for Apigee hybrid.
    **/
    apigeeOrganizationsInstancesAttachmentsList(req: operations.ApigeeOrganizationsInstancesAttachmentsListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsInstancesAttachmentsListResponse>;
    /**
     * apigeeOrganizationsInstancesCanaryevaluationsCreate - Creates a new canary evaluation for an organization.
    **/
    apigeeOrganizationsInstancesCanaryevaluationsCreate(req: operations.ApigeeOrganizationsInstancesCanaryevaluationsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsInstancesCanaryevaluationsCreateResponse>;
    /**
     * apigeeOrganizationsInstancesCreate - Creates an Apigee runtime instance. The instance is accessible from the authorized network configured on the organization. **Note:** Not supported for Apigee hybrid.
    **/
    apigeeOrganizationsInstancesCreate(req: operations.ApigeeOrganizationsInstancesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsInstancesCreateResponse>;
    /**
     * apigeeOrganizationsInstancesList - Lists all Apigee runtime instances for the organization. **Note:** Not supported for Apigee hybrid.
    **/
    apigeeOrganizationsInstancesList(req: operations.ApigeeOrganizationsInstancesListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsInstancesListResponse>;
    /**
     * apigeeOrganizationsInstancesNatAddressesActivate - Activates the NAT address. The Apigee instance can now use this for Internet egress traffic. **Note:** Not supported for Apigee hybrid.
    **/
    apigeeOrganizationsInstancesNatAddressesActivate(req: operations.ApigeeOrganizationsInstancesNatAddressesActivateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsInstancesNatAddressesActivateResponse>;
    /**
     * apigeeOrganizationsInstancesNatAddressesCreate - Creates a NAT address. The address is created in the RESERVED state and a static external IP address will be provisioned. At this time, the instance will not use this IP address for Internet egress traffic. The address can be activated for use once any required firewall IP whitelisting has been completed. **Note:** Not supported for Apigee hybrid.
    **/
    apigeeOrganizationsInstancesNatAddressesCreate(req: operations.ApigeeOrganizationsInstancesNatAddressesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsInstancesNatAddressesCreateResponse>;
    /**
     * apigeeOrganizationsInstancesNatAddressesList - Lists the NAT addresses for an Apigee instance. **Note:** Not supported for Apigee hybrid.
    **/
    apigeeOrganizationsInstancesNatAddressesList(req: operations.ApigeeOrganizationsInstancesNatAddressesListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsInstancesNatAddressesListResponse>;
    /**
     * apigeeOrganizationsInstancesReportStatus - Reports the latest status for a runtime instance.
    **/
    apigeeOrganizationsInstancesReportStatus(req: operations.ApigeeOrganizationsInstancesReportStatusRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsInstancesReportStatusResponse>;
    /**
     * apigeeOrganizationsKeyvaluemapsCreate - Creates a key value map in an organization.
    **/
    apigeeOrganizationsKeyvaluemapsCreate(req: operations.ApigeeOrganizationsKeyvaluemapsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsKeyvaluemapsCreateResponse>;
    /**
     * apigeeOrganizationsKeyvaluemapsEntriesCreate - Creates key value entries in a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.
    **/
    apigeeOrganizationsKeyvaluemapsEntriesCreate(req: operations.ApigeeOrganizationsKeyvaluemapsEntriesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsKeyvaluemapsEntriesCreateResponse>;
    /**
     * apigeeOrganizationsKeyvaluemapsEntriesList - Lists key value entries for key values maps scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.
    **/
    apigeeOrganizationsKeyvaluemapsEntriesList(req: operations.ApigeeOrganizationsKeyvaluemapsEntriesListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsKeyvaluemapsEntriesListResponse>;
    /**
     * apigeeOrganizationsList - Lists the Apigee organizations and associated GCP projects that you have permission to access. See [Understanding organizations](https://cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure).
    **/
    apigeeOrganizationsList(req: operations.ApigeeOrganizationsListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsListResponse>;
    /**
     * apigeeOrganizationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    apigeeOrganizationsOperationsList(req: operations.ApigeeOrganizationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsOperationsListResponse>;
    /**
     * apigeeOrganizationsReportsCreate - Creates a Custom Report for an Organization. A Custom Report provides Apigee Customers to create custom dashboards in addition to the standard dashboards which are provided. The Custom Report in its simplest form contains specifications about metrics, dimensions and filters. It is important to note that the custom report by itself does not provide an executable entity. The Edge UI converts the custom report definition into an analytics query and displays the result in a chart.
    **/
    apigeeOrganizationsReportsCreate(req: operations.ApigeeOrganizationsReportsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsReportsCreateResponse>;
    /**
     * apigeeOrganizationsReportsList - Return a list of Custom Reports
    **/
    apigeeOrganizationsReportsList(req: operations.ApigeeOrganizationsReportsListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsReportsListResponse>;
    /**
     * apigeeOrganizationsReportsUpdate - Update an existing custom report definition
    **/
    apigeeOrganizationsReportsUpdate(req: operations.ApigeeOrganizationsReportsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsReportsUpdateResponse>;
    /**
     * apigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScores - ComputeEnvironmentScores calculates scores for requested time range for the specified security profile and environment.
    **/
    apigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScores(req: operations.ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresResponse>;
    /**
     * apigeeOrganizationsSecurityProfilesEnvironmentsCreate - CreateSecurityProfileEnvironmentAssociation creates profile environment association i.e. attaches environment to security profile.
    **/
    apigeeOrganizationsSecurityProfilesEnvironmentsCreate(req: operations.ApigeeOrganizationsSecurityProfilesEnvironmentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsSecurityProfilesEnvironmentsCreateResponse>;
    /**
     * apigeeOrganizationsSecurityProfilesList - ListSecurityProfiles lists all the security profiles associated with the org including attached and unattached profiles.
    **/
    apigeeOrganizationsSecurityProfilesList(req: operations.ApigeeOrganizationsSecurityProfilesListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsSecurityProfilesListResponse>;
    /**
     * apigeeOrganizationsSecurityProfilesListRevisions - ListSecurityProfileRevisions lists all the revisions of the security profile.
    **/
    apigeeOrganizationsSecurityProfilesListRevisions(req: operations.ApigeeOrganizationsSecurityProfilesListRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsSecurityProfilesListRevisionsResponse>;
    /**
     * apigeeOrganizationsSetAddons - Configures the add-ons for the Apigee organization. The existing add-on configuration will be fully replaced.
    **/
    apigeeOrganizationsSetAddons(req: operations.ApigeeOrganizationsSetAddonsRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsSetAddonsResponse>;
    /**
     * apigeeOrganizationsSetSyncAuthorization - Sets the permissions required to allow the Synchronizer to download environment data from the control plane. You must call this API to enable proper functioning of hybrid. Pass the ETag when calling `setSyncAuthorization` to ensure that you are updating the correct version. To get an ETag, call [getSyncAuthorization](getSyncAuthorization). If you don't pass the ETag in the call to `setSyncAuthorization`, then the existing authorization is overwritten indiscriminately. For more information, see [Configure the Synchronizer](https://cloud.google.com/apigee/docs/hybrid/latest/synchronizer-access). **Note**: Available to Apigee hybrid only.
    **/
    apigeeOrganizationsSetSyncAuthorization(req: operations.ApigeeOrganizationsSetSyncAuthorizationRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsSetSyncAuthorizationResponse>;
    /**
     * apigeeOrganizationsSharedflowsCreate - Uploads a ZIP-formatted shared flow configuration bundle to an organization. If the shared flow already exists, this creates a new revision of it. If the shared flow does not exist, this creates it. Once imported, the shared flow revision must be deployed before it can be accessed at runtime. The size limit of a shared flow bundle is 15 MB.
    **/
    apigeeOrganizationsSharedflowsCreate(req: operations.ApigeeOrganizationsSharedflowsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsSharedflowsCreateResponse>;
    /**
     * apigeeOrganizationsSharedflowsList - Lists all shared flows in the organization.
    **/
    apigeeOrganizationsSharedflowsList(req: operations.ApigeeOrganizationsSharedflowsListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsSharedflowsListResponse>;
    /**
     * apigeeOrganizationsSharedflowsRevisionsDeploymentsList - Lists all deployments of a shared flow revision.
    **/
    apigeeOrganizationsSharedflowsRevisionsDeploymentsList(req: operations.ApigeeOrganizationsSharedflowsRevisionsDeploymentsListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsSharedflowsRevisionsDeploymentsListResponse>;
    /**
     * apigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevision - Updates a shared flow revision. This operation is only allowed on revisions which have never been deployed. After deployment a revision becomes immutable, even if it becomes undeployed. The payload is a ZIP-formatted shared flow. Content type must be either multipart/form-data or application/octet-stream.
    **/
    apigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevision(req: operations.ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionResponse>;
    /**
     * apigeeOrganizationsSitesApicategoriesCreate - Creates a new category on the portal.
    **/
    apigeeOrganizationsSitesApicategoriesCreate(req: operations.ApigeeOrganizationsSitesApicategoriesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsSitesApicategoriesCreateResponse>;
    /**
     * apigeeOrganizationsSitesApicategoriesDelete - Deletes a category from the portal.
    **/
    apigeeOrganizationsSitesApicategoriesDelete(req: operations.ApigeeOrganizationsSitesApicategoriesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsSitesApicategoriesDeleteResponse>;
    /**
     * apigeeOrganizationsSitesApicategoriesGet - Gets a category on the portal.
    **/
    apigeeOrganizationsSitesApicategoriesGet(req: operations.ApigeeOrganizationsSitesApicategoriesGetRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsSitesApicategoriesGetResponse>;
    /**
     * apigeeOrganizationsSitesApicategoriesList - Lists the categories on the portal.
    **/
    apigeeOrganizationsSitesApicategoriesList(req: operations.ApigeeOrganizationsSitesApicategoriesListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsSitesApicategoriesListResponse>;
    /**
     * apigeeOrganizationsSitesApicategoriesPatch - Updates a category on the portal.
    **/
    apigeeOrganizationsSitesApicategoriesPatch(req: operations.ApigeeOrganizationsSitesApicategoriesPatchRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeOrganizationsSitesApicategoriesPatchResponse>;
}
