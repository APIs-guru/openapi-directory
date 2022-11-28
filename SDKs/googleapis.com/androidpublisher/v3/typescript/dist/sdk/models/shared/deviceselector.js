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
import { DeviceRam } from "./deviceram";
import { DeviceId } from "./deviceid";
import { SystemFeature } from "./systemfeature";
// DeviceSelector
/**
 * Selector for a device group. A selector consists of a set of conditions on the device that should all match (logical AND) to determine a device group eligibility. For instance, if a selector specifies RAM conditions, device model inclusion and device model exclusion, a device is considered to match if: device matches RAM conditions AND device matches one of the included device models AND device doesn't match excluded device models
**/
var DeviceSelector = /** @class */ (function (_super) {
    __extends(DeviceSelector, _super);
    function DeviceSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceRam" }),
        __metadata("design:type", DeviceRam)
    ], DeviceSelector.prototype, "deviceRam", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludedDeviceIds", elemType: DeviceId }),
        __metadata("design:type", Array)
    ], DeviceSelector.prototype, "excludedDeviceIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forbiddenSystemFeatures", elemType: SystemFeature }),
        __metadata("design:type", Array)
    ], DeviceSelector.prototype, "forbiddenSystemFeatures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includedDeviceIds", elemType: DeviceId }),
        __metadata("design:type", Array)
    ], DeviceSelector.prototype, "includedDeviceIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requiredSystemFeatures", elemType: SystemFeature }),
        __metadata("design:type", Array)
    ], DeviceSelector.prototype, "requiredSystemFeatures", void 0);
    return DeviceSelector;
}(SpeakeasyBase));
export { DeviceSelector };
