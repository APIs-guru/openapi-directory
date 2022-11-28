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
        parent="et",
    ),
    query_params=operations.ApigatewayProjectsLocationsApisConfigsCreateQueryParams(
        dollar_xgafv="2",
        access_token="odit",
        alt="media",
        api_config_id="repellat",
        callback="voluptatum",
        fields="consequatur",
        key="provident",
        oauth_token="laboriosam",
        pretty_print=True,
        quota_user="dignissimos",
        upload_type="quos",
        upload_protocol="reiciendis",
    ),
    request=shared.ApigatewayAPIConfigInput(
        display_name="omnis",
        gateway_service_account="quis",
        grpc_services=[
            shared.ApigatewayAPIConfigGrpcServiceDefinition(
                file_descriptor_set=shared.ApigatewayAPIConfigFile(
                    contents="velit",
                    path="in",
                ),
                source=[
                    shared.ApigatewayAPIConfigFile(
                        contents="at",
                        path="molestiae",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="odio",
                        path="ipsam",
                    ),
                ],
            ),
            shared.ApigatewayAPIConfigGrpcServiceDefinition(
                file_descriptor_set=shared.ApigatewayAPIConfigFile(
                    contents="eos",
                    path="eos",
                ),
                source=[
                    shared.ApigatewayAPIConfigFile(
                        contents="et",
                        path="maxime",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="similique",
                        path="esse",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="quo",
                        path="et",
                    ),
                ],
            ),
            shared.ApigatewayAPIConfigGrpcServiceDefinition(
                file_descriptor_set=shared.ApigatewayAPIConfigFile(
                    contents="a",
                    path="commodi",
                ),
                source=[
                    shared.ApigatewayAPIConfigFile(
                        contents="qui",
                        path="et",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="maxime",
                        path="beatae",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="doloremque",
                        path="omnis",
                    ),
                ],
            ),
        ],
        labels={
            "asperiores": "nulla",
        },
        managed_service_configs=[
            shared.ApigatewayAPIConfigFile(
                contents="velit",
                path="et",
            ),
            shared.ApigatewayAPIConfigFile(
                contents="velit",
                path="et",
            ),
        ],
        openapi_documents=[
            shared.ApigatewayAPIConfigOpenAPIDocument(
                document=shared.ApigatewayAPIConfigFile(
                    contents="voluptas",
                    path="ab",
                ),
            ),
            shared.ApigatewayAPIConfigOpenAPIDocument(
                document=shared.ApigatewayAPIConfigFile(
                    contents="sed",
                    path="qui",
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
