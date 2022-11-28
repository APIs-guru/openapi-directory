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
import { DomainValidationRecord } from "./domainvalidationrecord";
import { RenewalSummary } from "./renewalsummary";
import { CertificateStatusEnum } from "./certificatestatusenum";
import { Tag } from "./tag";
// Certificate
/**
 * <p>Describes the full details of an Amazon Lightsail SSL/TLS certificate.</p> <note> <p>To get a summary of a certificate, use the <code>GetCertificates</code> action and ommit <code>includeCertificateDetails</code> from your request. The response will include only the certificate Amazon Resource Name (ARN), certificate name, domain name, and tags.</p> </note>
**/
var Certificate = /** @class */ (function (_super) {
    __extends(Certificate, _super);
    function Certificate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], Certificate.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainName" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainValidationRecords", elemType: DomainValidationRecord }),
        __metadata("design:type", Array)
    ], Certificate.prototype, "domainValidationRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eligibleToRenew" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "eligibleToRenew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inUseResourceCount" }),
        __metadata("design:type", Number)
    ], Certificate.prototype, "inUseResourceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issuedAt" }),
        __metadata("design:type", Date)
    ], Certificate.prototype, "issuedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issuerCA" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "issuerCa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyAlgorithm" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "keyAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notAfter" }),
        __metadata("design:type", Date)
    ], Certificate.prototype, "notAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notBefore" }),
        __metadata("design:type", Date)
    ], Certificate.prototype, "notBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=renewalSummary" }),
        __metadata("design:type", RenewalSummary)
    ], Certificate.prototype, "renewalSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestFailureReason" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "requestFailureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revocationReason" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "revocationReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revokedAt" }),
        __metadata("design:type", Date)
    ], Certificate.prototype, "revokedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serialNumber" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "serialNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subjectAlternativeNames" }),
        __metadata("design:type", Array)
    ], Certificate.prototype, "subjectAlternativeNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportCode" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "supportCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], Certificate.prototype, "tags", void 0);
    return Certificate;
}(SpeakeasyBase));
export { Certificate };
