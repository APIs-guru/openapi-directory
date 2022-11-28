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
import { BeyondcorpOrganizationsLocationsSubscriptionsCreateRequest, BeyondcorpOrganizationsLocationsSubscriptionsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: BeyondcorpOrganizationsLocationsSubscriptionsCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "sequi",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "tempora",
    alt: "json",
    callback: "optio",
    fields: "aut",
    key: "a",
    oauthToken: "minus",
    prettyPrint: true,
    quotaUser: "voluptatem",
    uploadType: "ab",
    uploadProtocol: "ab",
  },
  request: {
    name: "illo",
    sku: "SKU_UNSPECIFIED",
    type: "ALLOWLIST",
  },
};

sdk.organizations.beyondcorpOrganizationsLocationsSubscriptionsCreate(req).then((res: BeyondcorpOrganizationsLocationsSubscriptionsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### organizations

* `beyondcorpOrganizationsLocationsSubscriptionsCreate` - Creates a new BeyondCorp Enterprise Subscription in a given organization. Location will always be global as BeyondCorp subscriptions are per organization.
* `beyondcorpOrganizationsLocationsSubscriptionsList` - Lists Subscriptions in a given organization and location.

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
* `beyondcorpProjectsLocationsClientGatewaysCreate` - Creates a new ClientGateway in a given project and location.
* `beyondcorpProjectsLocationsClientGatewaysList` - Lists ClientGateways in a given project and location.
* `beyondcorpProjectsLocationsConnectionsCreate` - Creates a new Connection in a given project and location.
* `beyondcorpProjectsLocationsConnectionsList` - Lists Connections in a given project and location.
* `beyondcorpProjectsLocationsConnectionsResolve` - Resolves connections details for a given connector. An internal method called by a connector to find connections to connect to.
* `beyondcorpProjectsLocationsConnectorsCreate` - Creates a new Connector in a given project and location.
* `beyondcorpProjectsLocationsConnectorsList` - Lists Connectors in a given project and location.
* `beyondcorpProjectsLocationsConnectorsPatch` - Updates the parameters of a single Connector.
* `beyondcorpProjectsLocationsConnectorsReportStatus` - Report status for a given connector.
* `beyondcorpProjectsLocationsConnectorsResolveInstanceConfig` - Gets instance configuration for a given connector. An internal method called by a connector to get its container config.
* `beyondcorpProjectsLocationsInsightsConfiguredInsight` - Gets the value for a selected particular insight based on the provided filters. Use the organization level path for fetching at org level and project level path for fetching the insight value specific to a particular project.
* `beyondcorpProjectsLocationsInsightsList` - Lists for all the available insights that could be fetched from the system. Allows to filter using category. Setting the `view` to `BASIC` will let you iterate over the list of insight metadatas.
* `beyondcorpProjectsLocationsList` - Lists information about the supported locations for this service.
* `beyondcorpProjectsLocationsNetConnectionsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `beyondcorpProjectsLocationsNetConnectionsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `beyondcorpProjectsLocationsNetConnectionsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `beyondcorpProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `beyondcorpProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `beyondcorpProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `beyondcorpProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
