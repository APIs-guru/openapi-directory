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
// AwsEc2VpnConnectionVgwTelemetryDetails
/**
 * Information about the VPN tunnel.
**/
var AwsEc2VpnConnectionVgwTelemetryDetails = /** @class */ (function (_super) {
    __extends(AwsEc2VpnConnectionVgwTelemetryDetails, _super);
    function AwsEc2VpnConnectionVgwTelemetryDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AcceptedRouteCount" }),
        __metadata("design:type", Number)
    ], AwsEc2VpnConnectionVgwTelemetryDetails.prototype, "acceptedRouteCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CertificateArn" }),
        __metadata("design:type", String)
    ], AwsEc2VpnConnectionVgwTelemetryDetails.prototype, "certificateArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastStatusChange" }),
        __metadata("design:type", String)
    ], AwsEc2VpnConnectionVgwTelemetryDetails.prototype, "lastStatusChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutsideIpAddress" }),
        __metadata("design:type", String)
    ], AwsEc2VpnConnectionVgwTelemetryDetails.prototype, "outsideIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], AwsEc2VpnConnectionVgwTelemetryDetails.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusMessage" }),
        __metadata("design:type", String)
    ], AwsEc2VpnConnectionVgwTelemetryDetails.prototype, "statusMessage", void 0);
    return AwsEc2VpnConnectionVgwTelemetryDetails;
}(SpeakeasyBase));
export { AwsEc2VpnConnectionVgwTelemetryDetails };
