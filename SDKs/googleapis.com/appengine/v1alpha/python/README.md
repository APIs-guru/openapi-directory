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
        apps_id="dolorem",
    ),
    query_params=operations.AppengineAppsAuthorizedCertificatesCreateQueryParams(
        dollar_xgafv="2",
        access_token="molestiae",
        alt="media",
        callback="voluptatum",
        fields="quos",
        key="laboriosam",
        oauth_token="incidunt",
        pretty_print=True,
        quota_user="explicabo",
        upload_type="fuga",
        upload_protocol="dignissimos",
    ),
    request=shared.AuthorizedCertificate(
        certificate_raw_data=shared.CertificateRawData(
            private_key="perferendis",
            public_certificate="fuga",
        ),
        display_name="voluptatum",
        domain_mappings_count=2502447430483721171,
        domain_names=[
            "quibusdam",
        ],
        expire_time="explicabo",
        id="vel",
        managed_certificate=shared.ManagedCertificate(
            last_renewal_time="earum",
            status="FAILED_RETRYING_NOT_VISIBLE",
        ),
        name="voluptatem",
        visible_domain_mappings=[
            "vitae",
            "harum",
            "ab",
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
* `appengine_apps_domain_mappings_create` - Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
* `appengine_apps_domain_mappings_delete` - Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
* `appengine_apps_domain_mappings_get` - Gets the specified domain mapping.
* `appengine_apps_domain_mappings_list` - Lists the domain mappings on an application.
* `appengine_apps_domain_mappings_patch` - Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
* `appengine_apps_locations_get` - Gets information about a location.
* `appengine_apps_locations_list` - Lists information about the supported locations for this service.
* `appengine_apps_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `appengine_apps_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/*/operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

### projects

* `appengine_projects_locations_get` - Gets information about a location.
* `appengine_projects_locations_list` - Lists information about the supported locations for this service.
* `appengine_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `appengine_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/*/operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
