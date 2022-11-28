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
import { AppengineAppsAuthorizedCertificatesCreateRequest, AppengineAppsAuthorizedCertificatesCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AppengineAppsAuthorizedCertificatesCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    appsId: "in",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "reprehenderit",
    alt: "proto",
    callback: "eos",
    fields: "ut",
    key: "laboriosam",
    oauthToken: "corrupti",
    prettyPrint: false,
    quotaUser: "est",
    uploadType: "similique",
    uploadProtocol: "aliquam",
  },
  request: {
    certificateRawData: {
      privateKey: "commodi",
      publicCertificate: "hic",
    },
    displayName: "aliquid",
    domainMappingsCount: 6358108789263637602,
    domainNames: [
      "voluptates",
    ],
    expireTime: "id",
    id: "non",
    managedCertificate: {
      lastRenewalTime: "ipsam",
      status: "OK",
    },
    name: "explicabo",
    visibleDomainMappings: [
      "sapiente",
      "quia",
    ],
  },
};

sdk.apps.appengineAppsAuthorizedCertificatesCreate(req).then((res: AppengineAppsAuthorizedCertificatesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### apps

* `appengineAppsAuthorizedCertificatesCreate` - Uploads the specified SSL certificate.
* `appengineAppsAuthorizedCertificatesDelete` - Deletes the specified SSL certificate.
* `appengineAppsAuthorizedCertificatesGet` - Gets the specified SSL certificate.
* `appengineAppsAuthorizedCertificatesList` - Lists all SSL certificates the user is authorized to administer.
* `appengineAppsAuthorizedCertificatesPatch` - Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.
* `appengineAppsAuthorizedDomainsList` - Lists all domains the user is authorized to administer.
* `appengineAppsCreate` - Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).
* `appengineAppsDomainMappingsCreate` - Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
* `appengineAppsDomainMappingsDelete` - Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
* `appengineAppsDomainMappingsGet` - Gets the specified domain mapping.
* `appengineAppsDomainMappingsList` - Lists the domain mappings on an application.
* `appengineAppsDomainMappingsPatch` - Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
* `appengineAppsFirewallIngressRulesBatchUpdate` - Replaces the entire firewall ruleset in one bulk operation. This overrides and replaces the rules of an existing firewall with the new rules.If the final rule does not match traffic with the '*' wildcard IP range, then an "allow all" rule is explicitly added to the end of the list.
* `appengineAppsFirewallIngressRulesCreate` - Creates a firewall rule for the application.
* `appengineAppsFirewallIngressRulesDelete` - Deletes the specified firewall rule.
* `appengineAppsFirewallIngressRulesGet` - Gets the specified firewall rule.
* `appengineAppsFirewallIngressRulesList` - Lists the firewall rules of an application.
* `appengineAppsFirewallIngressRulesPatch` - Updates the specified firewall rule.
* `appengineAppsGet` - Gets information about an application.
* `appengineAppsLocationsGet` - Gets information about a location.
* `appengineAppsLocationsList` - Lists information about the supported locations for this service.
* `appengineAppsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `appengineAppsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/*/operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `appengineAppsPatch` - Updates the specified Application resource. You can update the following fields: auth_domain - Google authentication domain for controlling user access to the application. default_cookie_expiration - Cookie expiration policy for the application. iap - Identity-Aware Proxy properties for the application.
* `appengineAppsRepair` - Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.
* `appengineAppsServicesDelete` - Deletes the specified service and all enclosed versions.
* `appengineAppsServicesGet` - Gets the current configuration of the specified service.
* `appengineAppsServicesList` - Lists all the services in the application.
* `appengineAppsServicesPatch` - Updates the configuration of the specified service.
* `appengineAppsServicesVersionsCreate` - Deploys code and resource files to a new version.
* `appengineAppsServicesVersionsDelete` - Deletes an existing Version resource.
* `appengineAppsServicesVersionsGet` - Gets the specified Version resource. By default, only a BASIC_VIEW will be returned. Specify the FULL_VIEW parameter to get the full resource.
* `appengineAppsServicesVersionsInstancesDebug` - Enables debugging on a VM instance. This allows you to use the SSH command to connect to the virtual machine where the instance lives. While in "debug mode", the instance continues to serve live traffic. You should delete the instance when you are done debugging and then allow the system to take over and determine if another instance should be started.Only applicable for instances in App Engine flexible environment.
* `appengineAppsServicesVersionsInstancesDelete` - Stops a running instance.The instance might be automatically recreated based on the scaling settings of the version. For more information, see "How Instances are Managed" (standard environment (https://cloud.google.com/appengine/docs/standard/python/how-instances-are-managed) | flexible environment (https://cloud.google.com/appengine/docs/flexible/python/how-instances-are-managed)).To ensure that instances are not re-created and avoid getting billed, you can stop all instances within the target version by changing the serving status of the version to STOPPED with the apps.services.versions.patch (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions/patch) method.
* `appengineAppsServicesVersionsInstancesGet` - Gets instance information.
* `appengineAppsServicesVersionsInstancesList` - Lists the instances of a version.Tip: To aggregate details about instances over time, see the Stackdriver Monitoring API (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list).
* `appengineAppsServicesVersionsList` - Lists the versions of a service.
* `appengineAppsServicesVersionsPatch` - Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses:Standard environment instance_class (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.instance_class)automatic scaling in the standard environment: automatic_scaling.min_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automaticScaling.standard_scheduler_settings.max_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.min_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_cpu_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_throughput_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings)basic scaling or manual scaling in the standard environment: serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.serving_status) manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#manualscaling)Flexible environment serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.serving_status)automatic scaling in the flexible environment: automatic_scaling.min_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cool_down_period_sec (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cpu_utilization.target_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling)manual scaling in the flexible environment: manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#manualscaling)

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
