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
import { CertificateRawData } from "./certificaterawdata";
import { ManagedCertificate } from "./managedcertificate";
// AuthorizedCertificate
/**
 * An SSL certificate that a user has been authorized to administer. A user is authorized to administer any certificate that applies to one of their authorized domains.
**/
var AuthorizedCertificate = /** @class */ (function (_super) {
    __extends(AuthorizedCertificate, _super);
    function AuthorizedCertificate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateRawData" }),
        __metadata("design:type", CertificateRawData)
    ], AuthorizedCertificate.prototype, "certificateRawData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], AuthorizedCertificate.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainMappingsCount" }),
        __metadata("design:type", Number)
    ], AuthorizedCertificate.prototype, "domainMappingsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainNames" }),
        __metadata("design:type", Array)
    ], AuthorizedCertificate.prototype, "domainNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], AuthorizedCertificate.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AuthorizedCertificate.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managedCertificate" }),
        __metadata("design:type", ManagedCertificate)
    ], AuthorizedCertificate.prototype, "managedCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AuthorizedCertificate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibleDomainMappings" }),
        __metadata("design:type", Array)
    ], AuthorizedCertificate.prototype, "visibleDomainMappings", void 0);
    return AuthorizedCertificate;
}(SpeakeasyBase));
export { AuthorizedCertificate };
