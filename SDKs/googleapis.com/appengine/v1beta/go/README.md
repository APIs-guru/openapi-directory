# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.AppengineAppsAuthorizedCertificatesCreateRequest{
        Security: operations.AppengineAppsAuthorizedCertificatesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AppengineAppsAuthorizedCertificatesCreatePathParams{
            AppsID: "illum",
        },
        QueryParams: operations.AppengineAppsAuthorizedCertificatesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "quas",
            Alt: "proto",
            Callback: "adipisci",
            Fields: "deleniti",
            Key: "corrupti",
            OauthToken: "fuga",
            PrettyPrint: false,
            QuotaUser: "omnis",
            UploadType: "qui",
            UploadProtocol: "et",
        },
        Request: &shared.AuthorizedCertificate{
            CertificateRawData: &shared.CertificateRawData{
                PrivateKey: "possimus",
                PublicCertificate: "rerum",
            },
            DisplayName: "odio",
            DomainMappingsCount: 5943836182714085786,
            DomainNames: []string{
                "ea",
            },
            ExpireTime: "quam",
            ID: "dolorum",
            ManagedCertificate: &shared.ManagedCertificate{
                LastRenewalTime: "consequatur",
                Status: "FAILED_RETRYING_NOT_VISIBLE",
            },
            Name: "natus",
            VisibleDomainMappings: []string{
                "id",
                "ad",
                "non",
            },
        },
    }
    
    res, err := s.Apps.AppengineAppsAuthorizedCertificatesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthorizedCertificate != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### apps

* `AppengineAppsAuthorizedCertificatesCreate` - Uploads the specified SSL certificate.
* `AppengineAppsAuthorizedCertificatesDelete` - Deletes the specified SSL certificate.
* `AppengineAppsAuthorizedCertificatesGet` - Gets the specified SSL certificate.
* `AppengineAppsAuthorizedCertificatesList` - Lists all SSL certificates the user is authorized to administer.
* `AppengineAppsAuthorizedCertificatesPatch` - Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.
* `AppengineAppsAuthorizedDomainsList` - Lists all domains the user is authorized to administer.
* `AppengineAppsCreate` - Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).
* `AppengineAppsDomainMappingsCreate` - Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
* `AppengineAppsDomainMappingsDelete` - Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
* `AppengineAppsDomainMappingsGet` - Gets the specified domain mapping.
* `AppengineAppsDomainMappingsList` - Lists the domain mappings on an application.
* `AppengineAppsDomainMappingsPatch` - Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
* `AppengineAppsFirewallIngressRulesBatchUpdate` - Replaces the entire firewall ruleset in one bulk operation. This overrides and replaces the rules of an existing firewall with the new rules.If the final rule does not match traffic with the '*' wildcard IP range, then an "allow all" rule is explicitly added to the end of the list.
* `AppengineAppsFirewallIngressRulesCreate` - Creates a firewall rule for the application.
* `AppengineAppsFirewallIngressRulesDelete` - Deletes the specified firewall rule.
* `AppengineAppsFirewallIngressRulesGet` - Gets the specified firewall rule.
* `AppengineAppsFirewallIngressRulesList` - Lists the firewall rules of an application.
* `AppengineAppsFirewallIngressRulesPatch` - Updates the specified firewall rule.
* `AppengineAppsGet` - Gets information about an application.
* `AppengineAppsLocationsGet` - Gets information about a location.
* `AppengineAppsLocationsList` - Lists information about the supported locations for this service.
* `AppengineAppsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `AppengineAppsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/*/operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `AppengineAppsPatch` - Updates the specified Application resource. You can update the following fields: auth_domain - Google authentication domain for controlling user access to the application. default_cookie_expiration - Cookie expiration policy for the application. iap - Identity-Aware Proxy properties for the application.
* `AppengineAppsRepair` - Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.
* `AppengineAppsServicesDelete` - Deletes the specified service and all enclosed versions.
* `AppengineAppsServicesGet` - Gets the current configuration of the specified service.
* `AppengineAppsServicesList` - Lists all the services in the application.
* `AppengineAppsServicesPatch` - Updates the configuration of the specified service.
* `AppengineAppsServicesVersionsCreate` - Deploys code and resource files to a new version.
* `AppengineAppsServicesVersionsDelete` - Deletes an existing Version resource.
* `AppengineAppsServicesVersionsGet` - Gets the specified Version resource. By default, only a BASIC_VIEW will be returned. Specify the FULL_VIEW parameter to get the full resource.
* `AppengineAppsServicesVersionsInstancesDebug` - Enables debugging on a VM instance. This allows you to use the SSH command to connect to the virtual machine where the instance lives. While in "debug mode", the instance continues to serve live traffic. You should delete the instance when you are done debugging and then allow the system to take over and determine if another instance should be started.Only applicable for instances in App Engine flexible environment.
* `AppengineAppsServicesVersionsInstancesDelete` - Stops a running instance.The instance might be automatically recreated based on the scaling settings of the version. For more information, see "How Instances are Managed" (standard environment (https://cloud.google.com/appengine/docs/standard/python/how-instances-are-managed) | flexible environment (https://cloud.google.com/appengine/docs/flexible/python/how-instances-are-managed)).To ensure that instances are not re-created and avoid getting billed, you can stop all instances within the target version by changing the serving status of the version to STOPPED with the apps.services.versions.patch (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions/patch) method.
* `AppengineAppsServicesVersionsInstancesGet` - Gets instance information.
* `AppengineAppsServicesVersionsInstancesList` - Lists the instances of a version.Tip: To aggregate details about instances over time, see the Stackdriver Monitoring API (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list).
* `AppengineAppsServicesVersionsList` - Lists the versions of a service.
* `AppengineAppsServicesVersionsPatch` - Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses:Standard environment instance_class (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.instance_class)automatic scaling in the standard environment: automatic_scaling.min_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automaticScaling.standard_scheduler_settings.max_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.min_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_cpu_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_throughput_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings)basic scaling or manual scaling in the standard environment: serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.serving_status) manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#manualscaling)Flexible environment serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.serving_status)automatic scaling in the flexible environment: automatic_scaling.min_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cool_down_period_sec (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cpu_utilization.target_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling)manual scaling in the flexible environment: manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#manualscaling)

### projects

* `AppengineProjectsLocationsApplicationsCreate` - Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).
* `AppengineProjectsLocationsApplicationsGet` - Gets information about an application.
* `AppengineProjectsLocationsApplicationsRepair` - Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.
* `AppengineProjectsLocationsGet` - Gets information about a location.
* `AppengineProjectsLocationsList` - Lists information about the supported locations for this service.
* `AppengineProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `AppengineProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/*/operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
