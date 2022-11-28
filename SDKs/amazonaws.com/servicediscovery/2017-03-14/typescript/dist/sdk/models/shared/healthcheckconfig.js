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
import { HealthCheckTypeEnum } from "./healthchecktypeenum";
// HealthCheckConfig
/**
 * <p> <i>Public DNS and HTTP namespaces only.</i> A complex type that contains settings for an optional health check. If you specify settings for a health check, Cloud Map associates the health check with the records that you specify in <code>DnsConfig</code>.</p> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>Health checks are basic Route 53 health checks that monitor an Amazon Web Services endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> <p>Note the following about configuring health checks.</p> <dl> <dt>A and AAAA records</dt> <dd> <p>If <code>DnsConfig</code> includes configurations for both <code>A</code> and <code>AAAA</code> records, Cloud Map creates a health check that uses the IPv4 address to check the health of the resource. If the endpoint tthat's specified by the IPv4 address is unhealthy, Route 53 considers both the <code>A</code> and <code>AAAA</code> records to be unhealthy. </p> </dd> <dt>CNAME records</dt> <dd> <p>You can't specify settings for <code>HealthCheckConfig</code> when the <code>DNSConfig</code> includes <code>CNAME</code> for the value of <code>Type</code>. If you do, the <code>CreateService</code> request will fail with an <code>InvalidInput</code> error.</p> </dd> <dt>Request interval</dt> <dd> <p>A Route 53 health checker in each health-checking Amazon Web Services Region sends a health check request to an endpoint every 30 seconds. On average, your endpoint receives a health check request about every two seconds. However, health checkers don't coordinate with one another. Therefore, you might sometimes see several requests in one second that's followed by a few seconds with no health checks at all.</p> </dd> <dt>Health checking regions</dt> <dd> <p>Health checkers perform checks from all Route 53 health-checking Regions. For a list of the current Regions, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-Regions">Regions</a>.</p> </dd> <dt>Alias records</dt> <dd> <p>When you register an instance, if you include the <code>AWS_ALIAS_DNS_NAME</code> attribute, Cloud Map creates a Route 53 alias record. Note the following:</p> <ul> <li> <p>Route 53 automatically sets <code>EvaluateTargetHealth</code> to true for alias records. When <code>EvaluateTargetHealth</code> is true, the alias record inherits the health of the referenced Amazon Web Services resource. such as an ELB load balancer. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html#Route53-Type-AliasTarget-EvaluateTargetHealth">EvaluateTargetHealth</a>.</p> </li> <li> <p>If you include <code>HealthCheckConfig</code> and then use the service to register an instance that creates an alias record, Route 53 doesn't create the health check.</p> </li> </ul> </dd> <dt>Charges for health checks</dt> <dd> <p>Health checks are basic Route 53 health checks that monitor an Amazon Web Services endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> </dd> </dl>
**/
var HealthCheckConfig = /** @class */ (function (_super) {
    __extends(HealthCheckConfig, _super);
    function HealthCheckConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureThreshold" }),
        __metadata("design:type", Number)
    ], HealthCheckConfig.prototype, "failureThreshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourcePath" }),
        __metadata("design:type", String)
    ], HealthCheckConfig.prototype, "resourcePath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], HealthCheckConfig.prototype, "type", void 0);
    return HealthCheckConfig;
}(SpeakeasyBase));
export { HealthCheckConfig };
