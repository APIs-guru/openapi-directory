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
import { InstanceHealthSummary } from "./instancehealthsummary";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { ResourceLocation } from "./resourcelocation";
import { LoadBalancerProtocolEnum } from "./loadbalancerprotocolenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { LoadBalancerStateEnum } from "./loadbalancerstateenum";
import { Tag } from "./tag";
import { LoadBalancerTlsCertificateSummary } from "./loadbalancertlscertificatesummary";
// LoadBalancer
/**
 * Describes a load balancer.
**/
var LoadBalancer = /** @class */ (function (_super) {
    __extends(LoadBalancer, _super);
    function LoadBalancer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], LoadBalancer.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configurationOptions" }),
        __metadata("design:type", Map)
    ], LoadBalancer.prototype, "configurationOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], LoadBalancer.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dnsName" }),
        __metadata("design:type", String)
    ], LoadBalancer.prototype, "dnsName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=healthCheckPath" }),
        __metadata("design:type", String)
    ], LoadBalancer.prototype, "healthCheckPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceHealthSummary", elemType: InstanceHealthSummary }),
        __metadata("design:type", Array)
    ], LoadBalancer.prototype, "instanceHealthSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instancePort" }),
        __metadata("design:type", Number)
    ], LoadBalancer.prototype, "instancePort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipAddressType" }),
        __metadata("design:type", String)
    ], LoadBalancer.prototype, "ipAddressType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", ResourceLocation)
    ], LoadBalancer.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], LoadBalancer.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], LoadBalancer.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicPorts" }),
        __metadata("design:type", Array)
    ], LoadBalancer.prototype, "publicPorts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceType" }),
        __metadata("design:type", String)
    ], LoadBalancer.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], LoadBalancer.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportCode" }),
        __metadata("design:type", String)
    ], LoadBalancer.prototype, "supportCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], LoadBalancer.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tlsCertificateSummaries", elemType: LoadBalancerTlsCertificateSummary }),
        __metadata("design:type", Array)
    ], LoadBalancer.prototype, "tlsCertificateSummaries", void 0);
    return LoadBalancer;
}(SpeakeasyBase));
export { LoadBalancer };
