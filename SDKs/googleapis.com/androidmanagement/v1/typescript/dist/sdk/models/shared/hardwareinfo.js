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
// HardwareInfo
/**
 * Information about device hardware. The fields related to temperature thresholds are only available if hardwareStatusEnabled is true in the device's policy.
**/
var HardwareInfo = /** @class */ (function (_super) {
    __extends(HardwareInfo, _super);
    function HardwareInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=batteryShutdownTemperatures" }),
        __metadata("design:type", Array)
    ], HardwareInfo.prototype, "batteryShutdownTemperatures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=batteryThrottlingTemperatures" }),
        __metadata("design:type", Array)
    ], HardwareInfo.prototype, "batteryThrottlingTemperatures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brand" }),
        __metadata("design:type", String)
    ], HardwareInfo.prototype, "brand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpuShutdownTemperatures" }),
        __metadata("design:type", Array)
    ], HardwareInfo.prototype, "cpuShutdownTemperatures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpuThrottlingTemperatures" }),
        __metadata("design:type", Array)
    ], HardwareInfo.prototype, "cpuThrottlingTemperatures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceBasebandVersion" }),
        __metadata("design:type", String)
    ], HardwareInfo.prototype, "deviceBasebandVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enterpriseSpecificId" }),
        __metadata("design:type", String)
    ], HardwareInfo.prototype, "enterpriseSpecificId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gpuShutdownTemperatures" }),
        __metadata("design:type", Array)
    ], HardwareInfo.prototype, "gpuShutdownTemperatures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gpuThrottlingTemperatures" }),
        __metadata("design:type", Array)
    ], HardwareInfo.prototype, "gpuThrottlingTemperatures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hardware" }),
        __metadata("design:type", String)
    ], HardwareInfo.prototype, "hardware", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manufacturer" }),
        __metadata("design:type", String)
    ], HardwareInfo.prototype, "manufacturer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=model" }),
        __metadata("design:type", String)
    ], HardwareInfo.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serialNumber" }),
        __metadata("design:type", String)
    ], HardwareInfo.prototype, "serialNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skinShutdownTemperatures" }),
        __metadata("design:type", Array)
    ], HardwareInfo.prototype, "skinShutdownTemperatures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skinThrottlingTemperatures" }),
        __metadata("design:type", Array)
    ], HardwareInfo.prototype, "skinThrottlingTemperatures", void 0);
    return HardwareInfo;
}(SpeakeasyBase));
export { HardwareInfo };
