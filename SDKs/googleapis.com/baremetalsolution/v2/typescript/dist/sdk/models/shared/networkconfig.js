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
import { IntakeVlanAttachment } from "./intakevlanattachment";
export var NetworkConfigBandwidthEnum;
(function (NetworkConfigBandwidthEnum) {
    NetworkConfigBandwidthEnum["BandwidthUnspecified"] = "BANDWIDTH_UNSPECIFIED";
    NetworkConfigBandwidthEnum["Bw1Gbps"] = "BW_1_GBPS";
    NetworkConfigBandwidthEnum["Bw2Gbps"] = "BW_2_GBPS";
    NetworkConfigBandwidthEnum["Bw5Gbps"] = "BW_5_GBPS";
    NetworkConfigBandwidthEnum["Bw10Gbps"] = "BW_10_GBPS";
})(NetworkConfigBandwidthEnum || (NetworkConfigBandwidthEnum = {}));
export var NetworkConfigServiceCidrEnum;
(function (NetworkConfigServiceCidrEnum) {
    NetworkConfigServiceCidrEnum["ServiceCidrUnspecified"] = "SERVICE_CIDR_UNSPECIFIED";
    NetworkConfigServiceCidrEnum["Disabled"] = "DISABLED";
    NetworkConfigServiceCidrEnum["High26"] = "HIGH_26";
    NetworkConfigServiceCidrEnum["High27"] = "HIGH_27";
    NetworkConfigServiceCidrEnum["High28"] = "HIGH_28";
})(NetworkConfigServiceCidrEnum || (NetworkConfigServiceCidrEnum = {}));
export var NetworkConfigTypeEnum;
(function (NetworkConfigTypeEnum) {
    NetworkConfigTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    NetworkConfigTypeEnum["Client"] = "CLIENT";
    NetworkConfigTypeEnum["Private"] = "PRIVATE";
})(NetworkConfigTypeEnum || (NetworkConfigTypeEnum = {}));
// NetworkConfigInput
/**
 * Configuration parameters for a new network.
**/
var NetworkConfigInput = /** @class */ (function (_super) {
    __extends(NetworkConfigInput, _super);
    function NetworkConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bandwidth" }),
        __metadata("design:type", String)
    ], NetworkConfigInput.prototype, "bandwidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cidr" }),
        __metadata("design:type", String)
    ], NetworkConfigInput.prototype, "cidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gcpService" }),
        __metadata("design:type", String)
    ], NetworkConfigInput.prototype, "gcpService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], NetworkConfigInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jumboFramesEnabled" }),
        __metadata("design:type", Boolean)
    ], NetworkConfigInput.prototype, "jumboFramesEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceCidr" }),
        __metadata("design:type", String)
    ], NetworkConfigInput.prototype, "serviceCidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], NetworkConfigInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userNote" }),
        __metadata("design:type", String)
    ], NetworkConfigInput.prototype, "userNote", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vlanAttachments", elemType: IntakeVlanAttachment }),
        __metadata("design:type", Array)
    ], NetworkConfigInput.prototype, "vlanAttachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vlanSameProject" }),
        __metadata("design:type", Boolean)
    ], NetworkConfigInput.prototype, "vlanSameProject", void 0);
    return NetworkConfigInput;
}(SpeakeasyBase));
export { NetworkConfigInput };
// NetworkConfig
/**
 * Configuration parameters for a new network.
**/
var NetworkConfig = /** @class */ (function (_super) {
    __extends(NetworkConfig, _super);
    function NetworkConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bandwidth" }),
        __metadata("design:type", String)
    ], NetworkConfig.prototype, "bandwidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cidr" }),
        __metadata("design:type", String)
    ], NetworkConfig.prototype, "cidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gcpService" }),
        __metadata("design:type", String)
    ], NetworkConfig.prototype, "gcpService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], NetworkConfig.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jumboFramesEnabled" }),
        __metadata("design:type", Boolean)
    ], NetworkConfig.prototype, "jumboFramesEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NetworkConfig.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceCidr" }),
        __metadata("design:type", String)
    ], NetworkConfig.prototype, "serviceCidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], NetworkConfig.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userNote" }),
        __metadata("design:type", String)
    ], NetworkConfig.prototype, "userNote", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vlanAttachments", elemType: IntakeVlanAttachment }),
        __metadata("design:type", Array)
    ], NetworkConfig.prototype, "vlanAttachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vlanSameProject" }),
        __metadata("design:type", Boolean)
    ], NetworkConfig.prototype, "vlanSameProject", void 0);
    return NetworkConfig;
}(SpeakeasyBase));
export { NetworkConfig };
