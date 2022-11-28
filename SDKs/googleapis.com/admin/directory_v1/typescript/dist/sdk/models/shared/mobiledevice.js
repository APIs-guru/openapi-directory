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
var MobileDeviceApplications = /** @class */ (function (_super) {
    __extends(MobileDeviceApplications, _super);
    function MobileDeviceApplications() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], MobileDeviceApplications.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageName" }),
        __metadata("design:type", String)
    ], MobileDeviceApplications.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permission" }),
        __metadata("design:type", Array)
    ], MobileDeviceApplications.prototype, "permission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versionCode" }),
        __metadata("design:type", Number)
    ], MobileDeviceApplications.prototype, "versionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versionName" }),
        __metadata("design:type", String)
    ], MobileDeviceApplications.prototype, "versionName", void 0);
    return MobileDeviceApplications;
}(SpeakeasyBase));
export { MobileDeviceApplications };
// MobileDevice
/**
 * Google Workspace Mobile Management includes Android, [Google Sync](https://support.google.com/a/answer/135937), and iOS devices. For more information about common group mobile device API tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile-devices.html).
**/
var MobileDevice = /** @class */ (function (_super) {
    __extends(MobileDevice, _super);
    function MobileDevice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adbStatus" }),
        __metadata("design:type", Boolean)
    ], MobileDevice.prototype, "adbStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applications", elemType: MobileDeviceApplications }),
        __metadata("design:type", Array)
    ], MobileDevice.prototype, "applications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basebandVersion" }),
        __metadata("design:type", String)
    ], MobileDevice.prototype, "basebandVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bootloaderVersion" }),
        __metadata("design:type", String)
    ], MobileDevice.prototype, "bootloaderVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brand" }),
        __metadata("design:type", String)
    ], MobileDevice.prototype, "brand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildNumber" }),
        __metadata("design:type", String)
    ], MobileDevice.prototype, "buildNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultLanguage" }),
        __metadata("design:type", String)
    ], MobileDevice.prototype, "defaultLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=developerOptionsStatus" }),
        __metadata("design:type", Boolean)
    ], MobileDevice.prototype, "developerOptionsStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceCompromisedStatus" }),
        __metadata("design:type", String)
    ], MobileDevice.prototype, "deviceCompromisedStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceId" }),
        __metadata("design:type", String)
    ], MobileDevice.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=devicePasswordStatus" }),
        __metadata("design:type", String)
    ], MobileDevice.prototype, "devicePasswordStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", Array)
    ], MobileDevice.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionStatus" }),
        __metadata("design:type", String)
    ], MobileDevice.prototype, "encryptionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], MobileDevice.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstSync" }),
        __metadata("design:type", Date)
    ], MobileDevice.prototype, "firstSync", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hardware" }),
        __metadata("design:type", String)
    ], MobileDevice.prototype, "hardware", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hardwareId" }),
        __metadata("design:type", String)
    ], MobileDevice.prototype, "hardwareId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imei" }),
        __metadata("design:type", String)
    ], MobileDevice.prototype, "imei", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kernelVersion" }),
        __metadata("design:type", String)
    ], MobileDevice.prototype, "kernelVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], MobileDevice.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastSync" }),
        __metadata("design:type", Date)
    ], MobileDevice.prototype, "lastSync", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managedAccountIsOnOwnerProfile" }),
        __metadata("design:type", Boolean)
    ], MobileDevice.prototype, "managedAccountIsOnOwnerProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manufacturer" }),
        __metadata("design:type", String)
    ], MobileDevice.prototype, "manufacturer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meid" }),
        __metadata("design:type", String)
    ], MobileDevice.prototype, "meid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=model" }),
        __metadata("design:type", String)
    ], MobileDevice.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", Array)
    ], MobileDevice.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkOperator" }),
        __metadata("design:type", String)
    ], MobileDevice.prototype, "networkOperator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=os" }),
        __metadata("design:type", String)
    ], MobileDevice.prototype, "os", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otherAccountsInfo" }),
        __metadata("design:type", Array)
    ], MobileDevice.prototype, "otherAccountsInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privilege" }),
        __metadata("design:type", String)
    ], MobileDevice.prototype, "privilege", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releaseVersion" }),
        __metadata("design:type", String)
    ], MobileDevice.prototype, "releaseVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceId" }),
        __metadata("design:type", String)
    ], MobileDevice.prototype, "resourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityPatchLevel" }),
        __metadata("design:type", String)
    ], MobileDevice.prototype, "securityPatchLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serialNumber" }),
        __metadata("design:type", String)
    ], MobileDevice.prototype, "serialNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], MobileDevice.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportsWorkProfile" }),
        __metadata("design:type", Boolean)
    ], MobileDevice.prototype, "supportsWorkProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], MobileDevice.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unknownSourcesStatus" }),
        __metadata("design:type", Boolean)
    ], MobileDevice.prototype, "unknownSourcesStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userAgent" }),
        __metadata("design:type", String)
    ], MobileDevice.prototype, "userAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wifiMacAddress" }),
        __metadata("design:type", String)
    ], MobileDevice.prototype, "wifiMacAddress", void 0);
    return MobileDevice;
}(SpeakeasyBase));
export { MobileDevice };
