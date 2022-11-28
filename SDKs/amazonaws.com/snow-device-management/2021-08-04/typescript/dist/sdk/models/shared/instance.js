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
import { InstanceBlockDeviceMapping } from "./instanceblockdevicemapping";
import { CpuOptions } from "./cpuoptions";
import { SecurityGroupIdentifier } from "./securitygroupidentifier";
import { InstanceState } from "./instancestate";
// Instance
/**
 * The description of an instance. Currently, Amazon EC2 instances are the only supported instance type.
**/
var Instance = /** @class */ (function (_super) {
    __extends(Instance, _super);
    function Instance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amiLaunchIndex" }),
        __metadata("design:type", Number)
    ], Instance.prototype, "amiLaunchIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blockDeviceMappings", elemType: InstanceBlockDeviceMapping }),
        __metadata("design:type", Array)
    ], Instance.prototype, "blockDeviceMappings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpuOptions" }),
        __metadata("design:type", CpuOptions)
    ], Instance.prototype, "cpuOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], Instance.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageId" }),
        __metadata("design:type", String)
    ], Instance.prototype, "imageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceId" }),
        __metadata("design:type", String)
    ], Instance.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceType" }),
        __metadata("design:type", String)
    ], Instance.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateIpAddress" }),
        __metadata("design:type", String)
    ], Instance.prototype, "privateIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicIpAddress" }),
        __metadata("design:type", String)
    ], Instance.prototype, "publicIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rootDeviceName" }),
        __metadata("design:type", String)
    ], Instance.prototype, "rootDeviceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityGroups", elemType: SecurityGroupIdentifier }),
        __metadata("design:type", Array)
    ], Instance.prototype, "securityGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", InstanceState)
    ], Instance.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], Instance.prototype, "updatedAt", void 0);
    return Instance;
}(SpeakeasyBase));
export { Instance };
