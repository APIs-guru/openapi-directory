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
import { Vulnerability } from "./vulnerability";
import { FirmwareInfo } from "./firmwareinfo";
var DeviceInfo = /** @class */ (function (_super) {
    __extends(DeviceInfo, _super);
    function DeviceInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cve_list", elemType: Vulnerability }),
        __metadata("design:type", Array)
    ], DeviceInfo.prototype, "cveList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device_type" }),
        __metadata("design:type", String)
    ], DeviceInfo.prototype, "deviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firmware_info" }),
        __metadata("design:type", FirmwareInfo)
    ], DeviceInfo.prototype, "firmwareInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firmware_version" }),
        __metadata("design:type", String)
    ], DeviceInfo.prototype, "firmwareVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_discontinued" }),
        __metadata("design:type", Boolean)
    ], DeviceInfo.prototype, "isDiscontinued", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latest_firmware_info" }),
        __metadata("design:type", FirmwareInfo)
    ], DeviceInfo.prototype, "latestFirmwareInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manufacturer" }),
        __metadata("design:type", String)
    ], DeviceInfo.prototype, "manufacturer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=model_name" }),
        __metadata("design:type", String)
    ], DeviceInfo.prototype, "modelName", void 0);
    return DeviceInfo;
}(SpeakeasyBase));
export { DeviceInfo };
