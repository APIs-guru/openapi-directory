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
import { ContactDetail } from "./contactdetail";
import { Nameserver } from "./nameserver";
// TransferDomainRequest
/**
 * The TransferDomain request includes the following elements.
**/
var TransferDomainRequest = /** @class */ (function (_super) {
    __extends(TransferDomainRequest, _super);
    function TransferDomainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdminContact" }),
        __metadata("design:type", ContactDetail)
    ], TransferDomainRequest.prototype, "adminContact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthCode" }),
        __metadata("design:type", String)
    ], TransferDomainRequest.prototype, "authCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoRenew" }),
        __metadata("design:type", Boolean)
    ], TransferDomainRequest.prototype, "autoRenew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DomainName" }),
        __metadata("design:type", String)
    ], TransferDomainRequest.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DurationInYears" }),
        __metadata("design:type", Number)
    ], TransferDomainRequest.prototype, "durationInYears", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IdnLangCode" }),
        __metadata("design:type", String)
    ], TransferDomainRequest.prototype, "idnLangCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Nameservers", elemType: Nameserver }),
        __metadata("design:type", Array)
    ], TransferDomainRequest.prototype, "nameservers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrivacyProtectAdminContact" }),
        __metadata("design:type", Boolean)
    ], TransferDomainRequest.prototype, "privacyProtectAdminContact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrivacyProtectRegistrantContact" }),
        __metadata("design:type", Boolean)
    ], TransferDomainRequest.prototype, "privacyProtectRegistrantContact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrivacyProtectTechContact" }),
        __metadata("design:type", Boolean)
    ], TransferDomainRequest.prototype, "privacyProtectTechContact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RegistrantContact" }),
        __metadata("design:type", ContactDetail)
    ], TransferDomainRequest.prototype, "registrantContact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TechContact" }),
        __metadata("design:type", ContactDetail)
    ], TransferDomainRequest.prototype, "techContact", void 0);
    return TransferDomainRequest;
}(SpeakeasyBase));
export { TransferDomainRequest };
