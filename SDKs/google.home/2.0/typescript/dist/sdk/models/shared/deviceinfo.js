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
import { Capabilities } from "./capabilities";
var DeviceInfo = /** @class */ (function (_super) {
    __extends(DeviceInfo, _super);
    function DeviceInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=4k_blocked" }),
        __metadata("design:type", Number)
    ], DeviceInfo.prototype, "fourkBlocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capabilities" }),
        __metadata("design:type", Capabilities)
    ], DeviceInfo.prototype, "capabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloud_device_id" }),
        __metadata("design:type", String)
    ], DeviceInfo.prototype, "cloudDeviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=factory_country_code" }),
        __metadata("design:type", String)
    ], DeviceInfo.prototype, "factoryCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hotspot_bssid" }),
        __metadata("design:type", String)
    ], DeviceInfo.prototype, "hotspotBssid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=local_authorization_token_hash" }),
        __metadata("design:type", String)
    ], DeviceInfo.prototype, "localAuthorizationTokenHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mac_address" }),
        __metadata("design:type", String)
    ], DeviceInfo.prototype, "macAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manufacturer" }),
        __metadata("design:type", String)
    ], DeviceInfo.prototype, "manufacturer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=model_name" }),
        __metadata("design:type", String)
    ], DeviceInfo.prototype, "modelName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=product_name" }),
        __metadata("design:type", String)
    ], DeviceInfo.prototype, "productName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_key" }),
        __metadata("design:type", String)
    ], DeviceInfo.prototype, "publicKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssdp_udn" }),
        __metadata("design:type", String)
    ], DeviceInfo.prototype, "ssdpUdn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uma_client_id" }),
        __metadata("design:type", String)
    ], DeviceInfo.prototype, "umaClientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uptime" }),
        __metadata("design:type", Number)
    ], DeviceInfo.prototype, "uptime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=weave_device_id" }),
        __metadata("design:type", String)
    ], DeviceInfo.prototype, "weaveDeviceId", void 0);
    return DeviceInfo;
}(SpeakeasyBase));
export { DeviceInfo };
