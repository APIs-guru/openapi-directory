# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AppengineAppsAuthorizedCertificatesCreateRequest(
    security=operations.AppengineAppsAuthorizedCertificatesCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.AppengineAppsAuthorizedCertificatesCreatePathParams(
        apps_id="illum",
    ),
    query_params=operations.AppengineAppsAuthorizedCertificatesCreateQueryParams(
        dollar_xgafv="2",
        access_token="quas",
        alt="proto",
        callback="adipisci",
        fields="deleniti",
        key="corrupti",
        oauth_token="fuga",
        pretty_print=False,
        quota_user="omnis",
        upload_type="qui",
        upload_protocol="et",
    ),
    request=shared.AuthorizedCertificate(
        certificate_raw_data=shared.CertificateRawData(
            private_key="possimus",
            public_certificate="rerum",
        ),
        display_name="odio",
        domain_mappings_count=5943836182714085786,
        domain_names=[
            "ea",
        ],
        expire_time="quam",
        id="dolorum",
        managed_certificate=shared.ManagedCertificate(
            last_renewal_time="consequatur",
            status="FAILED_RETRYING_NOT_VISIBLE",
        ),
        name="natus",
        visible_domain_mappings=[
            "id",
            "ad",
            "non",
        ],
    ),
)
    
res = s.apps.appengine_apps_authorized_certificates_create(req)

if res.authorized_certificate is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### apps

* `appengine_apps_authorized_certificates_create` - Uploads the specified SSL certificate.
* `appengine_apps_authorized_certificates_delete` - Deletes the specified SSL certificate.
* `appengine_apps_authorized_certificates_get` - Gets the specified SSL certificate.
* `appengine_apps_authorized_certificates_list` - Lists all SSL certificates the user is authorized to administer.
* `appengine_apps_authorized_certificates_patch` - Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.
* `appengine_apps_authorized_domains_list` - Lists all domains the user is authorized to administer.
* `appengine_apps_create` - Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).
* `appengine_apps_domain_mappings_create` - Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
* `appengine_apps_domain_mappings_delete` - Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
* `appengine_apps_domain_mappings_get` - Gets the specified domain mapping.
* `appengine_apps_domain_mappings_list` - Lists the domain mappings on an application.
* `appengine_apps_domain_mappings_patch` - Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
* `appengine_apps_firewall_ingress_rules_batch_update` - Replaces the entire firewall ruleset in one bulk operation. This overrides and replaces the rules of an existing firewall with the new rules.If the final rule does not match traffic with the '*' wildcard IP range, then an "allow all" rule is explicitly added to the end of the list.
* `appengine_apps_firewall_ingress_rules_create` - Creates a firewall rule for the application.
* `appengine_apps_firewall_ingress_rules_delete` - Deletes the specified firewall rule.
* `appengine_apps_firewall_ingress_rules_get` - Gets the specified firewall rule.
* `appengine_apps_firewall_ingress_rules_list` - Lists the firewall rules of an application.
* `appengine_apps_firewall_ingress_rules_patch` - Updates the specified firewall rule.
* `appengine_apps_get` - Gets information about an application.
* `appengine_apps_locations_get` - Gets information about a location.
* `appengine_apps_locations_list` - Lists information about the supported locations for this service.
* `appengine_apps_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `appengine_apps_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/*/operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `appengine_apps_patch` - Updates the specified Application resource. You can update the following fields: auth_domain - Google authentication domain for controlling user access to the application. default_cookie_expiration - Cookie expiration policy for the application. iap - Identity-Aware Proxy properties for the application.
* `appengine_apps_repair` - Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.
* `appengine_apps_services_delete` - Deletes the specified service and all enclosed versions.
* `appengine_apps_services_get` - Gets the current configuration of the specified service.
* `appengine_apps_services_list` - Lists all the services in the application.
* `appengine_apps_services_patch` - Updates the configuration of the specified service.
* `appengine_apps_services_versions_create` - Deploys code and resource files to a new version.
* `appengine_apps_services_versions_delete` - Deletes an existing Version resource.
* `appengine_apps_services_versions_get` - Gets the specified Version resource. By default, only a BASIC_VIEW will be returned. Specify the FULL_VIEW parameter to get the full resource.
* `appengine_apps_services_versions_instances_debug` - Enables debugging on a VM instance. This allows you to use the SSH command to connect to the virtual machine where the instance lives. While in "debug mode", the instance continues to serve live traffic. You should delete the instance when you are done debugging and then allow the system to take over and determine if another instance should be started.Only applicable for instances in App Engine flexible environment.
* `appengine_apps_services_versions_instances_delete` - Stops a running instance.The instance might be automatically recreated based on the scaling settings of the version. For more information, see "How Instances are Managed" (standard environment (https://cloud.google.com/appengine/docs/standard/python/how-instances-are-managed) | flexible environment (https://cloud.google.com/appengine/docs/flexible/python/how-instances-are-managed)).To ensure that instances are not re-created and avoid getting billed, you can stop all instances within the target version by changing the serving status of the version to STOPPED with the apps.services.versions.patch (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions/patch) method.
* `appengine_apps_services_versions_instances_get` - Gets instance information.
* `appengine_apps_services_versions_instances_list` - Lists the instances of a version.Tip: To aggregate details about instances over time, see the Stackdriver Monitoring API (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list).
* `appengine_apps_services_versions_list` - Lists the versions of a service.
* `appengine_apps_services_versions_patch` - Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses:Standard environment instance_class (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.instance_class)automatic scaling in the standard environment: automatic_scaling.min_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automaticScaling.standard_scheduler_settings.max_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.min_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_cpu_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_throughput_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings)basic scaling or manual scaling in the standard environment: serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.serving_status) manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#manualscaling)Flexible environment serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.serving_status)automatic scaling in the flexible environment: automatic_scaling.min_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cool_down_period_sec (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cpu_utilization.target_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling)manual scaling in the flexible environment: manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#manualscaling)

### projects

* `appengine_projects_locations_applications_create` - Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).
* `appengine_projects_locations_applications_get` - Gets information about an application.
* `appengine_projects_locations_applications_repair` - Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.
* `appengine_projects_locations_get` - Gets information about a location.
* `appengine_projects_locations_list` - Lists information about the supported locations for this service.
* `appengine_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `appengine_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/*/operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
