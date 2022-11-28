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
import { AvailabilityZone } from "./availabilityzone";
import { LoadBalancerState } from "./loadbalancerstate";
// AwsElbv2LoadBalancerDetails
/**
 * Information about a load balancer.
**/
var AwsElbv2LoadBalancerDetails = /** @class */ (function (_super) {
    __extends(AwsElbv2LoadBalancerDetails, _super);
    function AwsElbv2LoadBalancerDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AvailabilityZones", elemType: AvailabilityZone }),
        __metadata("design:type", Array)
    ], AwsElbv2LoadBalancerDetails.prototype, "availabilityZones", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CanonicalHostedZoneId" }),
        __metadata("design:type", String)
    ], AwsElbv2LoadBalancerDetails.prototype, "canonicalHostedZoneId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedTime" }),
        __metadata("design:type", String)
    ], AwsElbv2LoadBalancerDetails.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DNSName" }),
        __metadata("design:type", String)
    ], AwsElbv2LoadBalancerDetails.prototype, "dnsName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IpAddressType" }),
        __metadata("design:type", String)
    ], AwsElbv2LoadBalancerDetails.prototype, "ipAddressType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Scheme" }),
        __metadata("design:type", String)
    ], AwsElbv2LoadBalancerDetails.prototype, "scheme", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityGroups" }),
        __metadata("design:type", Array)
    ], AwsElbv2LoadBalancerDetails.prototype, "securityGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", LoadBalancerState)
    ], AwsElbv2LoadBalancerDetails.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], AwsElbv2LoadBalancerDetails.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcId" }),
        __metadata("design:type", String)
    ], AwsElbv2LoadBalancerDetails.prototype, "vpcId", void 0);
    return AwsElbv2LoadBalancerDetails;
}(SpeakeasyBase));
export { AwsElbv2LoadBalancerDetails };
