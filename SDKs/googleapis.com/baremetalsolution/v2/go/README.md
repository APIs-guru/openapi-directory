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
    
    req := operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest{
        Security: operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchPathParams{
            Location: "soluta",
        },
        QueryParams: operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchQueryParams{
            DollarXgafv: "1",
            AccessToken: "ducimus",
            Alt: "media",
            Callback: "amet",
            Fields: "iusto",
            Key: "atque",
            OauthToken: "et",
            PrettyPrint: false,
            QuotaUser: "eligendi",
            UploadType: "sit",
            UploadProtocol: "illum",
        },
    }
    
    res, err := s.Projects.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchInstanceProvisioningSettingsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetch` - Get instance provisioning settings for a given project. This is hidden method used by UI only.
* `BaremetalsolutionProjectsLocationsInstancesCreate` - Create an Instance.
* `BaremetalsolutionProjectsLocationsInstancesDetachLun` - Detach LUN from Instance.
* `BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsole` - Disable the interactive serial console feature on an instance.
* `BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsole` - Enable the interactive serial console feature on an instance.
* `BaremetalsolutionProjectsLocationsInstancesList` - List servers in a given project and location.
* `BaremetalsolutionProjectsLocationsInstancesReset` - Perform an ungraceful, hard reset on a server. Equivalent to shutting the power off and then turning it back on.
* `BaremetalsolutionProjectsLocationsInstancesStart` - Starts a server that was shutdown.
* `BaremetalsolutionProjectsLocationsInstancesStop` - Stop a running server.
* `BaremetalsolutionProjectsLocationsList` - Lists information about the supported locations for this service.
* `BaremetalsolutionProjectsLocationsNetworksList` - List network in a given project and location.
* `BaremetalsolutionProjectsLocationsNetworksListNetworkUsage` - List all Networks (and used IPs for each Network) in the vendor account associated with the specified project.
* `BaremetalsolutionProjectsLocationsNfsSharesCreate` - Create an NFS share.
* `BaremetalsolutionProjectsLocationsNfsSharesList` - List NFS shares.
* `BaremetalsolutionProjectsLocationsProvisioningConfigsCreate` - Create new ProvisioningConfig.
* `BaremetalsolutionProjectsLocationsProvisioningConfigsSubmit` - Submit a provisiong configuration for a given project.
* `BaremetalsolutionProjectsLocationsProvisioningQuotasList` - List the budget details to provision resources on a given project.
* `BaremetalsolutionProjectsLocationsSSHKeysCreate` - Register a public SSH key in the specified project for use with the interactive serial console feature.
* `BaremetalsolutionProjectsLocationsSSHKeysList` - Lists the public SSH keys registered for the specified project. These SSH keys are used only for the interactive serial console feature.
* `BaremetalsolutionProjectsLocationsVolumesList` - List storage volumes in a given project and location.
* `BaremetalsolutionProjectsLocationsVolumesLunsList` - List storage volume luns for given storage volume.
* `BaremetalsolutionProjectsLocationsVolumesPatch` - Update details of a single storage volume.
* `BaremetalsolutionProjectsLocationsVolumesResize` - Emergency Volume resize.
* `BaremetalsolutionProjectsLocationsVolumesSnapshotsCreate` - Takes a snapshot of a boot volume. Returns INVALID_ARGUMENT if called for a non-boot volume.
* `BaremetalsolutionProjectsLocationsVolumesSnapshotsDelete` - Deletes a volume snapshot. Returns INVALID_ARGUMENT if called for a non-boot volume.
* `BaremetalsolutionProjectsLocationsVolumesSnapshotsGet` - Returns the specified snapshot resource. Returns INVALID_ARGUMENT if called for a non-boot volume.
* `BaremetalsolutionProjectsLocationsVolumesSnapshotsList` - Retrieves the list of snapshots for the specified volume. Returns a response with an empty list of snapshots if called for a non-boot volume.
* `BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshot` - Uses the specified snapshot to restore its parent volume. Returns INVALID_ARGUMENT if called for a non-boot volume.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
