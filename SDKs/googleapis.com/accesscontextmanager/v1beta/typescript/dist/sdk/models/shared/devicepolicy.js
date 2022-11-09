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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var DevicePolicyAllowedDeviceManagementLevelsEnum;
(function (DevicePolicyAllowedDeviceManagementLevelsEnum) {
    DevicePolicyAllowedDeviceManagementLevelsEnum["ManagementUnspecified"] = "MANAGEMENT_UNSPECIFIED";
    DevicePolicyAllowedDeviceManagementLevelsEnum["None"] = "NONE";
    DevicePolicyAllowedDeviceManagementLevelsEnum["Basic"] = "BASIC";
    DevicePolicyAllowedDeviceManagementLevelsEnum["Complete"] = "COMPLETE";
})(DevicePolicyAllowedDeviceManagementLevelsEnum || (DevicePolicyAllowedDeviceManagementLevelsEnum = {}));
export var DevicePolicyAllowedEncryptionStatusesEnum;
(function (DevicePolicyAllowedEncryptionStatusesEnum) {
    DevicePolicyAllowedEncryptionStatusesEnum["EncryptionUnspecified"] = "ENCRYPTION_UNSPECIFIED";
    DevicePolicyAllowedEncryptionStatusesEnum["EncryptionUnsupported"] = "ENCRYPTION_UNSUPPORTED";
    DevicePolicyAllowedEncryptionStatusesEnum["Unencrypted"] = "UNENCRYPTED";
    DevicePolicyAllowedEncryptionStatusesEnum["Encrypted"] = "ENCRYPTED";
})(DevicePolicyAllowedEncryptionStatusesEnum || (DevicePolicyAllowedEncryptionStatusesEnum = {}));
// DevicePolicy
/**
 * `DevicePolicy` specifies device specific restrictions necessary to acquire a given access level. A `DevicePolicy` specifies requirements for requests from devices to be granted access levels, it does not do any enforcement on the device. `DevicePolicy` acts as an AND over all specified fields, and each repeated field is an OR over its elements. Any unset fields are ignored. For example, if the proto is { os_type : DESKTOP_WINDOWS, os_type : DESKTOP_LINUX, encryption_status: ENCRYPTED}, then the DevicePolicy will be true for requests originating from encrypted Linux desktops and encrypted Windows desktops.
**/
var DevicePolicy = /** @class */ (function (_super) {
    __extends(DevicePolicy, _super);
    function DevicePolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=allowedDeviceManagementLevels" }),
        __metadata("design:type", Array)
    ], DevicePolicy.prototype, "allowedDeviceManagementLevels", void 0);
    __decorate([
        Metadata({ data: "json, name=allowedEncryptionStatuses" }),
        __metadata("design:type", Array)
    ], DevicePolicy.prototype, "allowedEncryptionStatuses", void 0);
    __decorate([
        Metadata({ data: "json, name=osConstraints", elemType: shared.OsConstraint }),
        __metadata("design:type", Array)
    ], DevicePolicy.prototype, "osConstraints", void 0);
    __decorate([
        Metadata({ data: "json, name=requireAdminApproval" }),
        __metadata("design:type", Boolean)
    ], DevicePolicy.prototype, "requireAdminApproval", void 0);
    __decorate([
        Metadata({ data: "json, name=requireCorpOwned" }),
        __metadata("design:type", Boolean)
    ], DevicePolicy.prototype, "requireCorpOwned", void 0);
    __decorate([
        Metadata({ data: "json, name=requireScreenlock" }),
        __metadata("design:type", Boolean)
    ], DevicePolicy.prototype, "requireScreenlock", void 0);
    return DevicePolicy;
}(SpeakeasyBase));
export { DevicePolicy };
