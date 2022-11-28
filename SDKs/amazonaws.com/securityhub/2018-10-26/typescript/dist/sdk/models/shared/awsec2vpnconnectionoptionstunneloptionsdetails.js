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
// AwsEc2VpnConnectionOptionsTunnelOptionsDetails
/**
 * The VPN tunnel options.
**/
var AwsEc2VpnConnectionOptionsTunnelOptionsDetails = /** @class */ (function (_super) {
    __extends(AwsEc2VpnConnectionOptionsTunnelOptionsDetails, _super);
    function AwsEc2VpnConnectionOptionsTunnelOptionsDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DpdTimeoutSeconds" }),
        __metadata("design:type", Number)
    ], AwsEc2VpnConnectionOptionsTunnelOptionsDetails.prototype, "dpdTimeoutSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IkeVersions" }),
        __metadata("design:type", Array)
    ], AwsEc2VpnConnectionOptionsTunnelOptionsDetails.prototype, "ikeVersions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutsideIpAddress" }),
        __metadata("design:type", String)
    ], AwsEc2VpnConnectionOptionsTunnelOptionsDetails.prototype, "outsideIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Phase1DhGroupNumbers" }),
        __metadata("design:type", Array)
    ], AwsEc2VpnConnectionOptionsTunnelOptionsDetails.prototype, "phase1DhGroupNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Phase1EncryptionAlgorithms" }),
        __metadata("design:type", Array)
    ], AwsEc2VpnConnectionOptionsTunnelOptionsDetails.prototype, "phase1EncryptionAlgorithms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Phase1IntegrityAlgorithms" }),
        __metadata("design:type", Array)
    ], AwsEc2VpnConnectionOptionsTunnelOptionsDetails.prototype, "phase1IntegrityAlgorithms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Phase1LifetimeSeconds" }),
        __metadata("design:type", Number)
    ], AwsEc2VpnConnectionOptionsTunnelOptionsDetails.prototype, "phase1LifetimeSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Phase2DhGroupNumbers" }),
        __metadata("design:type", Array)
    ], AwsEc2VpnConnectionOptionsTunnelOptionsDetails.prototype, "phase2DhGroupNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Phase2EncryptionAlgorithms" }),
        __metadata("design:type", Array)
    ], AwsEc2VpnConnectionOptionsTunnelOptionsDetails.prototype, "phase2EncryptionAlgorithms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Phase2IntegrityAlgorithms" }),
        __metadata("design:type", Array)
    ], AwsEc2VpnConnectionOptionsTunnelOptionsDetails.prototype, "phase2IntegrityAlgorithms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Phase2LifetimeSeconds" }),
        __metadata("design:type", Number)
    ], AwsEc2VpnConnectionOptionsTunnelOptionsDetails.prototype, "phase2LifetimeSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreSharedKey" }),
        __metadata("design:type", String)
    ], AwsEc2VpnConnectionOptionsTunnelOptionsDetails.prototype, "preSharedKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RekeyFuzzPercentage" }),
        __metadata("design:type", Number)
    ], AwsEc2VpnConnectionOptionsTunnelOptionsDetails.prototype, "rekeyFuzzPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RekeyMarginTimeSeconds" }),
        __metadata("design:type", Number)
    ], AwsEc2VpnConnectionOptionsTunnelOptionsDetails.prototype, "rekeyMarginTimeSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplayWindowSize" }),
        __metadata("design:type", Number)
    ], AwsEc2VpnConnectionOptionsTunnelOptionsDetails.prototype, "replayWindowSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TunnelInsideCidr" }),
        __metadata("design:type", String)
    ], AwsEc2VpnConnectionOptionsTunnelOptionsDetails.prototype, "tunnelInsideCidr", void 0);
    return AwsEc2VpnConnectionOptionsTunnelOptionsDetails;
}(SpeakeasyBase));
export { AwsEc2VpnConnectionOptionsTunnelOptionsDetails };
