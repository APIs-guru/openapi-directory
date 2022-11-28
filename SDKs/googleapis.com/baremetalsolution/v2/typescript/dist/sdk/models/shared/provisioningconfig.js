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
import { InstanceConfig } from "./instanceconfig";
import { NetworkConfig } from "./networkconfig";
import { VolumeConfig } from "./volumeconfig";
import { InstanceConfigInput } from "./instanceconfig";
import { NetworkConfigInput } from "./networkconfig";
import { VolumeConfigInput } from "./volumeconfig";
export var ProvisioningConfigStateEnum;
(function (ProvisioningConfigStateEnum) {
    ProvisioningConfigStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    ProvisioningConfigStateEnum["Draft"] = "DRAFT";
    ProvisioningConfigStateEnum["Submitted"] = "SUBMITTED";
    ProvisioningConfigStateEnum["Provisioning"] = "PROVISIONING";
    ProvisioningConfigStateEnum["Provisioned"] = "PROVISIONED";
    ProvisioningConfigStateEnum["Validated"] = "VALIDATED";
    ProvisioningConfigStateEnum["Cancelled"] = "CANCELLED";
    ProvisioningConfigStateEnum["Failed"] = "FAILED";
})(ProvisioningConfigStateEnum || (ProvisioningConfigStateEnum = {}));
// ProvisioningConfig
/**
 * A provisioning configuration.
**/
var ProvisioningConfig = /** @class */ (function (_super) {
    __extends(ProvisioningConfig, _super);
    function ProvisioningConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudConsoleUri" }),
        __metadata("design:type", String)
    ], ProvisioningConfig.prototype, "cloudConsoleUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customId" }),
        __metadata("design:type", String)
    ], ProvisioningConfig.prototype, "customId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ProvisioningConfig.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=handoverServiceAccount" }),
        __metadata("design:type", String)
    ], ProvisioningConfig.prototype, "handoverServiceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instances", elemType: InstanceConfig }),
        __metadata("design:type", Array)
    ], ProvisioningConfig.prototype, "instances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], ProvisioningConfig.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProvisioningConfig.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networks", elemType: NetworkConfig }),
        __metadata("design:type", Array)
    ], ProvisioningConfig.prototype, "networks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ProvisioningConfig.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusMessage" }),
        __metadata("design:type", String)
    ], ProvisioningConfig.prototype, "statusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ticketId" }),
        __metadata("design:type", String)
    ], ProvisioningConfig.prototype, "ticketId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], ProvisioningConfig.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumes", elemType: VolumeConfig }),
        __metadata("design:type", Array)
    ], ProvisioningConfig.prototype, "volumes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpcScEnabled" }),
        __metadata("design:type", Boolean)
    ], ProvisioningConfig.prototype, "vpcScEnabled", void 0);
    return ProvisioningConfig;
}(SpeakeasyBase));
export { ProvisioningConfig };
// ProvisioningConfigInput
/**
 * A provisioning configuration.
**/
var ProvisioningConfigInput = /** @class */ (function (_super) {
    __extends(ProvisioningConfigInput, _super);
    function ProvisioningConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customId" }),
        __metadata("design:type", String)
    ], ProvisioningConfigInput.prototype, "customId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ProvisioningConfigInput.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=handoverServiceAccount" }),
        __metadata("design:type", String)
    ], ProvisioningConfigInput.prototype, "handoverServiceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instances", elemType: InstanceConfigInput }),
        __metadata("design:type", Array)
    ], ProvisioningConfigInput.prototype, "instances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], ProvisioningConfigInput.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networks", elemType: NetworkConfigInput }),
        __metadata("design:type", Array)
    ], ProvisioningConfigInput.prototype, "networks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusMessage" }),
        __metadata("design:type", String)
    ], ProvisioningConfigInput.prototype, "statusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ticketId" }),
        __metadata("design:type", String)
    ], ProvisioningConfigInput.prototype, "ticketId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumes", elemType: VolumeConfigInput }),
        __metadata("design:type", Array)
    ], ProvisioningConfigInput.prototype, "volumes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpcScEnabled" }),
        __metadata("design:type", Boolean)
    ], ProvisioningConfigInput.prototype, "vpcScEnabled", void 0);
    return ProvisioningConfigInput;
}(SpeakeasyBase));
export { ProvisioningConfigInput };
