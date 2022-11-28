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
import { LoadBalancerTlsCertificateDomainValidationRecord } from "./loadbalancertlscertificatedomainvalidationrecord";
import { LoadBalancerTlsCertificateFailureReasonEnum } from "./loadbalancertlscertificatefailurereasonenum";
import { ResourceLocation } from "./resourcelocation";
import { LoadBalancerTlsCertificateRenewalSummary } from "./loadbalancertlscertificaterenewalsummary";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { LoadBalancerTlsCertificateRevocationReasonEnum } from "./loadbalancertlscertificaterevocationreasonenum";
import { LoadBalancerTlsCertificateStatusEnum } from "./loadbalancertlscertificatestatusenum";
import { Tag } from "./tag";
// LoadBalancerTlsCertificate
/**
 * <p>Describes a load balancer SSL/TLS certificate.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p>
**/
var LoadBalancerTlsCertificate = /** @class */ (function (_super) {
    __extends(LoadBalancerTlsCertificate, _super);
    function LoadBalancerTlsCertificate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], LoadBalancerTlsCertificate.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], LoadBalancerTlsCertificate.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainName" }),
        __metadata("design:type", String)
    ], LoadBalancerTlsCertificate.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainValidationRecords", elemType: LoadBalancerTlsCertificateDomainValidationRecord }),
        __metadata("design:type", Array)
    ], LoadBalancerTlsCertificate.prototype, "domainValidationRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failureReason" }),
        __metadata("design:type", String)
    ], LoadBalancerTlsCertificate.prototype, "failureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isAttached" }),
        __metadata("design:type", Boolean)
    ], LoadBalancerTlsCertificate.prototype, "isAttached", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issuedAt" }),
        __metadata("design:type", Date)
    ], LoadBalancerTlsCertificate.prototype, "issuedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issuer" }),
        __metadata("design:type", String)
    ], LoadBalancerTlsCertificate.prototype, "issuer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyAlgorithm" }),
        __metadata("design:type", String)
    ], LoadBalancerTlsCertificate.prototype, "keyAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loadBalancerName" }),
        __metadata("design:type", String)
    ], LoadBalancerTlsCertificate.prototype, "loadBalancerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", ResourceLocation)
    ], LoadBalancerTlsCertificate.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], LoadBalancerTlsCertificate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notAfter" }),
        __metadata("design:type", Date)
    ], LoadBalancerTlsCertificate.prototype, "notAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notBefore" }),
        __metadata("design:type", Date)
    ], LoadBalancerTlsCertificate.prototype, "notBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=renewalSummary" }),
        __metadata("design:type", LoadBalancerTlsCertificateRenewalSummary)
    ], LoadBalancerTlsCertificate.prototype, "renewalSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceType" }),
        __metadata("design:type", String)
    ], LoadBalancerTlsCertificate.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revocationReason" }),
        __metadata("design:type", String)
    ], LoadBalancerTlsCertificate.prototype, "revocationReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revokedAt" }),
        __metadata("design:type", Date)
    ], LoadBalancerTlsCertificate.prototype, "revokedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serial" }),
        __metadata("design:type", String)
    ], LoadBalancerTlsCertificate.prototype, "serial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signatureAlgorithm" }),
        __metadata("design:type", String)
    ], LoadBalancerTlsCertificate.prototype, "signatureAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], LoadBalancerTlsCertificate.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subject" }),
        __metadata("design:type", String)
    ], LoadBalancerTlsCertificate.prototype, "subject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subjectAlternativeNames" }),
        __metadata("design:type", Array)
    ], LoadBalancerTlsCertificate.prototype, "subjectAlternativeNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportCode" }),
        __metadata("design:type", String)
    ], LoadBalancerTlsCertificate.prototype, "supportCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], LoadBalancerTlsCertificate.prototype, "tags", void 0);
    return LoadBalancerTlsCertificate;
}(SpeakeasyBase));
export { LoadBalancerTlsCertificate };
