# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { ApigeeOrganizationsAnalyticsDatastoresCreateRequest, ApigeeOrganizationsAnalyticsDatastoresCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ApigeeOrganizationsAnalyticsDatastoresCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "est",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "at",
    alt: "proto",
    callback: "laborum",
    fields: "sunt",
    key: "ut",
    oauthToken: "et",
    prettyPrint: false,
    quotaUser: "veritatis",
    uploadType: "omnis",
    uploadProtocol: "natus",
  },
  request: {
    datastoreConfig: {
      bucketName: "voluptates",
      datasetName: "aspernatur",
      path: "vitae",
      projectId: "voluptatum",
      tablePrefix: "voluptas",
    },
    displayName: "libero",
    targetType: "non",
  },
};

sdk.organizations.apigeeOrganizationsAnalyticsDatastoresCreate(req).then((res: ApigeeOrganizationsAnalyticsDatastoresCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### organizations

* `apigeeOrganizationsAnalyticsDatastoresCreate` - Create a Datastore for an org
* `apigeeOrganizationsAnalyticsDatastoresList` - List Datastores
* `apigeeOrganizationsAnalyticsDatastoresTest` - Test if Datastore configuration is correct. This includes checking if credentials provided by customer have required permissions in target destination storage
* `apigeeOrganizationsApiproductsCreate` - Creates an API product in an organization. You create API products after you have proxied backend services using API proxies. An API product is a collection of API resources combined with quota settings and metadata that you can use to deliver customized and productized API bundles to your developer community. This metadata can include: - Scope - Environments - API proxies - Extensible profile API products enable you repackage APIs on the fly, without having to do any additional coding or configuration. Apigee recommends that you start with a simple API product including only required elements. You then provision credentials to apps to enable them to start testing your APIs. After you have authentication and authorization working against a simple API product, you can iterate to create finer-grained API products, defining different sets of API resources for each API product. **WARNING:** - If you don't specify an API proxy in the request body, *any* app associated with the product can make calls to *any* API in your entire organization. - If you don't specify an environment in the request body, the product allows access to all environments. For more information, see What is an API product?
* `apigeeOrganizationsApiproductsList` - Lists all API product names for an organization. Filter the list by passing an `attributename` and `attibutevalue`. The maximum number of API products returned is 1000. You can paginate the list of API products returned using the `startKey` and `count` query parameters.
* `apigeeOrganizationsApiproductsRateplansCreate` - Create a rate plan that is associated with an API product in an organization. Using rate plans, API product owners can monetize their API products by configuring one or more of the following: - Billing frequency - Initial setup fees for using an API product - Payment funding model (postpaid only) - Fixed recurring or consumption-based charges for using an API product - Revenue sharing with developer partners An API product can have multiple rate plans associated with it but *only one* rate plan can be active at any point of time. **Note: From the developer's perspective, they purchase API products not rate plans.
* `apigeeOrganizationsApiproductsRateplansList` - Lists all the rate plans for an API product.
* `apigeeOrganizationsApisCreate` - Creates an API proxy. The API proxy created will not be accessible at runtime until it is deployed to an environment. Create a new API proxy by setting the `name` query parameter to the name of the API proxy. Import an API proxy configuration bundle stored in zip format on your local machine to your organization by doing the following: * Set the `name` query parameter to the name of the API proxy. * Set the `action` query parameter to `import`. * Set the `Content-Type` header to `multipart/form-data`. * Pass as a file the name of API proxy configuration bundle stored in zip format on your local machine using the `file` form field. **Note**: To validate the API proxy configuration bundle only without importing it, set the `action` query parameter to `validate`. When importing an API proxy configuration bundle, if the API proxy does not exist, it will be created. If the API proxy exists, then a new revision is created. Invalid API proxy configurations are rejected, and a list of validation errors is returned to the client.
* `apigeeOrganizationsApisList` - Lists the names of all API proxies in an organization. The names returned correspond to the names defined in the configuration files for each API proxy.
* `apigeeOrganizationsCreate` - Creates an Apigee organization. See [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).
* `apigeeOrganizationsDatacollectorsCreate` - Creates a new data collector.
* `apigeeOrganizationsDatacollectorsList` - Lists all data collectors.
* `apigeeOrganizationsDevelopersAppsAttributes` - Updates attributes for a developer app. This API replaces the current attributes with those specified in the request.
* `apigeeOrganizationsDevelopersAppsCreate` - Creates an app associated with a developer. This API associates the developer app with the specified API product and auto-generates an API key for the app to use in calls to API proxies inside that API product. The `name` is the unique ID of the app that you can use in API calls. The `DisplayName` (set as an attribute) appears in the UI. If you don't set the `DisplayName` attribute, the `name` appears in the UI.
* `apigeeOrganizationsDevelopersAppsKeysCreate` - Creates a custom consumer key and secret for a developer app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. **Note**: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteDeveloperAppKey API.
* `apigeeOrganizationsDevelopersAppsKeysCreateCreate` - Creates a custom consumer key and secret for a developer app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. **Note**: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteDeveloperAppKey API.
* `apigeeOrganizationsDevelopersAppsList` - Lists all apps created by a developer in an Apigee organization. Optionally, you can request an expanded view of the developer apps. A maximum of 100 developer apps are returned per API call. You can paginate the list of deveoper apps returned using the `startKey` and `count` query parameters.
* `apigeeOrganizationsDevelopersAttributes` - Updates developer attributes. This API replaces the existing attributes with those specified in the request. Add new attributes, and include or exclude any existing attributes that you want to retain or remove, respectively. The custom attribute limit is 18. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (default). Any custom attributes associated with these entities are cached for at least 180 seconds after the entity is accessed at runtime. Therefore, an `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.
* `apigeeOrganizationsDevelopersAttributesList` - Returns a list of all developer attributes.
* `apigeeOrganizationsDevelopersBalanceAdjust` - Adjust the prepaid balance for the developer. This API will be used in scenarios where the developer has been under-charged or over-charged.
* `apigeeOrganizationsDevelopersBalanceCredit` - Credits the account balance for the developer.
* `apigeeOrganizationsDevelopersCreate` - Creates a developer. Once created, the developer can register an app and obtain an API key. At creation time, a developer is set as `active`. To change the developer status, use the SetDeveloperStatus API.
* `apigeeOrganizationsDevelopersList` - Lists all developers in an organization by email address. By default, the response does not include company developers. Set the `includeCompany` query parameter to `true` to include company developers. **Note**: A maximum of 1000 developers are returned in the response. You paginate the list of developers returned using the `startKey` and `count` query parameters.
* `apigeeOrganizationsDevelopersSubscriptionsCreate` - Creates a subscription to an API product. 
* `apigeeOrganizationsDevelopersSubscriptionsExpire` - Expires an API product subscription immediately.
* `apigeeOrganizationsDevelopersSubscriptionsList` - Lists all API product subscriptions for a developer.
* `apigeeOrganizationsEndpointAttachmentsCreate` - Creates an endpoint attachment. **Note:** Not supported for Apigee hybrid.
* `apigeeOrganizationsEndpointAttachmentsList` - Lists the endpoint attachments in an organization.
* `apigeeOrganizationsEnvgroupsCreate` - Creates a new environment group.
* `apigeeOrganizationsEnvgroupsList` - Lists all environment groups.
* `apigeeOrganizationsEnvironmentsAnalyticsExportsCreate` - Submit a data export job to be processed in the background. If the request is successful, the API returns a 201 status, a URI that can be used to retrieve the status of the export job, and the `state` value of "enqueued".
* `apigeeOrganizationsEnvironmentsAnalyticsExportsList` - Lists the details and status of all analytics export jobs belonging to the parent organization and environment.
* `apigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreate` - Creates a debug session for a deployed API Proxy revision.
* `apigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteData` - Deletes the data from a debug session. This does not cancel the debug session or prevent further data from being collected if the session is still active in runtime pods.
* `apigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsList` - Lists debug sessions that are currently active in the given API Proxy revision.
* `apigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReport` - Generates a report for a dry run analysis of a DeployApiProxy request without committing the deployment. In addition to the standard validations performed when adding deployments, additional analysis will be done to detect possible traffic routing changes that would result from this deployment being created. Any potential routing conflicts or unsafe changes will be reported in the response. This routing analysis is not performed for a non-dry-run DeployApiProxy request. For a request path `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}/deployments:generateDeployChangeReport`, two permissions are required: * `apigee.deployments.create` on the resource `organizations/{org}/environments/{env}` * `apigee.proxyrevisions.deploy` on the resource `organizations/{org}/apis/{api}/revisions/{rev}`
* `apigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReport` - Generates a report for a dry run analysis of an UndeployApiProxy request without committing the undeploy. In addition to the standard validations performed when removing deployments, additional analysis will be done to detect possible traffic routing changes that would result from this deployment being removed. Any potential routing conflicts or unsafe changes will be reported in the response. This routing analysis is not performed for a non-dry-run UndeployApiProxy request. For a request path `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}/deployments:generateUndeployChangeReport`, two permissions are required: * `apigee.deployments.delete` on the resource `organizations/{org}/environments/{env}` * `apigee.proxyrevisions.undeploy` on the resource `organizations/{org}/apis/{api}/revisions/{rev}`
* `apigeeOrganizationsEnvironmentsArchiveDeploymentsCreate` - Creates a new ArchiveDeployment.
* `apigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrl` - Generates a signed URL for downloading the original zip file used to create an Archive Deployment. The URL is only valid for a limited period and should be used within minutes after generation. Each call returns a new upload URL.
* `apigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrl` - Generates a signed URL for uploading an Archive zip file to Google Cloud Storage. Once the upload is complete, the signed URL should be passed to CreateArchiveDeployment. When uploading to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * Source file size should not exceed 1GB limit. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified: * `content-type: application/zip` * `x-goog-content-length-range: 0,1073741824` And this header SHOULD NOT be specified: * `Authorization: Bearer YOUR_TOKEN`
* `apigeeOrganizationsEnvironmentsArchiveDeploymentsList` - Lists the ArchiveDeployments in the specified Environment.
* `apigeeOrganizationsEnvironmentsGetIamPolicy` - Gets the IAM policy on an environment. For more information, see [Manage users, roles, and permissions using the API](https://cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles). You must have the `apigee.environments.getIamPolicy` permission to call this API.
* `apigeeOrganizationsEnvironmentsKeystoresAliasesCreate` - Creates an alias from a key/certificate pair. The structure of the request is controlled by the `format` query parameter: - `keycertfile` - Separate PEM-encoded key and certificate files are uploaded. Set `Content-Type: multipart/form-data` and include the `keyFile`, `certFile`, and `password` (if keys are encrypted) fields in the request body. If uploading to a truststore, omit `keyFile`. - `pkcs12` - A PKCS12 file is uploaded. Set `Content-Type: multipart/form-data`, provide the file in the `file` field, and include the `password` field if the file is encrypted in the request body. - `selfsignedcert` - A new private key and certificate are generated. Set `Content-Type: application/json` and include CertificateGenerationSpec in the request body.
* `apigeeOrganizationsEnvironmentsKeystoresAliasesCsr` - Generates a PKCS #10 Certificate Signing Request for the private key in an alias.
* `apigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificate` - Gets the certificate from an alias in PEM-encoded form.
* `apigeeOrganizationsEnvironmentsKeystoresCreate` - Creates a keystore or truststore. - Keystore: Contains certificates and their associated keys. - Truststore: Contains trusted certificates used to validate a server's certificate. These certificates are typically self-signed certificates or certificates that are not signed by a trusted CA.
* `apigeeOrganizationsEnvironmentsQueriesCreate` - Submit a query to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of "enqueued" means that the request succeeded.
* `apigeeOrganizationsEnvironmentsQueriesList` - Return a list of Asynchronous Queries
* `apigeeOrganizationsEnvironmentsReferencesCreate` - Creates a Reference in the specified environment.
* `apigeeOrganizationsEnvironmentsResourcefilesCreate` - Creates a resource file. Specify the `Content-Type` as `application/octet-stream` or `multipart/form-data`. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).
* `apigeeOrganizationsEnvironmentsResourcefilesDelete` - Deletes a resource file. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).
* `apigeeOrganizationsEnvironmentsResourcefilesGet` - Gets the contents of a resource file. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).
* `apigeeOrganizationsEnvironmentsResourcefilesList` - Lists all resource files, optionally filtering by type. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).
* `apigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResources` - Lists all resource files, optionally filtering by type. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).
* `apigeeOrganizationsEnvironmentsResourcefilesUpdate` - Updates a resource file. Specify the `Content-Type` as `application/octet-stream` or `multipart/form-data`. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).
* `apigeeOrganizationsEnvironmentsSecurityReportsCreate` - Submit a report request to be processed in the background. If the submission succeeds, the API returns a 200 status and an ID that refer to the report request. In addition to the HTTP status 200, the `state` of "enqueued" means that the request succeeded.
* `apigeeOrganizationsEnvironmentsSecurityReportsList` - Return a list of Security Reports
* `apigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStats` - Retrieve security statistics as tabular rows.
* `apigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStats` - Retrieve security statistics as a collection of time series.
* `apigeeOrganizationsEnvironmentsSetIamPolicy` - Sets the IAM policy on an environment, if the policy already exists it will be replaced. For more information, see [Manage users, roles, and permissions using the API](https://cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles). You must have the `apigee.environments.setIamPolicy` permission to call this API.
* `apigeeOrganizationsEnvironmentsSharedflowsRevisionsDeploy` - Deploys a revision of a shared flow. If another revision of the same shared flow is currently deployed, set the `override` parameter to `true` to have this revision replace the currently deployed revision. You cannot use a shared flow until it has been deployed to an environment. For a request path `organizations/{org}/environments/{env}/sharedflows/{sf}/revisions/{rev}/deployments`, two permissions are required: * `apigee.deployments.create` on the resource `organizations/{org}/environments/{env}` * `apigee.sharedflowrevisions.deploy` on the resource `organizations/{org}/sharedflows/{sf}/revisions/{rev}`
* `apigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeployments` - Gets the deployment of a shared flow revision and actual state reported by runtime pods.
* `apigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeploy` - Undeploys a shared flow revision from an environment. For a request path `organizations/{org}/environments/{env}/sharedflows/{sf}/revisions/{rev}/deployments`, two permissions are required: * `apigee.deployments.delete` on the resource `organizations/{org}/environments/{env}` * `apigee.sharedflowrevisions.undeploy` on the resource `organizations/{org}/sharedflows/{sf}/revisions/{rev}`
* `apigeeOrganizationsEnvironmentsSubscribe` - Creates a subscription for the environment's Pub/Sub topic. The server will assign a random name for this subscription. The "name" and "push_config" must *not* be specified.
* `apigeeOrganizationsEnvironmentsTargetserversCreate` - Creates a TargetServer in the specified environment.
* `apigeeOrganizationsEnvironmentsTestIamPermissions` - Tests the permissions of a user on an environment, and returns a subset of permissions that the user has on the environment. If the environment does not exist, an empty permission set is returned (a NOT_FOUND error is not returned).
* `apigeeOrganizationsEnvironmentsTraceConfigOverridesCreate` - Creates a trace configuration override. The response contains a system-generated UUID, that can be used to view, update, or delete the configuration override. Use the List API to view the existing trace configuration overrides.
* `apigeeOrganizationsEnvironmentsTraceConfigOverridesList` - Lists all of the distributed trace configuration overrides in an environment.
* `apigeeOrganizationsEnvironmentsUnsubscribe` - Deletes a subscription for the environment's Pub/Sub topic.
* `apigeeOrganizationsGetProjectMapping` - Gets the project ID and region for an Apigee organization.
* `apigeeOrganizationsGetSyncAuthorization` - Lists the service accounts with the permissions required to allow the Synchronizer to download environment data from the control plane. An ETag is returned in the response to `getSyncAuthorization`. Pass that ETag when calling [setSyncAuthorization](setSyncAuthorization) to ensure that you are updating the correct version. If you don't pass the ETag in the call to `setSyncAuthorization`, then the existing authorization is overwritten indiscriminately. For more information, see [Configure the Synchronizer](https://cloud.google.com/apigee/docs/hybrid/latest/synchronizer-access). **Note**: Available to Apigee hybrid only.
* `apigeeOrganizationsHostQueriesCreate` - Submit a query at host level to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of "enqueued" means that the request succeeded.
* `apigeeOrganizationsHostQueriesList` - Return a list of Asynchronous Queries at host level.
* `apigeeOrganizationsHostSecurityReportsCreate` - Submit a query at host level to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of "enqueued" means that the request succeeded.
* `apigeeOrganizationsHostSecurityReportsList` - Return a list of Security Reports at host level.
* `apigeeOrganizationsInstancesAttachmentsCreate` - Creates a new attachment of an environment to an instance. **Note:** Not supported for Apigee hybrid.
* `apigeeOrganizationsInstancesAttachmentsList` - Lists all attachments to an instance. **Note:** Not supported for Apigee hybrid.
* `apigeeOrganizationsInstancesCanaryevaluationsCreate` - Creates a new canary evaluation for an organization.
* `apigeeOrganizationsInstancesCreate` - Creates an Apigee runtime instance. The instance is accessible from the authorized network configured on the organization. **Note:** Not supported for Apigee hybrid.
* `apigeeOrganizationsInstancesList` - Lists all Apigee runtime instances for the organization. **Note:** Not supported for Apigee hybrid.
* `apigeeOrganizationsInstancesNatAddressesActivate` - Activates the NAT address. The Apigee instance can now use this for Internet egress traffic. **Note:** Not supported for Apigee hybrid.
* `apigeeOrganizationsInstancesNatAddressesCreate` - Creates a NAT address. The address is created in the RESERVED state and a static external IP address will be provisioned. At this time, the instance will not use this IP address for Internet egress traffic. The address can be activated for use once any required firewall IP whitelisting has been completed. **Note:** Not supported for Apigee hybrid.
* `apigeeOrganizationsInstancesNatAddressesList` - Lists the NAT addresses for an Apigee instance. **Note:** Not supported for Apigee hybrid.
* `apigeeOrganizationsInstancesReportStatus` - Reports the latest status for a runtime instance.
* `apigeeOrganizationsKeyvaluemapsCreate` - Creates a key value map in an organization.
* `apigeeOrganizationsKeyvaluemapsEntriesCreate` - Creates key value entries in a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.
* `apigeeOrganizationsKeyvaluemapsEntriesList` - Lists key value entries for key values maps scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.
* `apigeeOrganizationsList` - Lists the Apigee organizations and associated GCP projects that you have permission to access. See [Understanding organizations](https://cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure).
* `apigeeOrganizationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `apigeeOrganizationsReportsCreate` - Creates a Custom Report for an Organization. A Custom Report provides Apigee Customers to create custom dashboards in addition to the standard dashboards which are provided. The Custom Report in its simplest form contains specifications about metrics, dimensions and filters. It is important to note that the custom report by itself does not provide an executable entity. The Edge UI converts the custom report definition into an analytics query and displays the result in a chart.
* `apigeeOrganizationsReportsList` - Return a list of Custom Reports
* `apigeeOrganizationsReportsUpdate` - Update an existing custom report definition
* `apigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScores` - ComputeEnvironmentScores calculates scores for requested time range for the specified security profile and environment.
* `apigeeOrganizationsSecurityProfilesEnvironmentsCreate` - CreateSecurityProfileEnvironmentAssociation creates profile environment association i.e. attaches environment to security profile.
* `apigeeOrganizationsSecurityProfilesList` - ListSecurityProfiles lists all the security profiles associated with the org including attached and unattached profiles.
* `apigeeOrganizationsSecurityProfilesListRevisions` - ListSecurityProfileRevisions lists all the revisions of the security profile.
* `apigeeOrganizationsSetAddons` - Configures the add-ons for the Apigee organization. The existing add-on configuration will be fully replaced.
* `apigeeOrganizationsSetSyncAuthorization` - Sets the permissions required to allow the Synchronizer to download environment data from the control plane. You must call this API to enable proper functioning of hybrid. Pass the ETag when calling `setSyncAuthorization` to ensure that you are updating the correct version. To get an ETag, call [getSyncAuthorization](getSyncAuthorization). If you don't pass the ETag in the call to `setSyncAuthorization`, then the existing authorization is overwritten indiscriminately. For more information, see [Configure the Synchronizer](https://cloud.google.com/apigee/docs/hybrid/latest/synchronizer-access). **Note**: Available to Apigee hybrid only.
* `apigeeOrganizationsSharedflowsCreate` - Uploads a ZIP-formatted shared flow configuration bundle to an organization. If the shared flow already exists, this creates a new revision of it. If the shared flow does not exist, this creates it. Once imported, the shared flow revision must be deployed before it can be accessed at runtime. The size limit of a shared flow bundle is 15 MB.
* `apigeeOrganizationsSharedflowsList` - Lists all shared flows in the organization.
* `apigeeOrganizationsSharedflowsRevisionsDeploymentsList` - Lists all deployments of a shared flow revision.
* `apigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevision` - Updates a shared flow revision. This operation is only allowed on revisions which have never been deployed. After deployment a revision becomes immutable, even if it becomes undeployed. The payload is a ZIP-formatted shared flow. Content type must be either multipart/form-data or application/octet-stream.
* `apigeeOrganizationsSitesApicategoriesCreate` - Creates a new category on the portal.
* `apigeeOrganizationsSitesApicategoriesDelete` - Deletes a category from the portal.
* `apigeeOrganizationsSitesApicategoriesGet` - Gets a category on the portal.
* `apigeeOrganizationsSitesApicategoriesList` - Lists the categories on the portal.
* `apigeeOrganizationsSitesApicategoriesPatch` - Updates a category on the portal.

### projects

* `apigeeProjectsProvisionOrganization` - Provisions a new Apigee organization with a functioning runtime. This is the standard way to create trial organizations for a free Apigee trial.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
