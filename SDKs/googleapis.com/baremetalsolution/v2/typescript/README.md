# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest, BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    location: "soluta",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "ducimus",
    alt: "media",
    callback: "amet",
    fields: "iusto",
    key: "atque",
    oauthToken: "et",
    prettyPrint: false,
    quotaUser: "eligendi",
    uploadType: "sit",
    uploadProtocol: "illum",
  },
};

sdk.projects.baremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetch(req).then((res: BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `baremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetch` - Get instance provisioning settings for a given project. This is hidden method used by UI only.
* `baremetalsolutionProjectsLocationsInstancesCreate` - Create an Instance.
* `baremetalsolutionProjectsLocationsInstancesDetachLun` - Detach LUN from Instance.
* `baremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsole` - Disable the interactive serial console feature on an instance.
* `baremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsole` - Enable the interactive serial console feature on an instance.
* `baremetalsolutionProjectsLocationsInstancesList` - List servers in a given project and location.
* `baremetalsolutionProjectsLocationsInstancesReset` - Perform an ungraceful, hard reset on a server. Equivalent to shutting the power off and then turning it back on.
* `baremetalsolutionProjectsLocationsInstancesStart` - Starts a server that was shutdown.
* `baremetalsolutionProjectsLocationsInstancesStop` - Stop a running server.
* `baremetalsolutionProjectsLocationsList` - Lists information about the supported locations for this service.
* `baremetalsolutionProjectsLocationsNetworksList` - List network in a given project and location.
* `baremetalsolutionProjectsLocationsNetworksListNetworkUsage` - List all Networks (and used IPs for each Network) in the vendor account associated with the specified project.
* `baremetalsolutionProjectsLocationsNfsSharesCreate` - Create an NFS share.
* `baremetalsolutionProjectsLocationsNfsSharesList` - List NFS shares.
* `baremetalsolutionProjectsLocationsProvisioningConfigsCreate` - Create new ProvisioningConfig.
* `baremetalsolutionProjectsLocationsProvisioningConfigsSubmit` - Submit a provisiong configuration for a given project.
* `baremetalsolutionProjectsLocationsProvisioningQuotasList` - List the budget details to provision resources on a given project.
* `baremetalsolutionProjectsLocationsSshKeysCreate` - Register a public SSH key in the specified project for use with the interactive serial console feature.
* `baremetalsolutionProjectsLocationsSshKeysList` - Lists the public SSH keys registered for the specified project. These SSH keys are used only for the interactive serial console feature.
* `baremetalsolutionProjectsLocationsVolumesList` - List storage volumes in a given project and location.
* `baremetalsolutionProjectsLocationsVolumesLunsList` - List storage volume luns for given storage volume.
* `baremetalsolutionProjectsLocationsVolumesPatch` - Update details of a single storage volume.
* `baremetalsolutionProjectsLocationsVolumesResize` - Emergency Volume resize.
* `baremetalsolutionProjectsLocationsVolumesSnapshotsCreate` - Takes a snapshot of a boot volume. Returns INVALID_ARGUMENT if called for a non-boot volume.
* `baremetalsolutionProjectsLocationsVolumesSnapshotsDelete` - Deletes a volume snapshot. Returns INVALID_ARGUMENT if called for a non-boot volume.
* `baremetalsolutionProjectsLocationsVolumesSnapshotsGet` - Returns the specified snapshot resource. Returns INVALID_ARGUMENT if called for a non-boot volume.
* `baremetalsolutionProjectsLocationsVolumesSnapshotsList` - Retrieves the list of snapshots for the specified volume. Returns a response with an empty list of snapshots if called for a non-boot volume.
* `baremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshot` - Uses the specified snapshot to restore its parent volume. Returns INVALID_ARGUMENT if called for a non-boot volume.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
