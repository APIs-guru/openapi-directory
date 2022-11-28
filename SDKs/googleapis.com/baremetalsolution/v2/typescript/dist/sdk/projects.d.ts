import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * baremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetch - Get instance provisioning settings for a given project. This is hidden method used by UI only.
    **/
    baremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetch(req: operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchResponse>;
    /**
     * baremetalsolutionProjectsLocationsInstancesCreate - Create an Instance.
    **/
    baremetalsolutionProjectsLocationsInstancesCreate(req: operations.BaremetalsolutionProjectsLocationsInstancesCreateRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsInstancesCreateResponse>;
    /**
     * baremetalsolutionProjectsLocationsInstancesDetachLun - Detach LUN from Instance.
    **/
    baremetalsolutionProjectsLocationsInstancesDetachLun(req: operations.BaremetalsolutionProjectsLocationsInstancesDetachLunRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsInstancesDetachLunResponse>;
    /**
     * baremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsole - Disable the interactive serial console feature on an instance.
    **/
    baremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsole(req: operations.BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleResponse>;
    /**
     * baremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsole - Enable the interactive serial console feature on an instance.
    **/
    baremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsole(req: operations.BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleResponse>;
    /**
     * baremetalsolutionProjectsLocationsInstancesList - List servers in a given project and location.
    **/
    baremetalsolutionProjectsLocationsInstancesList(req: operations.BaremetalsolutionProjectsLocationsInstancesListRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsInstancesListResponse>;
    /**
     * baremetalsolutionProjectsLocationsInstancesReset - Perform an ungraceful, hard reset on a server. Equivalent to shutting the power off and then turning it back on.
    **/
    baremetalsolutionProjectsLocationsInstancesReset(req: operations.BaremetalsolutionProjectsLocationsInstancesResetRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsInstancesResetResponse>;
    /**
     * baremetalsolutionProjectsLocationsInstancesStart - Starts a server that was shutdown.
    **/
    baremetalsolutionProjectsLocationsInstancesStart(req: operations.BaremetalsolutionProjectsLocationsInstancesStartRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsInstancesStartResponse>;
    /**
     * baremetalsolutionProjectsLocationsInstancesStop - Stop a running server.
    **/
    baremetalsolutionProjectsLocationsInstancesStop(req: operations.BaremetalsolutionProjectsLocationsInstancesStopRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsInstancesStopResponse>;
    /**
     * baremetalsolutionProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    baremetalsolutionProjectsLocationsList(req: operations.BaremetalsolutionProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsListResponse>;
    /**
     * baremetalsolutionProjectsLocationsNetworksList - List network in a given project and location.
    **/
    baremetalsolutionProjectsLocationsNetworksList(req: operations.BaremetalsolutionProjectsLocationsNetworksListRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsNetworksListResponse>;
    /**
     * baremetalsolutionProjectsLocationsNetworksListNetworkUsage - List all Networks (and used IPs for each Network) in the vendor account associated with the specified project.
    **/
    baremetalsolutionProjectsLocationsNetworksListNetworkUsage(req: operations.BaremetalsolutionProjectsLocationsNetworksListNetworkUsageRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsNetworksListNetworkUsageResponse>;
    /**
     * baremetalsolutionProjectsLocationsNfsSharesCreate - Create an NFS share.
    **/
    baremetalsolutionProjectsLocationsNfsSharesCreate(req: operations.BaremetalsolutionProjectsLocationsNfsSharesCreateRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsNfsSharesCreateResponse>;
    /**
     * baremetalsolutionProjectsLocationsNfsSharesList - List NFS shares.
    **/
    baremetalsolutionProjectsLocationsNfsSharesList(req: operations.BaremetalsolutionProjectsLocationsNfsSharesListRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsNfsSharesListResponse>;
    /**
     * baremetalsolutionProjectsLocationsProvisioningConfigsCreate - Create new ProvisioningConfig.
    **/
    baremetalsolutionProjectsLocationsProvisioningConfigsCreate(req: operations.BaremetalsolutionProjectsLocationsProvisioningConfigsCreateRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsProvisioningConfigsCreateResponse>;
    /**
     * baremetalsolutionProjectsLocationsProvisioningConfigsSubmit - Submit a provisiong configuration for a given project.
    **/
    baremetalsolutionProjectsLocationsProvisioningConfigsSubmit(req: operations.BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitResponse>;
    /**
     * baremetalsolutionProjectsLocationsProvisioningQuotasList - List the budget details to provision resources on a given project.
    **/
    baremetalsolutionProjectsLocationsProvisioningQuotasList(req: operations.BaremetalsolutionProjectsLocationsProvisioningQuotasListRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsProvisioningQuotasListResponse>;
    /**
     * baremetalsolutionProjectsLocationsSshKeysCreate - Register a public SSH key in the specified project for use with the interactive serial console feature.
    **/
    baremetalsolutionProjectsLocationsSshKeysCreate(req: operations.BaremetalsolutionProjectsLocationsSshKeysCreateRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsSshKeysCreateResponse>;
    /**
     * baremetalsolutionProjectsLocationsSshKeysList - Lists the public SSH keys registered for the specified project. These SSH keys are used only for the interactive serial console feature.
    **/
    baremetalsolutionProjectsLocationsSshKeysList(req: operations.BaremetalsolutionProjectsLocationsSshKeysListRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsSshKeysListResponse>;
    /**
     * baremetalsolutionProjectsLocationsVolumesList - List storage volumes in a given project and location.
    **/
    baremetalsolutionProjectsLocationsVolumesList(req: operations.BaremetalsolutionProjectsLocationsVolumesListRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsVolumesListResponse>;
    /**
     * baremetalsolutionProjectsLocationsVolumesLunsList - List storage volume luns for given storage volume.
    **/
    baremetalsolutionProjectsLocationsVolumesLunsList(req: operations.BaremetalsolutionProjectsLocationsVolumesLunsListRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsVolumesLunsListResponse>;
    /**
     * baremetalsolutionProjectsLocationsVolumesPatch - Update details of a single storage volume.
    **/
    baremetalsolutionProjectsLocationsVolumesPatch(req: operations.BaremetalsolutionProjectsLocationsVolumesPatchRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsVolumesPatchResponse>;
    /**
     * baremetalsolutionProjectsLocationsVolumesResize - Emergency Volume resize.
    **/
    baremetalsolutionProjectsLocationsVolumesResize(req: operations.BaremetalsolutionProjectsLocationsVolumesResizeRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsVolumesResizeResponse>;
    /**
     * baremetalsolutionProjectsLocationsVolumesSnapshotsCreate - Takes a snapshot of a boot volume. Returns INVALID_ARGUMENT if called for a non-boot volume.
    **/
    baremetalsolutionProjectsLocationsVolumesSnapshotsCreate(req: operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateResponse>;
    /**
     * baremetalsolutionProjectsLocationsVolumesSnapshotsDelete - Deletes a volume snapshot. Returns INVALID_ARGUMENT if called for a non-boot volume.
    **/
    baremetalsolutionProjectsLocationsVolumesSnapshotsDelete(req: operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteResponse>;
    /**
     * baremetalsolutionProjectsLocationsVolumesSnapshotsGet - Returns the specified snapshot resource. Returns INVALID_ARGUMENT if called for a non-boot volume.
    **/
    baremetalsolutionProjectsLocationsVolumesSnapshotsGet(req: operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsGetRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsGetResponse>;
    /**
     * baremetalsolutionProjectsLocationsVolumesSnapshotsList - Retrieves the list of snapshots for the specified volume. Returns a response with an empty list of snapshots if called for a non-boot volume.
    **/
    baremetalsolutionProjectsLocationsVolumesSnapshotsList(req: operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsListRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsListResponse>;
    /**
     * baremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshot - Uses the specified snapshot to restore its parent volume. Returns INVALID_ARGUMENT if called for a non-boot volume.
    **/
    baremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshot(req: operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotResponse>;
}
