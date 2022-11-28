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
import { BeyondcorpProjectsLocationsAppConnectionsCreateRequest, BeyondcorpProjectsLocationsAppConnectionsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: BeyondcorpProjectsLocationsAppConnectionsCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "saepe",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "dolores",
    alt: "media",
    appConnectionId: "ullam",
    callback: "corrupti",
    fields: "aspernatur",
    key: "hic",
    oauthToken: "quasi",
    prettyPrint: false,
    quotaUser: "ex",
    requestId: "odit",
    uploadType: "earum",
    uploadProtocol: "ipsam",
    validateOnly: false,
  },
  request: {
    applicationEndpoint: {
      host: "nostrum",
      port: 7408413298001618580,
    },
    connectors: [
      "est",
      "quia",
    ],
    displayName: "soluta",
    gateway: {
      appGateway: "numquam",
      type: "TYPE_UNSPECIFIED",
    },
    labels: {
      "est": "exercitationem",
      "in": "sunt",
      "qui": "esse",
    },
    name: "qui",
    type: "TYPE_UNSPECIFIED",
  },
};

sdk.projects.beyondcorpProjectsLocationsAppConnectionsCreate(req).then((res: BeyondcorpProjectsLocationsAppConnectionsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `beyondcorpProjectsLocationsAppConnectionsCreate` - Creates a new AppConnection in a given project and location.
* `beyondcorpProjectsLocationsAppConnectionsList` - Lists AppConnections in a given project and location.
* `beyondcorpProjectsLocationsAppConnectionsResolve` - Resolves AppConnections details for a given AppConnector. An internal method called by a connector to find AppConnections to connect to.
* `beyondcorpProjectsLocationsAppConnectorsCreate` - Creates a new AppConnector in a given project and location.
* `beyondcorpProjectsLocationsAppConnectorsList` - Lists AppConnectors in a given project and location.
* `beyondcorpProjectsLocationsAppConnectorsReportStatus` - Report status for a given connector.
* `beyondcorpProjectsLocationsAppConnectorsResolveInstanceConfig` - Gets instance configuration for a given AppConnector. An internal method called by a AppConnector to get its container config.
* `beyondcorpProjectsLocationsAppGatewaysCreate` - Creates a new AppGateway in a given project and location.
* `beyondcorpProjectsLocationsAppGatewaysList` - Lists AppGateways in a given project and location.
* `beyondcorpProjectsLocationsClientConnectorServicesCreate` - Creates a new ClientConnectorService in a given project and location.
* `beyondcorpProjectsLocationsClientConnectorServicesList` - Lists ClientConnectorServices in a given project and location.
* `beyondcorpProjectsLocationsClientConnectorServicesPatch` - Updates the parameters of a single ClientConnectorService.
* `beyondcorpProjectsLocationsClientGatewaysCreate` - Creates a new ClientGateway in a given project and location.
* `beyondcorpProjectsLocationsClientGatewaysGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `beyondcorpProjectsLocationsClientGatewaysList` - Lists ClientGateways in a given project and location.
* `beyondcorpProjectsLocationsClientGatewaysSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `beyondcorpProjectsLocationsClientGatewaysTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `beyondcorpProjectsLocationsList` - Lists information about the supported locations for this service.
* `beyondcorpProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `beyondcorpProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `beyondcorpProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `beyondcorpProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
