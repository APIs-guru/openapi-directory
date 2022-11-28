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
export var DeviceIdentifierDeviceTypeEnum;
(function (DeviceIdentifierDeviceTypeEnum) {
    DeviceIdentifierDeviceTypeEnum["DeviceTypeUnspecified"] = "DEVICE_TYPE_UNSPECIFIED";
    DeviceIdentifierDeviceTypeEnum["DeviceTypeAndroid"] = "DEVICE_TYPE_ANDROID";
    DeviceIdentifierDeviceTypeEnum["DeviceTypeChromeOs"] = "DEVICE_TYPE_CHROME_OS";
})(DeviceIdentifierDeviceTypeEnum || (DeviceIdentifierDeviceTypeEnum = {}));
// DeviceIdentifier
/**
 * Encapsulates hardware and product IDs to identify a manufactured device. To understand requirements on identifier sets, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers).
**/
var DeviceIdentifier = /** @class */ (function (_super) {
    __extends(DeviceIdentifier, _super);
    function DeviceIdentifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chromeOsAttestedDeviceId" }),
        __metadata("design:type", String)
    ], DeviceIdentifier.prototype, "chromeOsAttestedDeviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceType" }),
        __metadata("design:type", String)
    ], DeviceIdentifier.prototype, "deviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imei" }),
        __metadata("design:type", String)
    ], DeviceIdentifier.prototype, "imei", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manufacturer" }),
        __metadata("design:type", String)
    ], DeviceIdentifier.prototype, "manufacturer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meid" }),
        __metadata("design:type", String)
    ], DeviceIdentifier.prototype, "meid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=model" }),
        __metadata("design:type", String)
    ], DeviceIdentifier.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serialNumber" }),
        __metadata("design:type", String)
    ], DeviceIdentifier.prototype, "serialNumber", void 0);
    return DeviceIdentifier;
}(SpeakeasyBase));
export { DeviceIdentifier };
