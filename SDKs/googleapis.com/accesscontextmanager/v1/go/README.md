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
    
    req := operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest{
        Security: operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreatePathParams{
            Parent: "qui",
        },
        QueryParams: operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "aut",
            Alt: "proto",
            Callback: "ab",
            Fields: "voluptate",
            Key: "voluptates",
            OauthToken: "rerum",
            PrettyPrint: true,
            QuotaUser: "ducimus",
            UploadType: "saepe",
            UploadProtocol: "quis",
        },
        Request: &shared.AccessLevel{
            Basic: &shared.BasicLevel{
                CombiningFunction: "AND",
                Conditions: []shared.Condition{
                    shared.Condition{
                        DevicePolicy: &shared.DevicePolicy{
                            AllowedDeviceManagementLevels: []shared.DevicePolicyAllowedDeviceManagementLevelsEnum{
                                "NONE",
                                "BASIC",
                                "MANAGEMENT_UNSPECIFIED",
                            },
                            AllowedEncryptionStatuses: []shared.DevicePolicyAllowedEncryptionStatusesEnum{
                                "ENCRYPTION_UNSPECIFIED",
                                "ENCRYPTION_UNSPECIFIED",
                            },
                            OsConstraints: []shared.OsConstraint{
                                shared.OsConstraint{
                                    MinimumVersion: "voluptas",
                                    OsType: "DESKTOP_CHROME_OS",
                                    RequireVerifiedChromeOs: true,
                                },
                                shared.OsConstraint{
                                    MinimumVersion: "sequi",
                                    OsType: "DESKTOP_LINUX",
                                    RequireVerifiedChromeOs: false,
                                },
                            },
                            RequireAdminApproval: false,
                            RequireCorpOwned: false,
                            RequireScreenlock: true,
                        },
                        IPSubnetworks: []string{
                            "saepe",
                        },
                        Members: []string{
                            "ut",
                            "labore",
                            "voluptatem",
                        },
                        Negate: true,
                        Regions: []string{
                            "qui",
                            "quidem",
                        },
                        RequiredAccessLevels: []string{
                            "recusandae",
                            "molestiae",
                            "alias",
                        },
                    },
                    shared.Condition{
                        DevicePolicy: &shared.DevicePolicy{
                            AllowedDeviceManagementLevels: []shared.DevicePolicyAllowedDeviceManagementLevelsEnum{
                                "MANAGEMENT_UNSPECIFIED",
                            },
                            AllowedEncryptionStatuses: []shared.DevicePolicyAllowedEncryptionStatusesEnum{
                                "ENCRYPTED",
                                "ENCRYPTION_UNSPECIFIED",
                                "UNENCRYPTED",
                            },
                            OsConstraints: []shared.OsConstraint{
                                shared.OsConstraint{
                                    MinimumVersion: "accusamus",
                                    OsType: "DESKTOP_MAC",
                                    RequireVerifiedChromeOs: true,
                                },
                                shared.OsConstraint{
                                    MinimumVersion: "perspiciatis",
                                    OsType: "DESKTOP_LINUX",
                                    RequireVerifiedChromeOs: true,
                                },
                            },
                            RequireAdminApproval: false,
                            RequireCorpOwned: false,
                            RequireScreenlock: true,
                        },
                        IPSubnetworks: []string{
                            "et",
                        },
                        Members: []string{
                            "aliquam",
                            "numquam",
                        },
                        Negate: true,
                        Regions: []string{
                            "voluptas",
                            "nulla",
                        },
                        RequiredAccessLevels: []string{
                            "repudiandae",
                        },
                    },
                    shared.Condition{
                        DevicePolicy: &shared.DevicePolicy{
                            AllowedDeviceManagementLevels: []shared.DevicePolicyAllowedDeviceManagementLevelsEnum{
                                "COMPLETE",
                            },
                            AllowedEncryptionStatuses: []shared.DevicePolicyAllowedEncryptionStatusesEnum{
                                "ENCRYPTION_UNSUPPORTED",
                                "ENCRYPTION_UNSPECIFIED",
                            },
                            OsConstraints: []shared.OsConstraint{
                                shared.OsConstraint{
                                    MinimumVersion: "iste",
                                    OsType: "DESKTOP_MAC",
                                    RequireVerifiedChromeOs: false,
                                },
                                shared.OsConstraint{
                                    MinimumVersion: "consequuntur",
                                    OsType: "ANDROID",
                                    RequireVerifiedChromeOs: true,
                                },
                            },
                            RequireAdminApproval: false,
                            RequireCorpOwned: false,
                            RequireScreenlock: true,
                        },
                        IPSubnetworks: []string{
                            "quisquam",
                            "ea",
                            "ullam",
                        },
                        Members: []string{
                            "nobis",
                            "excepturi",
                        },
                        Negate: true,
                        Regions: []string{
                            "necessitatibus",
                            "est",
                        },
                        RequiredAccessLevels: []string{
                            "similique",
                            "omnis",
                        },
                    },
                },
            },
            Custom: &shared.CustomLevel{
                Expr: &shared.Expr{
                    Description: "provident",
                    Expression: "voluptatem",
                    Location: "eaque",
                    Title: "eligendi",
                },
            },
            Description: "non",
            Name: "ab",
            Title: "sint",
        },
    }
    
    res, err := s.AccessPolicies.AccesscontextmanagerAccessPoliciesAccessLevelsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accessPolicies

* `AccesscontextmanagerAccessPoliciesAccessLevelsCreate` - Creates an access level. The long-running operation from this RPC has a successful status after the access level propagates to long-lasting storage. If access levels contain errors, an error response is returned for the first error encountered.
* `AccesscontextmanagerAccessPoliciesAccessLevelsList` - Lists all access levels for an access policy.
* `AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAll` - Replaces all existing access levels in an access policy with the access levels provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. If the replacement contains errors, an error response is returned for the first error encountered. Upon error, the replacement is cancelled, and existing access levels are not affected. The Operation.response field contains ReplaceAccessLevelsResponse. Removing access levels contained in existing service perimeters result in an error.
* `AccesscontextmanagerAccessPoliciesCreate` - Creates an access policy. This method fails if the organization already has an access policy. The long-running operation has a successful status after the access policy propagates to long-lasting storage. Syntactic and basic semantic errors are returned in `metadata` as a BadRequest proto.
* `AccesscontextmanagerAccessPoliciesGetIamPolicy` - Gets the IAM policy for the specified Access Context Manager access policy.
* `AccesscontextmanagerAccessPoliciesList` - Lists all access policies in an organization.
* `AccesscontextmanagerAccessPoliciesServicePerimetersCommit` - Commits the dry-run specification for all the service perimeters in an access policy. A commit operation on a service perimeter involves copying its `spec` field to the `status` field of the service perimeter. Only service perimeters with `use_explicit_dry_run_spec` field set to true are affected by a commit operation. The long-running operation from this RPC has a successful status after the dry-run specifications for all the service perimeters have been committed. If a commit fails, it causes the long-running operation to return an error response and the entire commit operation is cancelled. When successful, the Operation.response field contains CommitServicePerimetersResponse. The `dry_run` and the `spec` fields are cleared after a successful commit operation.
* `AccesscontextmanagerAccessPoliciesServicePerimetersCreate` - Creates a service perimeter. The long-running operation from this RPC has a successful status after the service perimeter propagates to long-lasting storage. If a service perimeter contains errors, an error response is returned for the first error encountered.
* `AccesscontextmanagerAccessPoliciesServicePerimetersList` - Lists all service perimeters for an access policy.
* `AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAll` - Replace all existing service perimeters in an access policy with the service perimeters provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. Replacements containing errors result in an error response for the first error encountered. Upon an error, replacement are cancelled and existing service perimeters are not affected. The Operation.response field contains ReplaceServicePerimetersResponse.
* `AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissions` - Returns the IAM permissions that the caller has on the specified Access Context Manager resource. The resource can be an AccessPolicy, AccessLevel, or ServicePerimeter. This method does not support other resources.
* `AccesscontextmanagerAccessPoliciesSetIamPolicy` - Sets the IAM policy for the specified Access Context Manager access policy. This method replaces the existing IAM policy on the access policy. The IAM policy controls the set of users who can perform specific operations on the Access Context Manager access policy.

### operations

* `AccesscontextmanagerOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### organizations

* `AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreate` - Creates a GcpUserAccessBinding. If the client specifies a name, the server ignores it. Fails if a resource already exists with the same group_key. Completion of this long-running operation does not necessarily signify that the new binding is deployed onto all affected users, which may take more time.
* `AccesscontextmanagerOrganizationsGcpUserAccessBindingsDelete` - Deletes a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the binding deletion is deployed onto all affected users, which may take more time.
* `AccesscontextmanagerOrganizationsGcpUserAccessBindingsGet` - Gets the GcpUserAccessBinding with the given name.
* `AccesscontextmanagerOrganizationsGcpUserAccessBindingsList` - Lists all GcpUserAccessBindings for a Google Cloud organization.
* `AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatch` - Updates a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the changed binding is deployed onto all affected users, which may take more time.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
