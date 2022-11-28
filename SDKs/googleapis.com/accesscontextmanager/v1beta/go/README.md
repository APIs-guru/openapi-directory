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
            Parent: "ea",
        },
        QueryParams: operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "atque",
            Alt: "json",
            Callback: "praesentium",
            Fields: "consequatur",
            Key: "cupiditate",
            OauthToken: "deserunt",
            PrettyPrint: true,
            QuotaUser: "rem",
            UploadType: "vel",
            UploadProtocol: "temporibus",
        },
        Request: &shared.AccessLevel{
            Basic: &shared.BasicLevel{
                CombiningFunction: "AND",
                Conditions: []shared.Condition{
                    shared.Condition{
                        DevicePolicy: &shared.DevicePolicy{
                            AllowedDeviceManagementLevels: []shared.DevicePolicyAllowedDeviceManagementLevelsEnum{
                                "BASIC",
                            },
                            AllowedEncryptionStatuses: []shared.DevicePolicyAllowedEncryptionStatusesEnum{
                                "UNENCRYPTED",
                                "ENCRYPTION_UNSUPPORTED",
                                "ENCRYPTION_UNSUPPORTED",
                            },
                            OsConstraints: []shared.OsConstraint{
                                shared.OsConstraint{
                                    MinimumVersion: "nisi",
                                    OsType: "DESKTOP_MAC",
                                    RequireVerifiedChromeOs: true,
                                },
                                shared.OsConstraint{
                                    MinimumVersion: "deleniti",
                                    OsType: "DESKTOP_LINUX",
                                    RequireVerifiedChromeOs: false,
                                },
                            },
                            RequireAdminApproval: false,
                            RequireCorpOwned: false,
                            RequireScreenlock: false,
                        },
                        IPSubnetworks: []string{
                            "itaque",
                            "nihil",
                            "cum",
                        },
                        Members: []string{
                            "excepturi",
                        },
                        Negate: false,
                        Regions: []string{
                            "et",
                            "accusamus",
                            "tempore",
                        },
                        RequiredAccessLevels: []string{
                            "et",
                            "omnis",
                        },
                    },
                    shared.Condition{
                        DevicePolicy: &shared.DevicePolicy{
                            AllowedDeviceManagementLevels: []shared.DevicePolicyAllowedDeviceManagementLevelsEnum{
                                "BASIC",
                                "COMPLETE",
                                "BASIC",
                            },
                            AllowedEncryptionStatuses: []shared.DevicePolicyAllowedEncryptionStatusesEnum{
                                "ENCRYPTION_UNSUPPORTED",
                            },
                            OsConstraints: []shared.OsConstraint{
                                shared.OsConstraint{
                                    MinimumVersion: "architecto",
                                    OsType: "DESKTOP_LINUX",
                                    RequireVerifiedChromeOs: false,
                                },
                            },
                            RequireAdminApproval: true,
                            RequireCorpOwned: false,
                            RequireScreenlock: false,
                        },
                        IPSubnetworks: []string{
                            "architecto",
                        },
                        Members: []string{
                            "autem",
                        },
                        Negate: true,
                        Regions: []string{
                            "aut",
                            "dignissimos",
                        },
                        RequiredAccessLevels: []string{
                            "quo",
                        },
                    },
                    shared.Condition{
                        DevicePolicy: &shared.DevicePolicy{
                            AllowedDeviceManagementLevels: []shared.DevicePolicyAllowedDeviceManagementLevelsEnum{
                                "MANAGEMENT_UNSPECIFIED",
                            },
                            AllowedEncryptionStatuses: []shared.DevicePolicyAllowedEncryptionStatusesEnum{
                                "UNENCRYPTED",
                            },
                            OsConstraints: []shared.OsConstraint{
                                shared.OsConstraint{
                                    MinimumVersion: "voluptas",
                                    OsType: "IOS",
                                    RequireVerifiedChromeOs: false,
                                },
                                shared.OsConstraint{
                                    MinimumVersion: "praesentium",
                                    OsType: "DESKTOP_MAC",
                                    RequireVerifiedChromeOs: false,
                                },
                                shared.OsConstraint{
                                    MinimumVersion: "et",
                                    OsType: "DESKTOP_MAC",
                                    RequireVerifiedChromeOs: true,
                                },
                            },
                            RequireAdminApproval: true,
                            RequireCorpOwned: true,
                            RequireScreenlock: false,
                        },
                        IPSubnetworks: []string{
                            "aut",
                            "sunt",
                            "harum",
                        },
                        Members: []string{
                            "nihil",
                        },
                        Negate: true,
                        Regions: []string{
                            "sunt",
                            "sapiente",
                        },
                        RequiredAccessLevels: []string{
                            "saepe",
                            "ad",
                            "cum",
                        },
                    },
                },
            },
            Custom: &shared.CustomLevel{
                Expr: &shared.Expr{
                    Description: "corrupti",
                    Expression: "et",
                    Location: "omnis",
                    Title: "tenetur",
                },
            },
            Description: "qui",
            Name: "nisi",
            Title: "consequatur",
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

* `AccesscontextmanagerAccessPoliciesAccessLevelsCreate` - Create an Access Level. The longrunning operation from this RPC will have a successful status once the Access Level has propagated to long-lasting storage. Access Levels containing errors will result in an error response for the first error encountered.
* `AccesscontextmanagerAccessPoliciesAccessLevelsList` - List all Access Levels for an access policy.
* `AccesscontextmanagerAccessPoliciesCreate` - Create an `AccessPolicy`. Fails if this organization already has a `AccessPolicy`. The longrunning Operation will have a successful status once the `AccessPolicy` has propagated to long-lasting storage. Syntactic and basic semantic errors will be returned in `metadata` as a BadRequest proto.
* `AccesscontextmanagerAccessPoliciesList` - List all AccessPolicies under a container.
* `AccesscontextmanagerAccessPoliciesServicePerimetersCreate` - Create a Service Perimeter. The longrunning operation from this RPC will have a successful status once the Service Perimeter has propagated to long-lasting storage. Service Perimeters containing errors will result in an error response for the first error encountered.
* `AccesscontextmanagerAccessPoliciesServicePerimetersDelete` - Delete a Service Perimeter by resource name. The longrunning operation from this RPC will have a successful status once the Service Perimeter has been removed from long-lasting storage.
* `AccesscontextmanagerAccessPoliciesServicePerimetersList` - List all Service Perimeters for an access policy.
* `AccesscontextmanagerAccessPoliciesServicePerimetersPatch` - Update a Service Perimeter. The longrunning operation from this RPC will have a successful status once the changes to the Service Perimeter have propagated to long-lasting storage. Service Perimeter containing errors will result in an error response for the first error encountered.

### operations

* `AccesscontextmanagerOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
