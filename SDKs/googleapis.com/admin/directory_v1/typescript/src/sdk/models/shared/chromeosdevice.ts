import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OsUpdateStatus } from "./osupdatestatus";



export class ChromeOsDeviceActiveTimeRanges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeTime" })
  activeTime?: number;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;
}


// ChromeOsDeviceCpuInfoLogicalCpusCStates
/** 
 * Status of a single C-state. C-states are various modes the CPU can transition to in order to use more or less power.
**/
export class ChromeOsDeviceCpuInfoLogicalCpusCStates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionDuration" })
  sessionDuration?: string;
}


// ChromeOsDeviceCpuInfoLogicalCpus
/** 
 * Status of a single logical CPU.
**/
export class ChromeOsDeviceCpuInfoLogicalCpus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cStates", elemType: ChromeOsDeviceCpuInfoLogicalCpusCStates })
  cStates?: ChromeOsDeviceCpuInfoLogicalCpusCStates[];

  @SpeakeasyMetadata({ data: "json, name=currentScalingFrequencyKhz" })
  currentScalingFrequencyKhz?: number;

  @SpeakeasyMetadata({ data: "json, name=idleDuration" })
  idleDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=maxScalingFrequencyKhz" })
  maxScalingFrequencyKhz?: number;
}


// ChromeOsDeviceCpuInfo
/** 
 * CPU specs for a CPU.
**/
export class ChromeOsDeviceCpuInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=architecture" })
  architecture?: string;

  @SpeakeasyMetadata({ data: "json, name=logicalCpus", elemType: ChromeOsDeviceCpuInfoLogicalCpus })
  logicalCpus?: ChromeOsDeviceCpuInfoLogicalCpus[];

  @SpeakeasyMetadata({ data: "json, name=maxClockSpeedKhz" })
  maxClockSpeedKhz?: number;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;
}


export class ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=temperature" })
  temperature?: number;
}


export class ChromeOsDeviceCpuStatusReports extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpuTemperatureInfo", elemType: ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo })
  cpuTemperatureInfo?: ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo[];

  @SpeakeasyMetadata({ data: "json, name=cpuUtilizationPercentageInfo" })
  cpuUtilizationPercentageInfo?: number[];

  @SpeakeasyMetadata({ data: "json, name=reportTime" })
  reportTime?: Date;
}


export class ChromeOsDeviceDeviceFiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=downloadUrl" })
  downloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class ChromeOsDeviceDiskVolumeReportsVolumeInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=storageFree" })
  storageFree?: string;

  @SpeakeasyMetadata({ data: "json, name=storageTotal" })
  storageTotal?: string;

  @SpeakeasyMetadata({ data: "json, name=volumeId" })
  volumeId?: string;
}


export class ChromeOsDeviceDiskVolumeReports extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=volumeInfo", elemType: ChromeOsDeviceDiskVolumeReportsVolumeInfo })
  volumeInfo?: ChromeOsDeviceDiskVolumeReportsVolumeInfo[];
}


// ChromeOsDeviceLastKnownNetwork
/** 
 * Information for an ip address.
**/
export class ChromeOsDeviceLastKnownNetwork extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=wanIpAddress" })
  wanIpAddress?: string;
}


// ChromeOsDeviceRecentUsers
/** 
 * A list of recent device users, in descending order, by last login time.
**/
export class ChromeOsDeviceRecentUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class ChromeOsDeviceScreenshotFiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=downloadUrl" })
  downloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class ChromeOsDeviceSystemRamFreeReports extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reportTime" })
  reportTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=systemRamFreeInfo" })
  systemRamFreeInfo?: string[];
}


// ChromeOsDeviceTpmVersionInfo
/** 
 * Trusted Platform Module (TPM) (Read-only)
**/
export class ChromeOsDeviceTpmVersionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=family" })
  family?: string;

  @SpeakeasyMetadata({ data: "json, name=firmwareVersion" })
  firmwareVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @SpeakeasyMetadata({ data: "json, name=specLevel" })
  specLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=tpmModel" })
  tpmModel?: string;

  @SpeakeasyMetadata({ data: "json, name=vendorSpecific" })
  vendorSpecific?: string;
}


// ChromeOsDevice
/** 
 * Google Chrome devices run on the [Chrome OS](https://support.google.com/chromeos). For more information about common API tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-chrome-devices).
**/
export class ChromeOsDevice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeTimeRanges", elemType: ChromeOsDeviceActiveTimeRanges })
  activeTimeRanges?: ChromeOsDeviceActiveTimeRanges[];

  @SpeakeasyMetadata({ data: "json, name=annotatedAssetId" })
  annotatedAssetId?: string;

  @SpeakeasyMetadata({ data: "json, name=annotatedLocation" })
  annotatedLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=annotatedUser" })
  annotatedUser?: string;

  @SpeakeasyMetadata({ data: "json, name=autoUpdateExpiration" })
  autoUpdateExpiration?: string;

  @SpeakeasyMetadata({ data: "json, name=bootMode" })
  bootMode?: string;

  @SpeakeasyMetadata({ data: "json, name=cpuInfo", elemType: ChromeOsDeviceCpuInfo })
  cpuInfo?: ChromeOsDeviceCpuInfo[];

  @SpeakeasyMetadata({ data: "json, name=cpuStatusReports", elemType: ChromeOsDeviceCpuStatusReports })
  cpuStatusReports?: ChromeOsDeviceCpuStatusReports[];

  @SpeakeasyMetadata({ data: "json, name=deviceFiles", elemType: ChromeOsDeviceDeviceFiles })
  deviceFiles?: ChromeOsDeviceDeviceFiles[];

  @SpeakeasyMetadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=diskVolumeReports", elemType: ChromeOsDeviceDiskVolumeReports })
  diskVolumeReports?: ChromeOsDeviceDiskVolumeReports[];

  @SpeakeasyMetadata({ data: "json, name=dockMacAddress" })
  dockMacAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=ethernetMacAddress" })
  ethernetMacAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=ethernetMacAddress0" })
  ethernetMacAddress0?: string;

  @SpeakeasyMetadata({ data: "json, name=firmwareVersion" })
  firmwareVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=firstEnrollmentTime" })
  firstEnrollmentTime?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=lastEnrollmentTime" })
  lastEnrollmentTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastKnownNetwork", elemType: ChromeOsDeviceLastKnownNetwork })
  lastKnownNetwork?: ChromeOsDeviceLastKnownNetwork[];

  @SpeakeasyMetadata({ data: "json, name=lastSync" })
  lastSync?: Date;

  @SpeakeasyMetadata({ data: "json, name=macAddress" })
  macAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=manufactureDate" })
  manufactureDate?: string;

  @SpeakeasyMetadata({ data: "json, name=meid" })
  meid?: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=orderNumber" })
  orderNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=orgUnitId" })
  orgUnitId?: string;

  @SpeakeasyMetadata({ data: "json, name=orgUnitPath" })
  orgUnitPath?: string;

  @SpeakeasyMetadata({ data: "json, name=osUpdateStatus" })
  osUpdateStatus?: OsUpdateStatus;

  @SpeakeasyMetadata({ data: "json, name=osVersion" })
  osVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=platformVersion" })
  platformVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=recentUsers", elemType: ChromeOsDeviceRecentUsers })
  recentUsers?: ChromeOsDeviceRecentUsers[];

  @SpeakeasyMetadata({ data: "json, name=screenshotFiles", elemType: ChromeOsDeviceScreenshotFiles })
  screenshotFiles?: ChromeOsDeviceScreenshotFiles[];

  @SpeakeasyMetadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=supportEndDate" })
  supportEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=systemRamFreeReports", elemType: ChromeOsDeviceSystemRamFreeReports })
  systemRamFreeReports?: ChromeOsDeviceSystemRamFreeReports[];

  @SpeakeasyMetadata({ data: "json, name=systemRamTotal" })
  systemRamTotal?: string;

  @SpeakeasyMetadata({ data: "json, name=tpmVersionInfo" })
  tpmVersionInfo?: ChromeOsDeviceTpmVersionInfo;

  @SpeakeasyMetadata({ data: "json, name=willAutoRenew" })
  willAutoRenew?: boolean;
}
