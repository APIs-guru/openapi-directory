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
import { AwsEc2VpnConnectionOptionsDetails } from "./awsec2vpnconnectionoptionsdetails";
import { AwsEc2VpnConnectionRoutesDetails } from "./awsec2vpnconnectionroutesdetails";
import { AwsEc2VpnConnectionVgwTelemetryDetails } from "./awsec2vpnconnectionvgwtelemetrydetails";
// AwsEc2VpnConnectionDetails
/**
 * Details about an Amazon EC2 VPN connection.
**/
var AwsEc2VpnConnectionDetails = /** @class */ (function (_super) {
    __extends(AwsEc2VpnConnectionDetails, _super);
    function AwsEc2VpnConnectionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Category" }),
        __metadata("design:type", String)
    ], AwsEc2VpnConnectionDetails.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomerGatewayConfiguration" }),
        __metadata("design:type", String)
    ], AwsEc2VpnConnectionDetails.prototype, "customerGatewayConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomerGatewayId" }),
        __metadata("design:type", String)
    ], AwsEc2VpnConnectionDetails.prototype, "customerGatewayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Options" }),
        __metadata("design:type", AwsEc2VpnConnectionOptionsDetails)
    ], AwsEc2VpnConnectionDetails.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Routes", elemType: AwsEc2VpnConnectionRoutesDetails }),
        __metadata("design:type", Array)
    ], AwsEc2VpnConnectionDetails.prototype, "routes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], AwsEc2VpnConnectionDetails.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TransitGatewayId" }),
        __metadata("design:type", String)
    ], AwsEc2VpnConnectionDetails.prototype, "transitGatewayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], AwsEc2VpnConnectionDetails.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VgwTelemetry", elemType: AwsEc2VpnConnectionVgwTelemetryDetails }),
        __metadata("design:type", Array)
    ], AwsEc2VpnConnectionDetails.prototype, "vgwTelemetry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpnConnectionId" }),
        __metadata("design:type", String)
    ], AwsEc2VpnConnectionDetails.prototype, "vpnConnectionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpnGatewayId" }),
        __metadata("design:type", String)
    ], AwsEc2VpnConnectionDetails.prototype, "vpnGatewayId", void 0);
    return AwsEc2VpnConnectionDetails;
}(SpeakeasyBase));
export { AwsEc2VpnConnectionDetails };
