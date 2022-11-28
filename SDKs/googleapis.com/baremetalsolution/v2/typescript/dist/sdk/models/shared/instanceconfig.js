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
import { NetworkAddress } from "./networkaddress";
import { GoogleCloudBaremetalsolutionV2LogicalInterface } from "./googlecloudbaremetalsolutionv2logicalinterface";
export var InstanceConfigNetworkConfigEnum;
(function (InstanceConfigNetworkConfigEnum) {
    InstanceConfigNetworkConfigEnum["NetworkconfigUnspecified"] = "NETWORKCONFIG_UNSPECIFIED";
    InstanceConfigNetworkConfigEnum["SingleVlan"] = "SINGLE_VLAN";
    InstanceConfigNetworkConfigEnum["MultiVlan"] = "MULTI_VLAN";
})(InstanceConfigNetworkConfigEnum || (InstanceConfigNetworkConfigEnum = {}));
// InstanceConfigInput
/**
 * Configuration parameters for a new instance.
**/
var InstanceConfigInput = /** @class */ (function (_super) {
    __extends(InstanceConfigInput, _super);
    function InstanceConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountNetworksEnabled" }),
        __metadata("design:type", Boolean)
    ], InstanceConfigInput.prototype, "accountNetworksEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientNetwork" }),
        __metadata("design:type", NetworkAddress)
    ], InstanceConfigInput.prototype, "clientNetwork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hyperthreading" }),
        __metadata("design:type", Boolean)
    ], InstanceConfigInput.prototype, "hyperthreading", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], InstanceConfigInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceType" }),
        __metadata("design:type", String)
    ], InstanceConfigInput.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logicalInterfaces", elemType: GoogleCloudBaremetalsolutionV2LogicalInterface }),
        __metadata("design:type", Array)
    ], InstanceConfigInput.prototype, "logicalInterfaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkConfig" }),
        __metadata("design:type", String)
    ], InstanceConfigInput.prototype, "networkConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkTemplate" }),
        __metadata("design:type", String)
    ], InstanceConfigInput.prototype, "networkTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=osImage" }),
        __metadata("design:type", String)
    ], InstanceConfigInput.prototype, "osImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateNetwork" }),
        __metadata("design:type", NetworkAddress)
    ], InstanceConfigInput.prototype, "privateNetwork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userNote" }),
        __metadata("design:type", String)
    ], InstanceConfigInput.prototype, "userNote", void 0);
    return InstanceConfigInput;
}(SpeakeasyBase));
export { InstanceConfigInput };
// InstanceConfig
/**
 * Configuration parameters for a new instance.
**/
var InstanceConfig = /** @class */ (function (_super) {
    __extends(InstanceConfig, _super);
    function InstanceConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountNetworksEnabled" }),
        __metadata("design:type", Boolean)
    ], InstanceConfig.prototype, "accountNetworksEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientNetwork" }),
        __metadata("design:type", NetworkAddress)
    ], InstanceConfig.prototype, "clientNetwork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hyperthreading" }),
        __metadata("design:type", Boolean)
    ], InstanceConfig.prototype, "hyperthreading", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], InstanceConfig.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceType" }),
        __metadata("design:type", String)
    ], InstanceConfig.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logicalInterfaces", elemType: GoogleCloudBaremetalsolutionV2LogicalInterface }),
        __metadata("design:type", Array)
    ], InstanceConfig.prototype, "logicalInterfaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], InstanceConfig.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkConfig" }),
        __metadata("design:type", String)
    ], InstanceConfig.prototype, "networkConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkTemplate" }),
        __metadata("design:type", String)
    ], InstanceConfig.prototype, "networkTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=osImage" }),
        __metadata("design:type", String)
    ], InstanceConfig.prototype, "osImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateNetwork" }),
        __metadata("design:type", NetworkAddress)
    ], InstanceConfig.prototype, "privateNetwork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userNote" }),
        __metadata("design:type", String)
    ], InstanceConfig.prototype, "userNote", void 0);
    return InstanceConfig;
}(SpeakeasyBase));
export { InstanceConfig };
