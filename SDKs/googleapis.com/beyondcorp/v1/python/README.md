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
    
req = operations.BeyondcorpProjectsLocationsAppConnectionsCreateRequest(
    security=operations.BeyondcorpProjectsLocationsAppConnectionsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.BeyondcorpProjectsLocationsAppConnectionsCreatePathParams(
        parent="saepe",
    ),
    query_params=operations.BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams(
        dollar_xgafv="1",
        access_token="dolores",
        alt="media",
        app_connection_id="ullam",
        callback="corrupti",
        fields="aspernatur",
        key="hic",
        oauth_token="quasi",
        pretty_print=False,
        quota_user="ex",
        request_id="odit",
        upload_type="earum",
        upload_protocol="ipsam",
        validate_only=False,
    ),
    request=shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput(
        application_endpoint=shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint(
            host="nostrum",
            port=7408413298001618580,
        ),
        connectors=[
            "est",
            "quia",
        ],
        display_name="soluta",
        gateway=shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput(
            app_gateway="numquam",
            type="TYPE_UNSPECIFIED",
        ),
        labels={
            "est": "exercitationem",
            "in": "sunt",
            "qui": "esse",
        },
        name="qui",
        type="TYPE_UNSPECIFIED",
    ),
)
    
res = s.projects.beyondcorp_projects_locations_app_connections_create(req)

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `beyondcorp_projects_locations_app_connections_create` - Creates a new AppConnection in a given project and location.
* `beyondcorp_projects_locations_app_connections_list` - Lists AppConnections in a given project and location.
* `beyondcorp_projects_locations_app_connections_resolve` - Resolves AppConnections details for a given AppConnector. An internal method called by a connector to find AppConnections to connect to.
* `beyondcorp_projects_locations_app_connectors_create` - Creates a new AppConnector in a given project and location.
* `beyondcorp_projects_locations_app_connectors_list` - Lists AppConnectors in a given project and location.
* `beyondcorp_projects_locations_app_connectors_report_status` - Report status for a given connector.
* `beyondcorp_projects_locations_app_connectors_resolve_instance_config` - Gets instance configuration for a given AppConnector. An internal method called by a AppConnector to get its container config.
* `beyondcorp_projects_locations_app_gateways_create` - Creates a new AppGateway in a given project and location.
* `beyondcorp_projects_locations_app_gateways_list` - Lists AppGateways in a given project and location.
* `beyondcorp_projects_locations_client_connector_services_create` - Creates a new ClientConnectorService in a given project and location.
* `beyondcorp_projects_locations_client_connector_services_list` - Lists ClientConnectorServices in a given project and location.
* `beyondcorp_projects_locations_client_connector_services_patch` - Updates the parameters of a single ClientConnectorService.
* `beyondcorp_projects_locations_client_gateways_create` - Creates a new ClientGateway in a given project and location.
* `beyondcorp_projects_locations_client_gateways_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `beyondcorp_projects_locations_client_gateways_list` - Lists ClientGateways in a given project and location.
* `beyondcorp_projects_locations_client_gateways_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `beyondcorp_projects_locations_client_gateways_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `beyondcorp_projects_locations_list` - Lists information about the supported locations for this service.
* `beyondcorp_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `beyondcorp_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `beyondcorp_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `beyondcorp_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
