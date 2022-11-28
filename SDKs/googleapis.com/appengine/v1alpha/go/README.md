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
            AppsID: "dolorem",
        },
        QueryParams: operations.AppengineAppsAuthorizedCertificatesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "molestiae",
            Alt: "media",
            Callback: "voluptatum",
            Fields: "quos",
            Key: "laboriosam",
            OauthToken: "incidunt",
            PrettyPrint: true,
            QuotaUser: "explicabo",
            UploadType: "fuga",
            UploadProtocol: "dignissimos",
        },
        Request: &shared.AuthorizedCertificate{
            CertificateRawData: &shared.CertificateRawData{
                PrivateKey: "perferendis",
                PublicCertificate: "fuga",
            },
            DisplayName: "voluptatum",
            DomainMappingsCount: 2502447430483721171,
            DomainNames: []string{
                "quibusdam",
            },
            ExpireTime: "explicabo",
            ID: "vel",
            ManagedCertificate: &shared.ManagedCertificate{
                LastRenewalTime: "earum",
                Status: "FAILED_RETRYING_NOT_VISIBLE",
            },
            Name: "voluptatem",
            VisibleDomainMappings: []string{
                "vitae",
                "harum",
                "ab",
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
* `AppengineAppsDomainMappingsCreate` - Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
* `AppengineAppsDomainMappingsDelete` - Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
* `AppengineAppsDomainMappingsGet` - Gets the specified domain mapping.
* `AppengineAppsDomainMappingsList` - Lists the domain mappings on an application.
* `AppengineAppsDomainMappingsPatch` - Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
* `AppengineAppsLocationsGet` - Gets information about a location.
* `AppengineAppsLocationsList` - Lists information about the supported locations for this service.
* `AppengineAppsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `AppengineAppsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/*/operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

### projects

* `AppengineProjectsLocationsGet` - Gets information about a location.
* `AppengineProjectsLocationsList` - Lists information about the supported locations for this service.
* `AppengineProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `AppengineProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/*/operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
