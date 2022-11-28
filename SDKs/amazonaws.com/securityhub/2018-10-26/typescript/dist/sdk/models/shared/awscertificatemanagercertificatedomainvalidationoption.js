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
import { AwsCertificateManagerCertificateResourceRecord } from "./awscertificatemanagercertificateresourcerecord";
// AwsCertificateManagerCertificateDomainValidationOption
/**
 * <p>Contains information about one of the following:</p> <ul> <li> <p>The initial validation of each domain name that occurs as a result of the <code>RequestCertificate</code> request</p> </li> <li> <p>The validation of each domain name in the certificate, as it pertains to Certificate Manager managed renewal</p> </li> </ul>
**/
var AwsCertificateManagerCertificateDomainValidationOption = /** @class */ (function (_super) {
    __extends(AwsCertificateManagerCertificateDomainValidationOption, _super);
    function AwsCertificateManagerCertificateDomainValidationOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DomainName" }),
        __metadata("design:type", String)
    ], AwsCertificateManagerCertificateDomainValidationOption.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceRecord" }),
        __metadata("design:type", AwsCertificateManagerCertificateResourceRecord)
    ], AwsCertificateManagerCertificateDomainValidationOption.prototype, "resourceRecord", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValidationDomain" }),
        __metadata("design:type", String)
    ], AwsCertificateManagerCertificateDomainValidationOption.prototype, "validationDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValidationEmails" }),
        __metadata("design:type", Array)
    ], AwsCertificateManagerCertificateDomainValidationOption.prototype, "validationEmails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValidationMethod" }),
        __metadata("design:type", String)
    ], AwsCertificateManagerCertificateDomainValidationOption.prototype, "validationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValidationStatus" }),
        __metadata("design:type", String)
    ], AwsCertificateManagerCertificateDomainValidationOption.prototype, "validationStatus", void 0);
    return AwsCertificateManagerCertificateDomainValidationOption;
}(SpeakeasyBase));
export { AwsCertificateManagerCertificateDomainValidationOption };
