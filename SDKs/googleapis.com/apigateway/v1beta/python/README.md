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
    
req = operations.ApigatewayProjectsLocationsApisConfigsCreateRequest(
    security=operations.ApigatewayProjectsLocationsApisConfigsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.ApigatewayProjectsLocationsApisConfigsCreatePathParams(
        parent="illo",
    ),
    query_params=operations.ApigatewayProjectsLocationsApisConfigsCreateQueryParams(
        dollar_xgafv="1",
        access_token="omnis",
        alt="media",
        api_config_id="incidunt",
        callback="qui",
        fields="occaecati",
        key="exercitationem",
        oauth_token="et",
        pretty_print=False,
        quota_user="nam",
        upload_type="maxime",
        upload_protocol="ut",
    ),
    request=shared.ApigatewayAPIConfigInput(
        display_name="quod",
        gateway_config=shared.ApigatewayGatewayConfig(
            backend_config=shared.ApigatewayBackendConfig(
                google_service_account="velit",
            ),
        ),
        gateway_service_account="est",
        grpc_services=[
            shared.ApigatewayAPIConfigGrpcServiceDefinition(
                file_descriptor_set=shared.ApigatewayAPIConfigFile(
                    contents="omnis",
                    path="est",
                ),
                source=[
                    shared.ApigatewayAPIConfigFile(
                        contents="molestias",
                        path="voluptas",
                    ),
                ],
            ),
            shared.ApigatewayAPIConfigGrpcServiceDefinition(
                file_descriptor_set=shared.ApigatewayAPIConfigFile(
                    contents="doloribus",
                    path="aspernatur",
                ),
                source=[
                    shared.ApigatewayAPIConfigFile(
                        contents="debitis",
                        path="optio",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="impedit",
                        path="soluta",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="rerum",
                        path="quae",
                    ),
                ],
            ),
        ],
        labels={
            "dolor": "voluptates",
        },
        managed_service_configs=[
            shared.ApigatewayAPIConfigFile(
                contents="ut",
                path="nam",
            ),
            shared.ApigatewayAPIConfigFile(
                contents="quo",
                path="pariatur",
            ),
            shared.ApigatewayAPIConfigFile(
                contents="qui",
                path="ipsum",
            ),
        ],
        openapi_documents=[
            shared.ApigatewayAPIConfigOpenAPIDocument(
                document=shared.ApigatewayAPIConfigFile(
                    contents="quia",
                    path="blanditiis",
                ),
            ),
            shared.ApigatewayAPIConfigOpenAPIDocument(
                document=shared.ApigatewayAPIConfigFile(
                    contents="qui",
                    path="facere",
                ),
            ),
        ],
    ),
)
    
res = s.projects.apigateway_projects_locations_apis_configs_create(req)

if res.apigateway_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `apigateway_projects_locations_apis_configs_create` - Creates a new ApiConfig in a given project and location.
* `apigateway_projects_locations_apis_configs_list` - Lists ApiConfigs in a given project and location.
* `apigateway_projects_locations_apis_create` - Creates a new Api in a given project and location.
* `apigateway_projects_locations_apis_list` - Lists Apis in a given project and location.
* `apigateway_projects_locations_gateways_create` - Creates a new Gateway in a given project and location.
* `apigateway_projects_locations_gateways_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `apigateway_projects_locations_gateways_list` - Lists Gateways in a given project and location.
* `apigateway_projects_locations_gateways_patch` - Updates the parameters of a single Gateway.
* `apigateway_projects_locations_gateways_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `apigateway_projects_locations_gateways_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `apigateway_projects_locations_list` - Lists information about the supported locations for this service.
* `apigateway_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `apigateway_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `apigateway_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `apigateway_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
