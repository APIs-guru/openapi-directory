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
    
    req := operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest{
        Security: operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigPathParams{
            Location: "omnis",
            Project: "molestiae",
        },
        QueryParams: operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigQueryParams{
            DollarXgafv: "1",
            AccessToken: "rerum",
            Alt: "proto",
            Callback: "minima",
            Fields: "dignissimos",
            Key: "quas",
            OauthToken: "ut",
            PrettyPrint: true,
            QuotaUser: "omnis",
            UploadType: "laboriosam",
            UploadProtocol: "quaerat",
        },
        Request: &shared.SubmitProvisioningConfigRequest{
            Email: "at",
            ProvisioningConfig: &shared.ProvisioningConfig{
                Instances: []shared.InstanceConfig{
                    shared.InstanceConfig{
                        ClientNetwork: &shared.NetworkAddress{
                            Address: "voluptas",
                            ExistingNetworkID: "doloremque",
                            NetworkID: "sint",
                        },
                        Hyperthreading: true,
                        ID: "incidunt",
                        InstanceType: "ad",
                        Location: "explicabo",
                        OsImage: "sunt",
                        PrivateNetwork: &shared.NetworkAddress{
                            Address: "qui",
                            ExistingNetworkID: "at",
                            NetworkID: "expedita",
                        },
                        UserNote: "rerum",
                    },
                    shared.InstanceConfig{
                        ClientNetwork: &shared.NetworkAddress{
                            Address: "iste",
                            ExistingNetworkID: "modi",
                            NetworkID: "error",
                        },
                        Hyperthreading: true,
                        ID: "ut",
                        InstanceType: "temporibus",
                        Location: "sint",
                        OsImage: "harum",
                        PrivateNetwork: &shared.NetworkAddress{
                            Address: "minima",
                            ExistingNetworkID: "quia",
                            NetworkID: "quisquam",
                        },
                        UserNote: "minus",
                    },
                    shared.InstanceConfig{
                        ClientNetwork: &shared.NetworkAddress{
                            Address: "provident",
                            ExistingNetworkID: "aut",
                            NetworkID: "illo",
                        },
                        Hyperthreading: false,
                        ID: "aspernatur",
                        InstanceType: "illo",
                        Location: "ut",
                        OsImage: "et",
                        PrivateNetwork: &shared.NetworkAddress{
                            Address: "non",
                            ExistingNetworkID: "aliquam",
                            NetworkID: "ipsa",
                        },
                        UserNote: "expedita",
                    },
                },
                Networks: []shared.NetworkConfig{
                    shared.NetworkConfig{
                        Bandwidth: "BW_5_GBPS",
                        Cidr: "temporibus",
                        ID: "quidem",
                        Location: "rerum",
                        ServiceCidr: "HIGH_28",
                        Type: "CLIENT",
                        UserNote: "voluptatem",
                        VlanAttachments: []shared.VlanAttachment{
                            shared.VlanAttachment{
                                ID: "asperiores",
                                PairingKey: "sit",
                            },
                            shared.VlanAttachment{
                                ID: "dolorum",
                                PairingKey: "animi",
                            },
                            shared.VlanAttachment{
                                ID: "aperiam",
                                PairingKey: "omnis",
                            },
                        },
                    },
                    shared.NetworkConfig{
                        Bandwidth: "BW_2_GBPS",
                        Cidr: "consectetur",
                        ID: "repudiandae",
                        Location: "quasi",
                        ServiceCidr: "SERVICE_CIDR_UNSPECIFIED",
                        Type: "PRIVATE",
                        UserNote: "necessitatibus",
                        VlanAttachments: []shared.VlanAttachment{
                            shared.VlanAttachment{
                                ID: "sit",
                                PairingKey: "expedita",
                            },
                            shared.VlanAttachment{
                                ID: "sunt",
                                PairingKey: "ut",
                            },
                        },
                    },
                    shared.NetworkConfig{
                        Bandwidth: "BW_1_GBPS",
                        Cidr: "sapiente",
                        ID: "culpa",
                        Location: "sed",
                        ServiceCidr: "HIGH_28",
                        Type: "PRIVATE",
                        UserNote: "rerum",
                        VlanAttachments: []shared.VlanAttachment{
                            shared.VlanAttachment{
                                ID: "quis",
                                PairingKey: "aliquam",
                            },
                            shared.VlanAttachment{
                                ID: "quam",
                                PairingKey: "officiis",
                            },
                            shared.VlanAttachment{
                                ID: "sequi",
                                PairingKey: "magni",
                            },
                        },
                    },
                },
                TicketID: "et",
                Volumes: []shared.VolumeConfig{
                    shared.VolumeConfig{
                        ID: "ducimus",
                        Location: "distinctio",
                        LunRanges: []shared.LunRange{
                            shared.LunRange{
                                Quantity: 740268334717324780,
                                SizeGb: 7481213423248665986,
                            },
                        },
                        MachineIds: []string{
                            "et",
                            "rerum",
                            "accusamus",
                        },
                        NfsExports: []shared.NfsExport{
                            shared.NfsExport{
                                AllowDev: true,
                                AllowSuid: false,
                                Cidr: "ut",
                                MachineID: "placeat",
                                NetworkID: "consectetur",
                                NoRootSquash: true,
                                Permissions: "PERMISSIONS_UNSPECIFIED",
                            },
                        },
                        Protocol: "PROTOCOL_NFS",
                        SizeGb: 2389271512943804651,
                        SnapshotsEnabled: true,
                        Type: "FLASH",
                        UserNote: "exercitationem",
                    },
                },
            },
        },
    }
    
    res, err := s.Projects.BaremetalsolutionProjectsLocationsSubmitProvisioningConfig(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ProvisioningConfig != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `BaremetalsolutionProjectsLocationsSubmitProvisioningConfig` - Submit a provisiong configuration for a given project.
* `BaremetalsolutionProjectsProvisioningQuotasList` - List the budget details to provision resources on a given project.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
