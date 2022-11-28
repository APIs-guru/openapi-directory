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
    appsId: "dolorem",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "molestiae",
    alt: "media",
    callback: "voluptatum",
    fields: "quos",
    key: "laboriosam",
    oauthToken: "incidunt",
    prettyPrint: true,
    quotaUser: "explicabo",
    uploadType: "fuga",
    uploadProtocol: "dignissimos",
  },
  request: {
    certificateRawData: {
      privateKey: "perferendis",
      publicCertificate: "fuga",
    },
    displayName: "voluptatum",
    domainMappingsCount: 2502447430483721171,
    domainNames: [
      "quibusdam",
    ],
    expireTime: "explicabo",
    id: "vel",
    managedCertificate: {
      lastRenewalTime: "earum",
      status: "FAILED_RETRYING_NOT_VISIBLE",
    },
    name: "voluptatem",
    visibleDomainMappings: [
      "vitae",
      "harum",
      "ab",
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
* `appengineAppsDomainMappingsCreate` - Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
* `appengineAppsDomainMappingsDelete` - Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
* `appengineAppsDomainMappingsGet` - Gets the specified domain mapping.
* `appengineAppsDomainMappingsList` - Lists the domain mappings on an application.
* `appengineAppsDomainMappingsPatch` - Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
* `appengineAppsLocationsGet` - Gets information about a location.
* `appengineAppsLocationsList` - Lists information about the supported locations for this service.
* `appengineAppsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `appengineAppsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/*/operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

### projects

* `appengineProjectsLocationsGet` - Gets information about a location.
* `appengineProjectsLocationsList` - Lists information about the supported locations for this service.
* `appengineProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `appengineProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/*/operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
