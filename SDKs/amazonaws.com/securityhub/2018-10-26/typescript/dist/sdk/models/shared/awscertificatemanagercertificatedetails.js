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
import { AwsCertificateManagerCertificateDomainValidationOption } from "./awscertificatemanagercertificatedomainvalidationoption";
import { AwsCertificateManagerCertificateExtendedKeyUsage } from "./awscertificatemanagercertificateextendedkeyusage";
import { AwsCertificateManagerCertificateKeyUsage } from "./awscertificatemanagercertificatekeyusage";
import { AwsCertificateManagerCertificateOptions } from "./awscertificatemanagercertificateoptions";
import { AwsCertificateManagerCertificateRenewalSummary } from "./awscertificatemanagercertificaterenewalsummary";
// AwsCertificateManagerCertificateDetails
/**
 * Provides details about an Certificate Manager certificate.
**/
var AwsCertificateManagerCertificateDetails = /** @class */ (function (_super) {
    __extends(AwsCertificateManagerCertificateDetails, _super);
    function AwsCertificateManagerCertificateDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CertificateAuthorityArn" }),
        __metadata("design:type", String)
    ], AwsCertificateManagerCertificateDetails.prototype, "certificateAuthorityArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedAt" }),
        __metadata("design:type", String)
    ], AwsCertificateManagerCertificateDetails.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DomainName" }),
        __metadata("design:type", String)
    ], AwsCertificateManagerCertificateDetails.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DomainValidationOptions", elemType: AwsCertificateManagerCertificateDomainValidationOption }),
        __metadata("design:type", Array)
    ], AwsCertificateManagerCertificateDetails.prototype, "domainValidationOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExtendedKeyUsages", elemType: AwsCertificateManagerCertificateExtendedKeyUsage }),
        __metadata("design:type", Array)
    ], AwsCertificateManagerCertificateDetails.prototype, "extendedKeyUsages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureReason" }),
        __metadata("design:type", String)
    ], AwsCertificateManagerCertificateDetails.prototype, "failureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImportedAt" }),
        __metadata("design:type", String)
    ], AwsCertificateManagerCertificateDetails.prototype, "importedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InUseBy" }),
        __metadata("design:type", Array)
    ], AwsCertificateManagerCertificateDetails.prototype, "inUseBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IssuedAt" }),
        __metadata("design:type", String)
    ], AwsCertificateManagerCertificateDetails.prototype, "issuedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Issuer" }),
        __metadata("design:type", String)
    ], AwsCertificateManagerCertificateDetails.prototype, "issuer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeyAlgorithm" }),
        __metadata("design:type", String)
    ], AwsCertificateManagerCertificateDetails.prototype, "keyAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeyUsages", elemType: AwsCertificateManagerCertificateKeyUsage }),
        __metadata("design:type", Array)
    ], AwsCertificateManagerCertificateDetails.prototype, "keyUsages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotAfter" }),
        __metadata("design:type", String)
    ], AwsCertificateManagerCertificateDetails.prototype, "notAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotBefore" }),
        __metadata("design:type", String)
    ], AwsCertificateManagerCertificateDetails.prototype, "notBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Options" }),
        __metadata("design:type", AwsCertificateManagerCertificateOptions)
    ], AwsCertificateManagerCertificateDetails.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RenewalEligibility" }),
        __metadata("design:type", String)
    ], AwsCertificateManagerCertificateDetails.prototype, "renewalEligibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RenewalSummary" }),
        __metadata("design:type", AwsCertificateManagerCertificateRenewalSummary)
    ], AwsCertificateManagerCertificateDetails.prototype, "renewalSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Serial" }),
        __metadata("design:type", String)
    ], AwsCertificateManagerCertificateDetails.prototype, "serial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SignatureAlgorithm" }),
        __metadata("design:type", String)
    ], AwsCertificateManagerCertificateDetails.prototype, "signatureAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], AwsCertificateManagerCertificateDetails.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Subject" }),
        __metadata("design:type", String)
    ], AwsCertificateManagerCertificateDetails.prototype, "subject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubjectAlternativeNames" }),
        __metadata("design:type", Array)
    ], AwsCertificateManagerCertificateDetails.prototype, "subjectAlternativeNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], AwsCertificateManagerCertificateDetails.prototype, "type", void 0);
    return AwsCertificateManagerCertificateDetails;
}(SpeakeasyBase));
export { AwsCertificateManagerCertificateDetails };
