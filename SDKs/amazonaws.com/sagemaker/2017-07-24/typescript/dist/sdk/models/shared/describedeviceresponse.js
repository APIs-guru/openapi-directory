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
import { EdgeModel } from "./edgemodel";
var DescribeDeviceResponse = /** @class */ (function (_super) {
    __extends(DescribeDeviceResponse, _super);
    function DescribeDeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], DescribeDeviceResponse.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeviceArn" }),
        __metadata("design:type", String)
    ], DescribeDeviceResponse.prototype, "deviceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeviceFleetName" }),
        __metadata("design:type", String)
    ], DescribeDeviceResponse.prototype, "deviceFleetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeviceName" }),
        __metadata("design:type", String)
    ], DescribeDeviceResponse.prototype, "deviceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IotThingName" }),
        __metadata("design:type", String)
    ], DescribeDeviceResponse.prototype, "iotThingName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LatestHeartbeat" }),
        __metadata("design:type", Date)
    ], DescribeDeviceResponse.prototype, "latestHeartbeat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxModels" }),
        __metadata("design:type", Number)
    ], DescribeDeviceResponse.prototype, "maxModels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Models", elemType: EdgeModel }),
        __metadata("design:type", Array)
    ], DescribeDeviceResponse.prototype, "models", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeDeviceResponse.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RegistrationTime" }),
        __metadata("design:type", Date)
    ], DescribeDeviceResponse.prototype, "registrationTime", void 0);
    return DescribeDeviceResponse;
}(SpeakeasyBase));
export { DescribeDeviceResponse };
