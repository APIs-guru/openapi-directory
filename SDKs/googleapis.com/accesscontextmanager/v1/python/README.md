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
    
req = operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest(
    security=operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreatePathParams(
        parent="qui",
    ),
    query_params=operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams(
        dollar_xgafv="2",
        access_token="aut",
        alt="proto",
        callback="ab",
        fields="voluptate",
        key="voluptates",
        oauth_token="rerum",
        pretty_print=True,
        quota_user="ducimus",
        upload_type="saepe",
        upload_protocol="quis",
    ),
    request=shared.AccessLevel(
        basic=shared.BasicLevel(
            combining_function="AND",
            conditions=[
                shared.Condition(
                    device_policy=shared.DevicePolicy(
                        allowed_device_management_levels=[
                            "NONE",
                            "BASIC",
                            "MANAGEMENT_UNSPECIFIED",
                        ],
                        allowed_encryption_statuses=[
                            "ENCRYPTION_UNSPECIFIED",
                            "ENCRYPTION_UNSPECIFIED",
                        ],
                        os_constraints=[
                            shared.OsConstraint(
                                minimum_version="voluptas",
                                os_type="DESKTOP_CHROME_OS",
                                require_verified_chrome_os=True,
                            ),
                            shared.OsConstraint(
                                minimum_version="sequi",
                                os_type="DESKTOP_LINUX",
                                require_verified_chrome_os=False,
                            ),
                        ],
                        require_admin_approval=False,
                        require_corp_owned=False,
                        require_screenlock=True,
                    ),
                    ip_subnetworks=[
                        "saepe",
                    ],
                    members=[
                        "ut",
                        "labore",
                        "voluptatem",
                    ],
                    negate=True,
                    regions=[
                        "qui",
                        "quidem",
                    ],
                    required_access_levels=[
                        "recusandae",
                        "molestiae",
                        "alias",
                    ],
                ),
                shared.Condition(
                    device_policy=shared.DevicePolicy(
                        allowed_device_management_levels=[
                            "MANAGEMENT_UNSPECIFIED",
                        ],
                        allowed_encryption_statuses=[
                            "ENCRYPTED",
                            "ENCRYPTION_UNSPECIFIED",
                            "UNENCRYPTED",
                        ],
                        os_constraints=[
                            shared.OsConstraint(
                                minimum_version="accusamus",
                                os_type="DESKTOP_MAC",
                                require_verified_chrome_os=True,
                            ),
                            shared.OsConstraint(
                                minimum_version="perspiciatis",
                                os_type="DESKTOP_LINUX",
                                require_verified_chrome_os=True,
                            ),
                        ],
                        require_admin_approval=False,
                        require_corp_owned=False,
                        require_screenlock=True,
                    ),
                    ip_subnetworks=[
                        "et",
                    ],
                    members=[
                        "aliquam",
                        "numquam",
                    ],
                    negate=True,
                    regions=[
                        "voluptas",
                        "nulla",
                    ],
                    required_access_levels=[
                        "repudiandae",
                    ],
                ),
                shared.Condition(
                    device_policy=shared.DevicePolicy(
                        allowed_device_management_levels=[
                            "COMPLETE",
                        ],
                        allowed_encryption_statuses=[
                            "ENCRYPTION_UNSUPPORTED",
                            "ENCRYPTION_UNSPECIFIED",
                        ],
                        os_constraints=[
                            shared.OsConstraint(
                                minimum_version="iste",
                                os_type="DESKTOP_MAC",
                                require_verified_chrome_os=False,
                            ),
                            shared.OsConstraint(
                                minimum_version="consequuntur",
                                os_type="ANDROID",
                                require_verified_chrome_os=True,
                            ),
                        ],
                        require_admin_approval=False,
                        require_corp_owned=False,
                        require_screenlock=True,
                    ),
                    ip_subnetworks=[
                        "quisquam",
                        "ea",
                        "ullam",
                    ],
                    members=[
                        "nobis",
                        "excepturi",
                    ],
                    negate=True,
                    regions=[
                        "necessitatibus",
                        "est",
                    ],
                    required_access_levels=[
                        "similique",
                        "omnis",
                    ],
                ),
            ],
        ),
        custom=shared.CustomLevel(
            expr=shared.Expr(
                description="provident",
                expression="voluptatem",
                location="eaque",
                title="eligendi",
            ),
        ),
        description="non",
        name="ab",
        title="sint",
    ),
)
    
res = s.access_policies.accesscontextmanager_access_policies_access_levels_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accessPolicies

* `accesscontextmanager_access_policies_access_levels_create` - Creates an access level. The long-running operation from this RPC has a successful status after the access level propagates to long-lasting storage. If access levels contain errors, an error response is returned for the first error encountered.
* `accesscontextmanager_access_policies_access_levels_list` - Lists all access levels for an access policy.
* `accesscontextmanager_access_policies_access_levels_replace_all` - Replaces all existing access levels in an access policy with the access levels provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. If the replacement contains errors, an error response is returned for the first error encountered. Upon error, the replacement is cancelled, and existing access levels are not affected. The Operation.response field contains ReplaceAccessLevelsResponse. Removing access levels contained in existing service perimeters result in an error.
* `accesscontextmanager_access_policies_create` - Creates an access policy. This method fails if the organization already has an access policy. The long-running operation has a successful status after the access policy propagates to long-lasting storage. Syntactic and basic semantic errors are returned in `metadata` as a BadRequest proto.
* `accesscontextmanager_access_policies_get_iam_policy` - Gets the IAM policy for the specified Access Context Manager access policy.
* `accesscontextmanager_access_policies_list` - Lists all access policies in an organization.
* `accesscontextmanager_access_policies_service_perimeters_commit` - Commits the dry-run specification for all the service perimeters in an access policy. A commit operation on a service perimeter involves copying its `spec` field to the `status` field of the service perimeter. Only service perimeters with `use_explicit_dry_run_spec` field set to true are affected by a commit operation. The long-running operation from this RPC has a successful status after the dry-run specifications for all the service perimeters have been committed. If a commit fails, it causes the long-running operation to return an error response and the entire commit operation is cancelled. When successful, the Operation.response field contains CommitServicePerimetersResponse. The `dry_run` and the `spec` fields are cleared after a successful commit operation.
* `accesscontextmanager_access_policies_service_perimeters_create` - Creates a service perimeter. The long-running operation from this RPC has a successful status after the service perimeter propagates to long-lasting storage. If a service perimeter contains errors, an error response is returned for the first error encountered.
* `accesscontextmanager_access_policies_service_perimeters_list` - Lists all service perimeters for an access policy.
* `accesscontextmanager_access_policies_service_perimeters_replace_all` - Replace all existing service perimeters in an access policy with the service perimeters provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. Replacements containing errors result in an error response for the first error encountered. Upon an error, replacement are cancelled and existing service perimeters are not affected. The Operation.response field contains ReplaceServicePerimetersResponse.
* `accesscontextmanager_access_policies_service_perimeters_test_iam_permissions` - Returns the IAM permissions that the caller has on the specified Access Context Manager resource. The resource can be an AccessPolicy, AccessLevel, or ServicePerimeter. This method does not support other resources.
* `accesscontextmanager_access_policies_set_iam_policy` - Sets the IAM policy for the specified Access Context Manager access policy. This method replaces the existing IAM policy on the access policy. The IAM policy controls the set of users who can perform specific operations on the Access Context Manager access policy.

### operations

* `accesscontextmanager_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### organizations

* `accesscontextmanager_organizations_gcp_user_access_bindings_create` - Creates a GcpUserAccessBinding. If the client specifies a name, the server ignores it. Fails if a resource already exists with the same group_key. Completion of this long-running operation does not necessarily signify that the new binding is deployed onto all affected users, which may take more time.
* `accesscontextmanager_organizations_gcp_user_access_bindings_delete` - Deletes a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the binding deletion is deployed onto all affected users, which may take more time.
* `accesscontextmanager_organizations_gcp_user_access_bindings_get` - Gets the GcpUserAccessBinding with the given name.
* `accesscontextmanager_organizations_gcp_user_access_bindings_list` - Lists all GcpUserAccessBindings for a Google Cloud organization.
* `accesscontextmanager_organizations_gcp_user_access_bindings_patch` - Updates a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the changed binding is deployed onto all affected users, which may take more time.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
