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
export var DeviceSettingsEncryptionStatusEnum;
(function (DeviceSettingsEncryptionStatusEnum) {
    DeviceSettingsEncryptionStatusEnum["EncryptionStatusUnspecified"] = "ENCRYPTION_STATUS_UNSPECIFIED";
    DeviceSettingsEncryptionStatusEnum["Unsupported"] = "UNSUPPORTED";
    DeviceSettingsEncryptionStatusEnum["Inactive"] = "INACTIVE";
    DeviceSettingsEncryptionStatusEnum["Activating"] = "ACTIVATING";
    DeviceSettingsEncryptionStatusEnum["Active"] = "ACTIVE";
    DeviceSettingsEncryptionStatusEnum["ActiveDefaultKey"] = "ACTIVE_DEFAULT_KEY";
    DeviceSettingsEncryptionStatusEnum["ActivePerUser"] = "ACTIVE_PER_USER";
})(DeviceSettingsEncryptionStatusEnum || (DeviceSettingsEncryptionStatusEnum = {}));
// DeviceSettings
/**
 * Information about security related device settings on device.
**/
var DeviceSettings = /** @class */ (function (_super) {
    __extends(DeviceSettings, _super);
    function DeviceSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adbEnabled" }),
        __metadata("design:type", Boolean)
    ], DeviceSettings.prototype, "adbEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=developmentSettingsEnabled" }),
        __metadata("design:type", Boolean)
    ], DeviceSettings.prototype, "developmentSettingsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionStatus" }),
        __metadata("design:type", String)
    ], DeviceSettings.prototype, "encryptionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDeviceSecure" }),
        __metadata("design:type", Boolean)
    ], DeviceSettings.prototype, "isDeviceSecure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isEncrypted" }),
        __metadata("design:type", Boolean)
    ], DeviceSettings.prototype, "isEncrypted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unknownSourcesEnabled" }),
        __metadata("design:type", Boolean)
    ], DeviceSettings.prototype, "unknownSourcesEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verifyAppsEnabled" }),
        __metadata("design:type", Boolean)
    ], DeviceSettings.prototype, "verifyAppsEnabled", void 0);
    return DeviceSettings;
}(SpeakeasyBase));
export { DeviceSettings };
