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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceStatusEnum } from "./devicestatusenum";
var DescribeDeviceResponse = /** @class */ (function (_super) {
    __extends(DescribeDeviceResponse, _super);
    function DescribeDeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=FirstAccessedTime" }),
        __metadata("design:type", Date)
    ], DescribeDeviceResponse.prototype, "firstAccessedTime", void 0);
    __decorate([
        Metadata({ data: "json, name=LastAccessedTime" }),
        __metadata("design:type", Date)
    ], DescribeDeviceResponse.prototype, "lastAccessedTime", void 0);
    __decorate([
        Metadata({ data: "json, name=Manufacturer" }),
        __metadata("design:type", String)
    ], DescribeDeviceResponse.prototype, "manufacturer", void 0);
    __decorate([
        Metadata({ data: "json, name=Model" }),
        __metadata("design:type", String)
    ], DescribeDeviceResponse.prototype, "model", void 0);
    __decorate([
        Metadata({ data: "json, name=OperatingSystem" }),
        __metadata("design:type", String)
    ], DescribeDeviceResponse.prototype, "operatingSystem", void 0);
    __decorate([
        Metadata({ data: "json, name=OperatingSystemVersion" }),
        __metadata("design:type", String)
    ], DescribeDeviceResponse.prototype, "operatingSystemVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=PatchLevel" }),
        __metadata("design:type", String)
    ], DescribeDeviceResponse.prototype, "patchLevel", void 0);
    __decorate([
        Metadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], DescribeDeviceResponse.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=Username" }),
        __metadata("design:type", String)
    ], DescribeDeviceResponse.prototype, "username", void 0);
    return DescribeDeviceResponse;
}(SpeakeasyBase));
export { DescribeDeviceResponse };
