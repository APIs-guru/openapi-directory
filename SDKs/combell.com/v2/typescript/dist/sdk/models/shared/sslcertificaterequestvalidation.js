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
import { SslCertificateRequestValidationTypeEnum } from "./sslcertificaterequestvalidationtypeenum";
var SslCertificateRequestValidation = /** @class */ (function (_super) {
    __extends(SslCertificateRequestValidation, _super);
    function SslCertificateRequestValidation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auto_validated" }),
        __metadata("design:type", Boolean)
    ], SslCertificateRequestValidation.prototype, "autoValidated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cname_validation_content" }),
        __metadata("design:type", String)
    ], SslCertificateRequestValidation.prototype, "cnameValidationContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cname_validation_name" }),
        __metadata("design:type", String)
    ], SslCertificateRequestValidation.prototype, "cnameValidationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_name" }),
        __metadata("design:type", String)
    ], SslCertificateRequestValidation.prototype, "dnsName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email_addresses" }),
        __metadata("design:type", Array)
    ], SslCertificateRequestValidation.prototype, "emailAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=file_validation_content" }),
        __metadata("design:type", Array)
    ], SslCertificateRequestValidation.prototype, "fileValidationContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=file_validation_url_http" }),
        __metadata("design:type", String)
    ], SslCertificateRequestValidation.prototype, "fileValidationUrlHttp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=file_validation_url_https" }),
        __metadata("design:type", String)
    ], SslCertificateRequestValidation.prototype, "fileValidationUrlHttps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], SslCertificateRequestValidation.prototype, "type", void 0);
    return SslCertificateRequestValidation;
}(SpeakeasyBase));
export { SslCertificateRequestValidation };
