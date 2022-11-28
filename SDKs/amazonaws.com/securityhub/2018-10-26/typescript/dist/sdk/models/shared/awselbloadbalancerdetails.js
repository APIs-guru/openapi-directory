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
import { AwsElbLoadBalancerBackendServerDescription } from "./awselbloadbalancerbackendserverdescription";
import { AwsElbLoadBalancerHealthCheck } from "./awselbloadbalancerhealthcheck";
import { AwsElbLoadBalancerInstance } from "./awselbloadbalancerinstance";
import { AwsElbLoadBalancerListenerDescription } from "./awselbloadbalancerlistenerdescription";
import { AwsElbLoadBalancerAttributes } from "./awselbloadbalancerattributes";
import { AwsElbLoadBalancerPolicies } from "./awselbloadbalancerpolicies";
import { AwsElbLoadBalancerSourceSecurityGroup } from "./awselbloadbalancersourcesecuritygroup";
// AwsElbLoadBalancerDetails
/**
 * Contains details about a Classic Load Balancer.
**/
var AwsElbLoadBalancerDetails = /** @class */ (function (_super) {
    __extends(AwsElbLoadBalancerDetails, _super);
    function AwsElbLoadBalancerDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AvailabilityZones" }),
        __metadata("design:type", Array)
    ], AwsElbLoadBalancerDetails.prototype, "availabilityZones", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BackendServerDescriptions", elemType: AwsElbLoadBalancerBackendServerDescription }),
        __metadata("design:type", Array)
    ], AwsElbLoadBalancerDetails.prototype, "backendServerDescriptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CanonicalHostedZoneName" }),
        __metadata("design:type", String)
    ], AwsElbLoadBalancerDetails.prototype, "canonicalHostedZoneName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CanonicalHostedZoneNameID" }),
        __metadata("design:type", String)
    ], AwsElbLoadBalancerDetails.prototype, "canonicalHostedZoneNameId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedTime" }),
        __metadata("design:type", String)
    ], AwsElbLoadBalancerDetails.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DnsName" }),
        __metadata("design:type", String)
    ], AwsElbLoadBalancerDetails.prototype, "dnsName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HealthCheck" }),
        __metadata("design:type", AwsElbLoadBalancerHealthCheck)
    ], AwsElbLoadBalancerDetails.prototype, "healthCheck", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Instances", elemType: AwsElbLoadBalancerInstance }),
        __metadata("design:type", Array)
    ], AwsElbLoadBalancerDetails.prototype, "instances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ListenerDescriptions", elemType: AwsElbLoadBalancerListenerDescription }),
        __metadata("design:type", Array)
    ], AwsElbLoadBalancerDetails.prototype, "listenerDescriptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoadBalancerAttributes" }),
        __metadata("design:type", AwsElbLoadBalancerAttributes)
    ], AwsElbLoadBalancerDetails.prototype, "loadBalancerAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoadBalancerName" }),
        __metadata("design:type", String)
    ], AwsElbLoadBalancerDetails.prototype, "loadBalancerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Policies" }),
        __metadata("design:type", AwsElbLoadBalancerPolicies)
    ], AwsElbLoadBalancerDetails.prototype, "policies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Scheme" }),
        __metadata("design:type", String)
    ], AwsElbLoadBalancerDetails.prototype, "scheme", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityGroups" }),
        __metadata("design:type", Array)
    ], AwsElbLoadBalancerDetails.prototype, "securityGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceSecurityGroup" }),
        __metadata("design:type", AwsElbLoadBalancerSourceSecurityGroup)
    ], AwsElbLoadBalancerDetails.prototype, "sourceSecurityGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Subnets" }),
        __metadata("design:type", Array)
    ], AwsElbLoadBalancerDetails.prototype, "subnets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcId" }),
        __metadata("design:type", String)
    ], AwsElbLoadBalancerDetails.prototype, "vpcId", void 0);
    return AwsElbLoadBalancerDetails;
}(SpeakeasyBase));
export { AwsElbLoadBalancerDetails };
