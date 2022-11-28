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
import { DeviceGroup } from "./devicegroup";
import { DeviceTierSet } from "./devicetierset";
// DeviceTierConfig
/**
 * LINT.IfChange Configuration describing device targeting criteria for the content of an app.
**/
var DeviceTierConfig = /** @class */ (function (_super) {
    __extends(DeviceTierConfig, _super);
    function DeviceTierConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceGroups", elemType: DeviceGroup }),
        __metadata("design:type", Array)
    ], DeviceTierConfig.prototype, "deviceGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceTierConfigId" }),
        __metadata("design:type", String)
    ], DeviceTierConfig.prototype, "deviceTierConfigId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceTierSet" }),
        __metadata("design:type", DeviceTierSet)
    ], DeviceTierConfig.prototype, "deviceTierSet", void 0);
    return DeviceTierConfig;
}(SpeakeasyBase));
export { DeviceTierConfig };
// DeviceTierConfigInput
/**
 * LINT.IfChange Configuration describing device targeting criteria for the content of an app.
**/
var DeviceTierConfigInput = /** @class */ (function (_super) {
    __extends(DeviceTierConfigInput, _super);
    function DeviceTierConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceGroups", elemType: DeviceGroup }),
        __metadata("design:type", Array)
    ], DeviceTierConfigInput.prototype, "deviceGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceTierSet" }),
        __metadata("design:type", DeviceTierSet)
    ], DeviceTierConfigInput.prototype, "deviceTierSet", void 0);
    return DeviceTierConfigInput;
}(SpeakeasyBase));
export { DeviceTierConfigInput };
