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
    
    req := operations.BeyondcorpOrganizationsLocationsSubscriptionsCreateRequest{
        Security: operations.BeyondcorpOrganizationsLocationsSubscriptionsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.BeyondcorpOrganizationsLocationsSubscriptionsCreatePathParams{
            Parent: "sequi",
        },
        QueryParams: operations.BeyondcorpOrganizationsLocationsSubscriptionsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "tempora",
            Alt: "json",
            Callback: "optio",
            Fields: "aut",
            Key: "a",
            OauthToken: "minus",
            PrettyPrint: true,
            QuotaUser: "voluptatem",
            UploadType: "ab",
            UploadProtocol: "ab",
        },
        Request: &shared.GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionInput{
            Name: "illo",
            Sku: "SKU_UNSPECIFIED",
            Type: "ALLOWLIST",
        },
    }
    
    res, err := s.Organizations.BeyondcorpOrganizationsLocationsSubscriptionsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### organizations

* `BeyondcorpOrganizationsLocationsSubscriptionsCreate` - Creates a new BeyondCorp Enterprise Subscription in a given organization. Location will always be global as BeyondCorp subscriptions are per organization.
* `BeyondcorpOrganizationsLocationsSubscriptionsList` - Lists Subscriptions in a given organization and location.

### projects

* `BeyondcorpProjectsLocationsAppConnectionsCreate` - Creates a new AppConnection in a given project and location.
* `BeyondcorpProjectsLocationsAppConnectionsList` - Lists AppConnections in a given project and location.
* `BeyondcorpProjectsLocationsAppConnectionsResolve` - Resolves AppConnections details for a given AppConnector. An internal method called by a connector to find AppConnections to connect to.
* `BeyondcorpProjectsLocationsAppConnectorsCreate` - Creates a new AppConnector in a given project and location.
* `BeyondcorpProjectsLocationsAppConnectorsList` - Lists AppConnectors in a given project and location.
* `BeyondcorpProjectsLocationsAppConnectorsReportStatus` - Report status for a given connector.
* `BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfig` - Gets instance configuration for a given AppConnector. An internal method called by a AppConnector to get its container config.
* `BeyondcorpProjectsLocationsAppGatewaysCreate` - Creates a new AppGateway in a given project and location.
* `BeyondcorpProjectsLocationsAppGatewaysList` - Lists AppGateways in a given project and location.
* `BeyondcorpProjectsLocationsClientConnectorServicesCreate` - Creates a new ClientConnectorService in a given project and location.
* `BeyondcorpProjectsLocationsClientConnectorServicesList` - Lists ClientConnectorServices in a given project and location.
* `BeyondcorpProjectsLocationsClientGatewaysCreate` - Creates a new ClientGateway in a given project and location.
* `BeyondcorpProjectsLocationsClientGatewaysList` - Lists ClientGateways in a given project and location.
* `BeyondcorpProjectsLocationsConnectionsCreate` - Creates a new Connection in a given project and location.
* `BeyondcorpProjectsLocationsConnectionsList` - Lists Connections in a given project and location.
* `BeyondcorpProjectsLocationsConnectionsResolve` - Resolves connections details for a given connector. An internal method called by a connector to find connections to connect to.
* `BeyondcorpProjectsLocationsConnectorsCreate` - Creates a new Connector in a given project and location.
* `BeyondcorpProjectsLocationsConnectorsList` - Lists Connectors in a given project and location.
* `BeyondcorpProjectsLocationsConnectorsPatch` - Updates the parameters of a single Connector.
* `BeyondcorpProjectsLocationsConnectorsReportStatus` - Report status for a given connector.
* `BeyondcorpProjectsLocationsConnectorsResolveInstanceConfig` - Gets instance configuration for a given connector. An internal method called by a connector to get its container config.
* `BeyondcorpProjectsLocationsInsightsConfiguredInsight` - Gets the value for a selected particular insight based on the provided filters. Use the organization level path for fetching at org level and project level path for fetching the insight value specific to a particular project.
* `BeyondcorpProjectsLocationsInsightsList` - Lists for all the available insights that could be fetched from the system. Allows to filter using category. Setting the `view` to `BASIC` will let you iterate over the list of insight metadatas.
* `BeyondcorpProjectsLocationsList` - Lists information about the supported locations for this service.
* `BeyondcorpProjectsLocationsNetConnectionsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `BeyondcorpProjectsLocationsNetConnectionsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `BeyondcorpProjectsLocationsNetConnectionsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `BeyondcorpProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `BeyondcorpProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `BeyondcorpProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `BeyondcorpProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
