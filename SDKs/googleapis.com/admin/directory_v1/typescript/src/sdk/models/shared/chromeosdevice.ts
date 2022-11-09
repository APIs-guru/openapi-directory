import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OsUpdateStatus } from "./osupdatestatus";


export class ChromeOsDeviceActiveTimeRanges extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeTime" })
  activeTime?: number;

  @Metadata({ data: "json, name=date" })
  date?: Date;
}


// ChromeOsDeviceCpuInfoLogicalCpusCStates
/** 
 * Status of a single C-state. C-states are various modes the CPU can transition to in order to use more or less power.
**/
export class ChromeOsDeviceCpuInfoLogicalCpusCStates extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=sessionDuration" })
  sessionDuration?: string;
}


// ChromeOsDeviceCpuInfoLogicalCpus
/** 
 * Status of a single logical CPU.
**/
export class ChromeOsDeviceCpuInfoLogicalCpus extends SpeakeasyBase {
  @Metadata({ data: "json, name=cStates", elemType: shared.ChromeOsDeviceCpuInfoLogicalCpusCStates })
  cStates?: ChromeOsDeviceCpuInfoLogicalCpusCStates[];

  @Metadata({ data: "json, name=currentScalingFrequencyKhz" })
  currentScalingFrequencyKhz?: number;

  @Metadata({ data: "json, name=idleDuration" })
  idleDuration?: string;

  @Metadata({ data: "json, name=maxScalingFrequencyKhz" })
  maxScalingFrequencyKhz?: number;
}


// ChromeOsDeviceCpuInfo
/** 
 * CPU specs for a CPU.
**/
export class ChromeOsDeviceCpuInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=architecture" })
  architecture?: string;

  @Metadata({ data: "json, name=logicalCpus", elemType: shared.ChromeOsDeviceCpuInfoLogicalCpus })
  logicalCpus?: ChromeOsDeviceCpuInfoLogicalCpus[];

  @Metadata({ data: "json, name=maxClockSpeedKhz" })
  maxClockSpeedKhz?: number;

  @Metadata({ data: "json, name=model" })
  model?: string;
}


export class ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=temperature" })
  temperature?: number;
}


export class ChromeOsDeviceCpuStatusReports extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpuTemperatureInfo", elemType: shared.ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo })
  cpuTemperatureInfo?: ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo[];

  @Metadata({ data: "json, name=cpuUtilizationPercentageInfo" })
  cpuUtilizationPercentageInfo?: number[];

  @Metadata({ data: "json, name=reportTime" })
  reportTime?: Date;
}


export class ChromeOsDeviceDeviceFiles extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: Date;

  @Metadata({ data: "json, name=downloadUrl" })
  downloadUrl?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class ChromeOsDeviceDiskVolumeReportsVolumeInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=storageFree" })
  storageFree?: string;

  @Metadata({ data: "json, name=storageTotal" })
  storageTotal?: string;

  @Metadata({ data: "json, name=volumeId" })
  volumeId?: string;
}


export class ChromeOsDeviceDiskVolumeReports extends SpeakeasyBase {
  @Metadata({ data: "json, name=volumeInfo", elemType: shared.ChromeOsDeviceDiskVolumeReportsVolumeInfo })
  volumeInfo?: ChromeOsDeviceDiskVolumeReportsVolumeInfo[];
}


// ChromeOsDeviceLastKnownNetwork
/** 
 * Information for an ip address.
**/
export class ChromeOsDeviceLastKnownNetwork extends SpeakeasyBase {
  @Metadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=wanIpAddress" })
  wanIpAddress?: string;
}


// ChromeOsDeviceRecentUsers
/** 
 * List of recent device users, in descending order, by last login time.
**/
export class ChromeOsDeviceRecentUsers extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class ChromeOsDeviceScreenshotFiles extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: Date;

  @Metadata({ data: "json, name=downloadUrl" })
  downloadUrl?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class ChromeOsDeviceSystemRamFreeReports extends SpeakeasyBase {
  @Metadata({ data: "json, name=reportTime" })
  reportTime?: Date;

  @Metadata({ data: "json, name=systemRamFreeInfo" })
  systemRamFreeInfo?: string[];
}


// ChromeOsDeviceTpmVersionInfo
/** 
 * Trusted Platform Module (TPM) (Read-only)
**/
export class ChromeOsDeviceTpmVersionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=family" })
  family?: string;

  @Metadata({ data: "json, name=firmwareVersion" })
  firmwareVersion?: string;

  @Metadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @Metadata({ data: "json, name=specLevel" })
  specLevel?: string;

  @Metadata({ data: "json, name=tpmModel" })
  tpmModel?: string;

  @Metadata({ data: "json, name=vendorSpecific" })
  vendorSpecific?: string;
}


// ChromeOsDevice
/** 
 * Google Chrome devices run on the [Chrome OS](https://support.google.com/chromeos). For more information about common API tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-chrome-devices).
**/
export class ChromeOsDevice extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeTimeRanges", elemType: shared.ChromeOsDeviceActiveTimeRanges })
  activeTimeRanges?: ChromeOsDeviceActiveTimeRanges[];

  @Metadata({ data: "json, name=annotatedAssetId" })
  annotatedAssetId?: string;

  @Metadata({ data: "json, name=annotatedLocation" })
  annotatedLocation?: string;

  @Metadata({ data: "json, name=annotatedUser" })
  annotatedUser?: string;

  @Metadata({ data: "json, name=autoUpdateExpiration" })
  autoUpdateExpiration?: string;

  @Metadata({ data: "json, name=bootMode" })
  bootMode?: string;

  @Metadata({ data: "json, name=cpuInfo", elemType: shared.ChromeOsDeviceCpuInfo })
  cpuInfo?: ChromeOsDeviceCpuInfo[];

  @Metadata({ data: "json, name=cpuStatusReports", elemType: shared.ChromeOsDeviceCpuStatusReports })
  cpuStatusReports?: ChromeOsDeviceCpuStatusReports[];

  @Metadata({ data: "json, name=deviceFiles", elemType: shared.ChromeOsDeviceDeviceFiles })
  deviceFiles?: ChromeOsDeviceDeviceFiles[];

  @Metadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @Metadata({ data: "json, name=diskVolumeReports", elemType: shared.ChromeOsDeviceDiskVolumeReports })
  diskVolumeReports?: ChromeOsDeviceDiskVolumeReports[];

  @Metadata({ data: "json, name=dockMacAddress" })
  dockMacAddress?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=ethernetMacAddress" })
  ethernetMacAddress?: string;

  @Metadata({ data: "json, name=ethernetMacAddress0" })
  ethernetMacAddress0?: string;

  @Metadata({ data: "json, name=firmwareVersion" })
  firmwareVersion?: string;

  @Metadata({ data: "json, name=firstEnrollmentTime" })
  firstEnrollmentTime?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=lastEnrollmentTime" })
  lastEnrollmentTime?: Date;

  @Metadata({ data: "json, name=lastKnownNetwork", elemType: shared.ChromeOsDeviceLastKnownNetwork })
  lastKnownNetwork?: ChromeOsDeviceLastKnownNetwork[];

  @Metadata({ data: "json, name=lastSync" })
  lastSync?: Date;

  @Metadata({ data: "json, name=macAddress" })
  macAddress?: string;

  @Metadata({ data: "json, name=manufactureDate" })
  manufactureDate?: string;

  @Metadata({ data: "json, name=meid" })
  meid?: string;

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=orderNumber" })
  orderNumber?: string;

  @Metadata({ data: "json, name=orgUnitId" })
  orgUnitId?: string;

  @Metadata({ data: "json, name=orgUnitPath" })
  orgUnitPath?: string;

  @Metadata({ data: "json, name=osUpdateStatus" })
  osUpdateStatus?: OsUpdateStatus;

  @Metadata({ data: "json, name=osVersion" })
  osVersion?: string;

  @Metadata({ data: "json, name=platformVersion" })
  platformVersion?: string;

  @Metadata({ data: "json, name=recentUsers", elemType: shared.ChromeOsDeviceRecentUsers })
  recentUsers?: ChromeOsDeviceRecentUsers[];

  @Metadata({ data: "json, name=screenshotFiles", elemType: shared.ChromeOsDeviceScreenshotFiles })
  screenshotFiles?: ChromeOsDeviceScreenshotFiles[];

  @Metadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=supportEndDate" })
  supportEndDate?: Date;

  @Metadata({ data: "json, name=systemRamFreeReports", elemType: shared.ChromeOsDeviceSystemRamFreeReports })
  systemRamFreeReports?: ChromeOsDeviceSystemRamFreeReports[];

  @Metadata({ data: "json, name=systemRamTotal" })
  systemRamTotal?: string;

  @Metadata({ data: "json, name=tpmVersionInfo" })
  tpmVersionInfo?: ChromeOsDeviceTpmVersionInfo;

  @Metadata({ data: "json, name=willAutoRenew" })
  willAutoRenew?: boolean;
}
