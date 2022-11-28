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
import { ApplicationReport } from "./applicationreport";
import { PasswordRequirements } from "./passwordrequirements";
import { CommonCriteriaModeInfo } from "./commoncriteriamodeinfo";
import { DeviceSettings } from "./devicesettings";
import { UserFacingMessage } from "./userfacingmessage";
import { Display } from "./display";
import { HardwareInfo } from "./hardwareinfo";
import { HardwareStatus } from "./hardwarestatus";
import { MemoryEvent } from "./memoryevent";
import { MemoryInfo } from "./memoryinfo";
import { NetworkInfo } from "./networkinfo";
import { NonComplianceDetail } from "./noncompliancedetail";
import { PowerManagementEvent } from "./powermanagementevent";
import { SecurityPosture } from "./securityposture";
import { SoftwareInfo } from "./softwareinfo";
import { User } from "./user";
export var DeviceAppliedStateEnum;
(function (DeviceAppliedStateEnum) {
    DeviceAppliedStateEnum["DeviceStateUnspecified"] = "DEVICE_STATE_UNSPECIFIED";
    DeviceAppliedStateEnum["Active"] = "ACTIVE";
    DeviceAppliedStateEnum["Disabled"] = "DISABLED";
    DeviceAppliedStateEnum["Deleted"] = "DELETED";
    DeviceAppliedStateEnum["Provisioning"] = "PROVISIONING";
})(DeviceAppliedStateEnum || (DeviceAppliedStateEnum = {}));
export var DeviceManagementModeEnum;
(function (DeviceManagementModeEnum) {
    DeviceManagementModeEnum["ManagementModeUnspecified"] = "MANAGEMENT_MODE_UNSPECIFIED";
    DeviceManagementModeEnum["DeviceOwner"] = "DEVICE_OWNER";
    DeviceManagementModeEnum["ProfileOwner"] = "PROFILE_OWNER";
})(DeviceManagementModeEnum || (DeviceManagementModeEnum = {}));
export var DeviceOwnershipEnum;
(function (DeviceOwnershipEnum) {
    DeviceOwnershipEnum["OwnershipUnspecified"] = "OWNERSHIP_UNSPECIFIED";
    DeviceOwnershipEnum["CompanyOwned"] = "COMPANY_OWNED";
    DeviceOwnershipEnum["PersonallyOwned"] = "PERSONALLY_OWNED";
})(DeviceOwnershipEnum || (DeviceOwnershipEnum = {}));
export var DeviceStateEnum;
(function (DeviceStateEnum) {
    DeviceStateEnum["DeviceStateUnspecified"] = "DEVICE_STATE_UNSPECIFIED";
    DeviceStateEnum["Active"] = "ACTIVE";
    DeviceStateEnum["Disabled"] = "DISABLED";
    DeviceStateEnum["Deleted"] = "DELETED";
    DeviceStateEnum["Provisioning"] = "PROVISIONING";
})(DeviceStateEnum || (DeviceStateEnum = {}));
// Device
/**
 * A device owned by an enterprise. Unless otherwise noted, all fields are read-only and can't be modified by enterprises.devices.patch.
**/
var Device = /** @class */ (function (_super) {
    __extends(Device, _super);
    function Device() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiLevel" }),
        __metadata("design:type", Number)
    ], Device.prototype, "apiLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applicationReports", elemType: ApplicationReport }),
        __metadata("design:type", Array)
    ], Device.prototype, "applicationReports", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appliedPasswordPolicies", elemType: PasswordRequirements }),
        __metadata("design:type", Array)
    ], Device.prototype, "appliedPasswordPolicies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appliedPolicyName" }),
        __metadata("design:type", String)
    ], Device.prototype, "appliedPolicyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appliedPolicyVersion" }),
        __metadata("design:type", String)
    ], Device.prototype, "appliedPolicyVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appliedState" }),
        __metadata("design:type", String)
    ], Device.prototype, "appliedState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commonCriteriaModeInfo" }),
        __metadata("design:type", CommonCriteriaModeInfo)
    ], Device.prototype, "commonCriteriaModeInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceSettings" }),
        __metadata("design:type", DeviceSettings)
    ], Device.prototype, "deviceSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabledReason" }),
        __metadata("design:type", UserFacingMessage)
    ], Device.prototype, "disabledReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displays", elemType: Display }),
        __metadata("design:type", Array)
    ], Device.prototype, "displays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enrollmentTime" }),
        __metadata("design:type", String)
    ], Device.prototype, "enrollmentTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enrollmentTokenData" }),
        __metadata("design:type", String)
    ], Device.prototype, "enrollmentTokenData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enrollmentTokenName" }),
        __metadata("design:type", String)
    ], Device.prototype, "enrollmentTokenName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hardwareInfo" }),
        __metadata("design:type", HardwareInfo)
    ], Device.prototype, "hardwareInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hardwareStatusSamples", elemType: HardwareStatus }),
        __metadata("design:type", Array)
    ], Device.prototype, "hardwareStatusSamples", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastPolicyComplianceReportTime" }),
        __metadata("design:type", String)
    ], Device.prototype, "lastPolicyComplianceReportTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastPolicySyncTime" }),
        __metadata("design:type", String)
    ], Device.prototype, "lastPolicySyncTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastStatusReportTime" }),
        __metadata("design:type", String)
    ], Device.prototype, "lastStatusReportTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managementMode" }),
        __metadata("design:type", String)
    ], Device.prototype, "managementMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memoryEvents", elemType: MemoryEvent }),
        __metadata("design:type", Array)
    ], Device.prototype, "memoryEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memoryInfo" }),
        __metadata("design:type", MemoryInfo)
    ], Device.prototype, "memoryInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Device.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkInfo" }),
        __metadata("design:type", NetworkInfo)
    ], Device.prototype, "networkInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nonComplianceDetails", elemType: NonComplianceDetail }),
        __metadata("design:type", Array)
    ], Device.prototype, "nonComplianceDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownership" }),
        __metadata("design:type", String)
    ], Device.prototype, "ownership", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyCompliant" }),
        __metadata("design:type", Boolean)
    ], Device.prototype, "policyCompliant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyName" }),
        __metadata("design:type", String)
    ], Device.prototype, "policyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=powerManagementEvents", elemType: PowerManagementEvent }),
        __metadata("design:type", Array)
    ], Device.prototype, "powerManagementEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previousDeviceNames" }),
        __metadata("design:type", Array)
    ], Device.prototype, "previousDeviceNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityPosture" }),
        __metadata("design:type", SecurityPosture)
    ], Device.prototype, "securityPosture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=softwareInfo" }),
        __metadata("design:type", SoftwareInfo)
    ], Device.prototype, "softwareInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Device.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=systemProperties" }),
        __metadata("design:type", Map)
    ], Device.prototype, "systemProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", User)
    ], Device.prototype, "user", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userName" }),
        __metadata("design:type", String)
    ], Device.prototype, "userName", void 0);
    return Device;
}(SpeakeasyBase));
export { Device };
