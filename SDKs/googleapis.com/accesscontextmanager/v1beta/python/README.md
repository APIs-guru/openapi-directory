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
        parent="ea",
    ),
    query_params=operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams(
        dollar_xgafv="2",
        access_token="atque",
        alt="json",
        callback="praesentium",
        fields="consequatur",
        key="cupiditate",
        oauth_token="deserunt",
        pretty_print=True,
        quota_user="rem",
        upload_type="vel",
        upload_protocol="temporibus",
    ),
    request=shared.AccessLevel(
        basic=shared.BasicLevel(
            combining_function="AND",
            conditions=[
                shared.Condition(
                    device_policy=shared.DevicePolicy(
                        allowed_device_management_levels=[
                            "BASIC",
                        ],
                        allowed_encryption_statuses=[
                            "UNENCRYPTED",
                            "ENCRYPTION_UNSUPPORTED",
                            "ENCRYPTION_UNSUPPORTED",
                        ],
                        os_constraints=[
                            shared.OsConstraint(
                                minimum_version="nisi",
                                os_type="DESKTOP_MAC",
                                require_verified_chrome_os=True,
                            ),
                            shared.OsConstraint(
                                minimum_version="deleniti",
                                os_type="DESKTOP_LINUX",
                                require_verified_chrome_os=False,
                            ),
                        ],
                        require_admin_approval=False,
                        require_corp_owned=False,
                        require_screenlock=False,
                    ),
                    ip_subnetworks=[
                        "itaque",
                        "nihil",
                        "cum",
                    ],
                    members=[
                        "excepturi",
                    ],
                    negate=False,
                    regions=[
                        "et",
                        "accusamus",
                        "tempore",
                    ],
                    required_access_levels=[
                        "et",
                        "omnis",
                    ],
                ),
                shared.Condition(
                    device_policy=shared.DevicePolicy(
                        allowed_device_management_levels=[
                            "BASIC",
                            "COMPLETE",
                            "BASIC",
                        ],
                        allowed_encryption_statuses=[
                            "ENCRYPTION_UNSUPPORTED",
                        ],
                        os_constraints=[
                            shared.OsConstraint(
                                minimum_version="architecto",
                                os_type="DESKTOP_LINUX",
                                require_verified_chrome_os=False,
                            ),
                        ],
                        require_admin_approval=True,
                        require_corp_owned=False,
                        require_screenlock=False,
                    ),
                    ip_subnetworks=[
                        "architecto",
                    ],
                    members=[
                        "autem",
                    ],
                    negate=True,
                    regions=[
                        "aut",
                        "dignissimos",
                    ],
                    required_access_levels=[
                        "quo",
                    ],
                ),
                shared.Condition(
                    device_policy=shared.DevicePolicy(
                        allowed_device_management_levels=[
                            "MANAGEMENT_UNSPECIFIED",
                        ],
                        allowed_encryption_statuses=[
                            "UNENCRYPTED",
                        ],
                        os_constraints=[
                            shared.OsConstraint(
                                minimum_version="voluptas",
                                os_type="IOS",
                                require_verified_chrome_os=False,
                            ),
                            shared.OsConstraint(
                                minimum_version="praesentium",
                                os_type="DESKTOP_MAC",
                                require_verified_chrome_os=False,
                            ),
                            shared.OsConstraint(
                                minimum_version="et",
                                os_type="DESKTOP_MAC",
                                require_verified_chrome_os=True,
                            ),
                        ],
                        require_admin_approval=True,
                        require_corp_owned=True,
                        require_screenlock=False,
                    ),
                    ip_subnetworks=[
                        "aut",
                        "sunt",
                        "harum",
                    ],
                    members=[
                        "nihil",
                    ],
                    negate=True,
                    regions=[
                        "sunt",
                        "sapiente",
                    ],
                    required_access_levels=[
                        "saepe",
                        "ad",
                        "cum",
                    ],
                ),
            ],
        ),
        custom=shared.CustomLevel(
            expr=shared.Expr(
                description="corrupti",
                expression="et",
                location="omnis",
                title="tenetur",
            ),
        ),
        description="qui",
        name="nisi",
        title="consequatur",
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

* `accesscontextmanager_access_policies_access_levels_create` - Create an Access Level. The longrunning operation from this RPC will have a successful status once the Access Level has propagated to long-lasting storage. Access Levels containing errors will result in an error response for the first error encountered.
* `accesscontextmanager_access_policies_access_levels_list` - List all Access Levels for an access policy.
* `accesscontextmanager_access_policies_create` - Create an `AccessPolicy`. Fails if this organization already has a `AccessPolicy`. The longrunning Operation will have a successful status once the `AccessPolicy` has propagated to long-lasting storage. Syntactic and basic semantic errors will be returned in `metadata` as a BadRequest proto.
* `accesscontextmanager_access_policies_list` - List all AccessPolicies under a container.
* `accesscontextmanager_access_policies_service_perimeters_create` - Create a Service Perimeter. The longrunning operation from this RPC will have a successful status once the Service Perimeter has propagated to long-lasting storage. Service Perimeters containing errors will result in an error response for the first error encountered.
* `accesscontextmanager_access_policies_service_perimeters_delete` - Delete a Service Perimeter by resource name. The longrunning operation from this RPC will have a successful status once the Service Perimeter has been removed from long-lasting storage.
* `accesscontextmanager_access_policies_service_perimeters_list` - List all Service Perimeters for an access policy.
* `accesscontextmanager_access_policies_service_perimeters_patch` - Update a Service Perimeter. The longrunning operation from this RPC will have a successful status once the changes to the Service Perimeter have propagated to long-lasting storage. Service Perimeter containing errors will result in an error response for the first error encountered.

### operations

* `accesscontextmanager_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
