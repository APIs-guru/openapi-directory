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
import { Capacity } from "./capacity";
import { UnlockStateEnum } from "./unlockstateenum";
import { PhysicalNetworkInterface } from "./physicalnetworkinterface";
import { SoftwareInformation } from "./softwareinformation";
var DescribeDeviceOutput = /** @class */ (function (_super) {
    __extends(DescribeDeviceOutput, _super);
    function DescribeDeviceOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=associatedWithJob" }),
        __metadata("design:type", String)
    ], DescribeDeviceOutput.prototype, "associatedWithJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceCapacities", elemType: Capacity }),
        __metadata("design:type", Array)
    ], DescribeDeviceOutput.prototype, "deviceCapacities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceState" }),
        __metadata("design:type", String)
    ], DescribeDeviceOutput.prototype, "deviceState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceType" }),
        __metadata("design:type", String)
    ], DescribeDeviceOutput.prototype, "deviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastReachedOutAt" }),
        __metadata("design:type", Date)
    ], DescribeDeviceOutput.prototype, "lastReachedOutAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" }),
        __metadata("design:type", Date)
    ], DescribeDeviceOutput.prototype, "lastUpdatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managedDeviceArn" }),
        __metadata("design:type", String)
    ], DescribeDeviceOutput.prototype, "managedDeviceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managedDeviceId" }),
        __metadata("design:type", String)
    ], DescribeDeviceOutput.prototype, "managedDeviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=physicalNetworkInterfaces", elemType: PhysicalNetworkInterface }),
        __metadata("design:type", Array)
    ], DescribeDeviceOutput.prototype, "physicalNetworkInterfaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=software" }),
        __metadata("design:type", SoftwareInformation)
    ], DescribeDeviceOutput.prototype, "software", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], DescribeDeviceOutput.prototype, "tags", void 0);
    return DescribeDeviceOutput;
}(SpeakeasyBase));
export { DescribeDeviceOutput };
