var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OsUpdateStatus } from "./osupdatestatus";
var ChromeOsDeviceActiveTimeRanges = /** @class */ (function (_super) {
    __extends(ChromeOsDeviceActiveTimeRanges, _super);
    function ChromeOsDeviceActiveTimeRanges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activeTime" }),
        __metadata("design:type", Number)
    ], ChromeOsDeviceActiveTimeRanges.prototype, "activeTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], ChromeOsDeviceActiveTimeRanges.prototype, "date", void 0);
    return ChromeOsDeviceActiveTimeRanges;
}(SpeakeasyBase));
export { ChromeOsDeviceActiveTimeRanges };
// ChromeOsDeviceCpuInfoLogicalCpusCStates
/**
 * Status of a single C-state. C-states are various modes the CPU can transition to in order to use more or less power.
**/
var ChromeOsDeviceCpuInfoLogicalCpusCStates = /** @class */ (function (_super) {
    __extends(ChromeOsDeviceCpuInfoLogicalCpusCStates, _super);
    function ChromeOsDeviceCpuInfoLogicalCpusCStates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ChromeOsDeviceCpuInfoLogicalCpusCStates.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessionDuration" }),
        __metadata("design:type", String)
    ], ChromeOsDeviceCpuInfoLogicalCpusCStates.prototype, "sessionDuration", void 0);
    return ChromeOsDeviceCpuInfoLogicalCpusCStates;
}(SpeakeasyBase));
export { ChromeOsDeviceCpuInfoLogicalCpusCStates };
// ChromeOsDeviceCpuInfoLogicalCpus
/**
 * Status of a single logical CPU.
**/
var ChromeOsDeviceCpuInfoLogicalCpus = /** @class */ (function (_super) {
    __extends(ChromeOsDeviceCpuInfoLogicalCpus, _super);
    function ChromeOsDeviceCpuInfoLogicalCpus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cStates", elemType: ChromeOsDeviceCpuInfoLogicalCpusCStates }),
        __metadata("design:type", Array)
    ], ChromeOsDeviceCpuInfoLogicalCpus.prototype, "cStates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentScalingFrequencyKhz" }),
        __metadata("design:type", Number)
    ], ChromeOsDeviceCpuInfoLogicalCpus.prototype, "currentScalingFrequencyKhz", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idleDuration" }),
        __metadata("design:type", String)
    ], ChromeOsDeviceCpuInfoLogicalCpus.prototype, "idleDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxScalingFrequencyKhz" }),
        __metadata("design:type", Number)
    ], ChromeOsDeviceCpuInfoLogicalCpus.prototype, "maxScalingFrequencyKhz", void 0);
    return ChromeOsDeviceCpuInfoLogicalCpus;
}(SpeakeasyBase));
export { ChromeOsDeviceCpuInfoLogicalCpus };
// ChromeOsDeviceCpuInfo
/**
 * CPU specs for a CPU.
**/
var ChromeOsDeviceCpuInfo = /** @class */ (function (_super) {
    __extends(ChromeOsDeviceCpuInfo, _super);
    function ChromeOsDeviceCpuInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=architecture" }),
        __metadata("design:type", String)
    ], ChromeOsDeviceCpuInfo.prototype, "architecture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logicalCpus", elemType: ChromeOsDeviceCpuInfoLogicalCpus }),
        __metadata("design:type", Array)
    ], ChromeOsDeviceCpuInfo.prototype, "logicalCpus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxClockSpeedKhz" }),
        __metadata("design:type", Number)
    ], ChromeOsDeviceCpuInfo.prototype, "maxClockSpeedKhz", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=model" }),
        __metadata("design:type", String)
    ], ChromeOsDeviceCpuInfo.prototype, "model", void 0);
    return ChromeOsDeviceCpuInfo;
}(SpeakeasyBase));
export { ChromeOsDeviceCpuInfo };
var ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo = /** @class */ (function (_super) {
    __extends(ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo, _super);
    function ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=temperature" }),
        __metadata("design:type", Number)
    ], ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo.prototype, "temperature", void 0);
    return ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo;
}(SpeakeasyBase));
export { ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo };
var ChromeOsDeviceCpuStatusReports = /** @class */ (function (_super) {
    __extends(ChromeOsDeviceCpuStatusReports, _super);
    function ChromeOsDeviceCpuStatusReports() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpuTemperatureInfo", elemType: ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo }),
        __metadata("design:type", Array)
    ], ChromeOsDeviceCpuStatusReports.prototype, "cpuTemperatureInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpuUtilizationPercentageInfo" }),
        __metadata("design:type", Array)
    ], ChromeOsDeviceCpuStatusReports.prototype, "cpuUtilizationPercentageInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportTime" }),
        __metadata("design:type", Date)
    ], ChromeOsDeviceCpuStatusReports.prototype, "reportTime", void 0);
    return ChromeOsDeviceCpuStatusReports;
}(SpeakeasyBase));
export { ChromeOsDeviceCpuStatusReports };
var ChromeOsDeviceDeviceFiles = /** @class */ (function (_super) {
    __extends(ChromeOsDeviceDeviceFiles, _super);
    function ChromeOsDeviceDeviceFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", Date)
    ], ChromeOsDeviceDeviceFiles.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downloadUrl" }),
        __metadata("design:type", String)
    ], ChromeOsDeviceDeviceFiles.prototype, "downloadUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ChromeOsDeviceDeviceFiles.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ChromeOsDeviceDeviceFiles.prototype, "type", void 0);
    return ChromeOsDeviceDeviceFiles;
}(SpeakeasyBase));
export { ChromeOsDeviceDeviceFiles };
var ChromeOsDeviceDiskVolumeReportsVolumeInfo = /** @class */ (function (_super) {
    __extends(ChromeOsDeviceDiskVolumeReportsVolumeInfo, _super);
    function ChromeOsDeviceDiskVolumeReportsVolumeInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storageFree" }),
        __metadata("design:type", String)
    ], ChromeOsDeviceDiskVolumeReportsVolumeInfo.prototype, "storageFree", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storageTotal" }),
        __metadata("design:type", String)
    ], ChromeOsDeviceDiskVolumeReportsVolumeInfo.prototype, "storageTotal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumeId" }),
        __metadata("design:type", String)
    ], ChromeOsDeviceDiskVolumeReportsVolumeInfo.prototype, "volumeId", void 0);
    return ChromeOsDeviceDiskVolumeReportsVolumeInfo;
}(SpeakeasyBase));
export { ChromeOsDeviceDiskVolumeReportsVolumeInfo };
var ChromeOsDeviceDiskVolumeReports = /** @class */ (function (_super) {
    __extends(ChromeOsDeviceDiskVolumeReports, _super);
    function ChromeOsDeviceDiskVolumeReports() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumeInfo", elemType: ChromeOsDeviceDiskVolumeReportsVolumeInfo }),
        __metadata("design:type", Array)
    ], ChromeOsDeviceDiskVolumeReports.prototype, "volumeInfo", void 0);
    return ChromeOsDeviceDiskVolumeReports;
}(SpeakeasyBase));
export { ChromeOsDeviceDiskVolumeReports };
// ChromeOsDeviceLastKnownNetwork
/**
 * Information for an ip address.
**/
var ChromeOsDeviceLastKnownNetwork = /** @class */ (function (_super) {
    __extends(ChromeOsDeviceLastKnownNetwork, _super);
    function ChromeOsDeviceLastKnownNetwork() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipAddress" }),
        __metadata("design:type", String)
    ], ChromeOsDeviceLastKnownNetwork.prototype, "ipAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wanIpAddress" }),
        __metadata("design:type", String)
    ], ChromeOsDeviceLastKnownNetwork.prototype, "wanIpAddress", void 0);
    return ChromeOsDeviceLastKnownNetwork;
}(SpeakeasyBase));
export { ChromeOsDeviceLastKnownNetwork };
// ChromeOsDeviceRecentUsers
/**
 * A list of recent device users, in descending order, by last login time.
**/
var ChromeOsDeviceRecentUsers = /** @class */ (function (_super) {
    __extends(ChromeOsDeviceRecentUsers, _super);
    function ChromeOsDeviceRecentUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ChromeOsDeviceRecentUsers.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ChromeOsDeviceRecentUsers.prototype, "type", void 0);
    return ChromeOsDeviceRecentUsers;
}(SpeakeasyBase));
export { ChromeOsDeviceRecentUsers };
var ChromeOsDeviceScreenshotFiles = /** @class */ (function (_super) {
    __extends(ChromeOsDeviceScreenshotFiles, _super);
    function ChromeOsDeviceScreenshotFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", Date)
    ], ChromeOsDeviceScreenshotFiles.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downloadUrl" }),
        __metadata("design:type", String)
    ], ChromeOsDeviceScreenshotFiles.prototype, "downloadUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ChromeOsDeviceScreenshotFiles.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ChromeOsDeviceScreenshotFiles.prototype, "type", void 0);
    return ChromeOsDeviceScreenshotFiles;
}(SpeakeasyBase));
export { ChromeOsDeviceScreenshotFiles };
var ChromeOsDeviceSystemRamFreeReports = /** @class */ (function (_super) {
    __extends(ChromeOsDeviceSystemRamFreeReports, _super);
    function ChromeOsDeviceSystemRamFreeReports() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportTime" }),
        __metadata("design:type", Date)
    ], ChromeOsDeviceSystemRamFreeReports.prototype, "reportTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=systemRamFreeInfo" }),
        __metadata("design:type", Array)
    ], ChromeOsDeviceSystemRamFreeReports.prototype, "systemRamFreeInfo", void 0);
    return ChromeOsDeviceSystemRamFreeReports;
}(SpeakeasyBase));
export { ChromeOsDeviceSystemRamFreeReports };
// ChromeOsDeviceTpmVersionInfo
/**
 * Trusted Platform Module (TPM) (Read-only)
**/
var ChromeOsDeviceTpmVersionInfo = /** @class */ (function (_super) {
    __extends(ChromeOsDeviceTpmVersionInfo, _super);
    function ChromeOsDeviceTpmVersionInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=family" }),
        __metadata("design:type", String)
    ], ChromeOsDeviceTpmVersionInfo.prototype, "family", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firmwareVersion" }),
        __metadata("design:type", String)
    ], ChromeOsDeviceTpmVersionInfo.prototype, "firmwareVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manufacturer" }),
        __metadata("design:type", String)
    ], ChromeOsDeviceTpmVersionInfo.prototype, "manufacturer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specLevel" }),
        __metadata("design:type", String)
    ], ChromeOsDeviceTpmVersionInfo.prototype, "specLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tpmModel" }),
        __metadata("design:type", String)
    ], ChromeOsDeviceTpmVersionInfo.prototype, "tpmModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vendorSpecific" }),
        __metadata("design:type", String)
    ], ChromeOsDeviceTpmVersionInfo.prototype, "vendorSpecific", void 0);
    return ChromeOsDeviceTpmVersionInfo;
}(SpeakeasyBase));
export { ChromeOsDeviceTpmVersionInfo };
// ChromeOsDevice
/**
 * Google Chrome devices run on the [Chrome OS](https://support.google.com/chromeos). For more information about common API tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-chrome-devices).
**/
var ChromeOsDevice = /** @class */ (function (_super) {
    __extends(ChromeOsDevice, _super);
    function ChromeOsDevice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activeTimeRanges", elemType: ChromeOsDeviceActiveTimeRanges }),
        __metadata("design:type", Array)
    ], ChromeOsDevice.prototype, "activeTimeRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotatedAssetId" }),
        __metadata("design:type", String)
    ], ChromeOsDevice.prototype, "annotatedAssetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotatedLocation" }),
        __metadata("design:type", String)
    ], ChromeOsDevice.prototype, "annotatedLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotatedUser" }),
        __metadata("design:type", String)
    ], ChromeOsDevice.prototype, "annotatedUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoUpdateExpiration" }),
        __metadata("design:type", String)
    ], ChromeOsDevice.prototype, "autoUpdateExpiration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bootMode" }),
        __metadata("design:type", String)
    ], ChromeOsDevice.prototype, "bootMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpuInfo", elemType: ChromeOsDeviceCpuInfo }),
        __metadata("design:type", Array)
    ], ChromeOsDevice.prototype, "cpuInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpuStatusReports", elemType: ChromeOsDeviceCpuStatusReports }),
        __metadata("design:type", Array)
    ], ChromeOsDevice.prototype, "cpuStatusReports", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceFiles", elemType: ChromeOsDeviceDeviceFiles }),
        __metadata("design:type", Array)
    ], ChromeOsDevice.prototype, "deviceFiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceId" }),
        __metadata("design:type", String)
    ], ChromeOsDevice.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskVolumeReports", elemType: ChromeOsDeviceDiskVolumeReports }),
        __metadata("design:type", Array)
    ], ChromeOsDevice.prototype, "diskVolumeReports", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dockMacAddress" }),
        __metadata("design:type", String)
    ], ChromeOsDevice.prototype, "dockMacAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], ChromeOsDevice.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ethernetMacAddress" }),
        __metadata("design:type", String)
    ], ChromeOsDevice.prototype, "ethernetMacAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ethernetMacAddress0" }),
        __metadata("design:type", String)
    ], ChromeOsDevice.prototype, "ethernetMacAddress0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firmwareVersion" }),
        __metadata("design:type", String)
    ], ChromeOsDevice.prototype, "firmwareVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstEnrollmentTime" }),
        __metadata("design:type", String)
    ], ChromeOsDevice.prototype, "firstEnrollmentTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], ChromeOsDevice.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastEnrollmentTime" }),
        __metadata("design:type", Date)
    ], ChromeOsDevice.prototype, "lastEnrollmentTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastKnownNetwork", elemType: ChromeOsDeviceLastKnownNetwork }),
        __metadata("design:type", Array)
    ], ChromeOsDevice.prototype, "lastKnownNetwork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastSync" }),
        __metadata("design:type", Date)
    ], ChromeOsDevice.prototype, "lastSync", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=macAddress" }),
        __metadata("design:type", String)
    ], ChromeOsDevice.prototype, "macAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manufactureDate" }),
        __metadata("design:type", String)
    ], ChromeOsDevice.prototype, "manufactureDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meid" }),
        __metadata("design:type", String)
    ], ChromeOsDevice.prototype, "meid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=model" }),
        __metadata("design:type", String)
    ], ChromeOsDevice.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], ChromeOsDevice.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderNumber" }),
        __metadata("design:type", String)
    ], ChromeOsDevice.prototype, "orderNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orgUnitId" }),
        __metadata("design:type", String)
    ], ChromeOsDevice.prototype, "orgUnitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orgUnitPath" }),
        __metadata("design:type", String)
    ], ChromeOsDevice.prototype, "orgUnitPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=osUpdateStatus" }),
        __metadata("design:type", OsUpdateStatus)
    ], ChromeOsDevice.prototype, "osUpdateStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=osVersion" }),
        __metadata("design:type", String)
    ], ChromeOsDevice.prototype, "osVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platformVersion" }),
        __metadata("design:type", String)
    ], ChromeOsDevice.prototype, "platformVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recentUsers", elemType: ChromeOsDeviceRecentUsers }),
        __metadata("design:type", Array)
    ], ChromeOsDevice.prototype, "recentUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=screenshotFiles", elemType: ChromeOsDeviceScreenshotFiles }),
        __metadata("design:type", Array)
    ], ChromeOsDevice.prototype, "screenshotFiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serialNumber" }),
        __metadata("design:type", String)
    ], ChromeOsDevice.prototype, "serialNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ChromeOsDevice.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportEndDate" }),
        __metadata("design:type", Date)
    ], ChromeOsDevice.prototype, "supportEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=systemRamFreeReports", elemType: ChromeOsDeviceSystemRamFreeReports }),
        __metadata("design:type", Array)
    ], ChromeOsDevice.prototype, "systemRamFreeReports", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=systemRamTotal" }),
        __metadata("design:type", String)
    ], ChromeOsDevice.prototype, "systemRamTotal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tpmVersionInfo" }),
        __metadata("design:type", ChromeOsDeviceTpmVersionInfo)
    ], ChromeOsDevice.prototype, "tpmVersionInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=willAutoRenew" }),
        __metadata("design:type", Boolean)
    ], ChromeOsDevice.prototype, "willAutoRenew", void 0);
    return ChromeOsDevice;
}(SpeakeasyBase));
export { ChromeOsDevice };
