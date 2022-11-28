import { SpeakeasyBase } from "../../../internal/utils";
import { OsUpdateStatus } from "./osupdatestatus";
export declare class ChromeOsDeviceActiveTimeRanges extends SpeakeasyBase {
    activeTime?: number;
    date?: Date;
}
/**
 * Status of a single C-state. C-states are various modes the CPU can transition to in order to use more or less power.
**/
export declare class ChromeOsDeviceCpuInfoLogicalCpusCStates extends SpeakeasyBase {
    displayName?: string;
    sessionDuration?: string;
}
/**
 * Status of a single logical CPU.
**/
export declare class ChromeOsDeviceCpuInfoLogicalCpus extends SpeakeasyBase {
    cStates?: ChromeOsDeviceCpuInfoLogicalCpusCStates[];
    currentScalingFrequencyKhz?: number;
    idleDuration?: string;
    maxScalingFrequencyKhz?: number;
}
/**
 * CPU specs for a CPU.
**/
export declare class ChromeOsDeviceCpuInfo extends SpeakeasyBase {
    architecture?: string;
    logicalCpus?: ChromeOsDeviceCpuInfoLogicalCpus[];
    maxClockSpeedKhz?: number;
    model?: string;
}
export declare class ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo extends SpeakeasyBase {
    label?: string;
    temperature?: number;
}
export declare class ChromeOsDeviceCpuStatusReports extends SpeakeasyBase {
    cpuTemperatureInfo?: ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo[];
    cpuUtilizationPercentageInfo?: number[];
    reportTime?: Date;
}
export declare class ChromeOsDeviceDeviceFiles extends SpeakeasyBase {
    createTime?: Date;
    downloadUrl?: string;
    name?: string;
    type?: string;
}
export declare class ChromeOsDeviceDiskVolumeReportsVolumeInfo extends SpeakeasyBase {
    storageFree?: string;
    storageTotal?: string;
    volumeId?: string;
}
export declare class ChromeOsDeviceDiskVolumeReports extends SpeakeasyBase {
    volumeInfo?: ChromeOsDeviceDiskVolumeReportsVolumeInfo[];
}
/**
 * Information for an ip address.
**/
export declare class ChromeOsDeviceLastKnownNetwork extends SpeakeasyBase {
    ipAddress?: string;
    wanIpAddress?: string;
}
/**
 * A list of recent device users, in descending order, by last login time.
**/
export declare class ChromeOsDeviceRecentUsers extends SpeakeasyBase {
    email?: string;
    type?: string;
}
export declare class ChromeOsDeviceScreenshotFiles extends SpeakeasyBase {
    createTime?: Date;
    downloadUrl?: string;
    name?: string;
    type?: string;
}
export declare class ChromeOsDeviceSystemRamFreeReports extends SpeakeasyBase {
    reportTime?: Date;
    systemRamFreeInfo?: string[];
}
/**
 * Trusted Platform Module (TPM) (Read-only)
**/
export declare class ChromeOsDeviceTpmVersionInfo extends SpeakeasyBase {
    family?: string;
    firmwareVersion?: string;
    manufacturer?: string;
    specLevel?: string;
    tpmModel?: string;
    vendorSpecific?: string;
}
/**
 * Google Chrome devices run on the [Chrome OS](https://support.google.com/chromeos). For more information about common API tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-chrome-devices).
**/
export declare class ChromeOsDevice extends SpeakeasyBase {
    activeTimeRanges?: ChromeOsDeviceActiveTimeRanges[];
    annotatedAssetId?: string;
    annotatedLocation?: string;
    annotatedUser?: string;
    autoUpdateExpiration?: string;
    bootMode?: string;
    cpuInfo?: ChromeOsDeviceCpuInfo[];
    cpuStatusReports?: ChromeOsDeviceCpuStatusReports[];
    deviceFiles?: ChromeOsDeviceDeviceFiles[];
    deviceId?: string;
    diskVolumeReports?: ChromeOsDeviceDiskVolumeReports[];
    dockMacAddress?: string;
    etag?: string;
    ethernetMacAddress?: string;
    ethernetMacAddress0?: string;
    firmwareVersion?: string;
    firstEnrollmentTime?: string;
    kind?: string;
    lastEnrollmentTime?: Date;
    lastKnownNetwork?: ChromeOsDeviceLastKnownNetwork[];
    lastSync?: Date;
    macAddress?: string;
    manufactureDate?: string;
    meid?: string;
    model?: string;
    notes?: string;
    orderNumber?: string;
    orgUnitId?: string;
    orgUnitPath?: string;
    osUpdateStatus?: OsUpdateStatus;
    osVersion?: string;
    platformVersion?: string;
    recentUsers?: ChromeOsDeviceRecentUsers[];
    screenshotFiles?: ChromeOsDeviceScreenshotFiles[];
    serialNumber?: string;
    status?: string;
    supportEndDate?: Date;
    systemRamFreeReports?: ChromeOsDeviceSystemRamFreeReports[];
    systemRamTotal?: string;
    tpmVersionInfo?: ChromeOsDeviceTpmVersionInfo;
    willAutoRenew?: boolean;
}
