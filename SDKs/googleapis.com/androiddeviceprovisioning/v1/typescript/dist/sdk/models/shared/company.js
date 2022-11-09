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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var CompanyTermsStatusEnum;
(function (CompanyTermsStatusEnum) {
    CompanyTermsStatusEnum["TermsStatusUnspecified"] = "TERMS_STATUS_UNSPECIFIED";
    CompanyTermsStatusEnum["TermsStatusNotAccepted"] = "TERMS_STATUS_NOT_ACCEPTED";
    CompanyTermsStatusEnum["TermsStatusAccepted"] = "TERMS_STATUS_ACCEPTED";
    CompanyTermsStatusEnum["TermsStatusStale"] = "TERMS_STATUS_STALE";
})(CompanyTermsStatusEnum || (CompanyTermsStatusEnum = {}));
// Company
/**
 * A reseller, vendor, or customer in the zero-touch reseller and customer APIs.
**/
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=adminEmails" }),
        __metadata("design:type", Array)
    ], Company.prototype, "adminEmails", void 0);
    __decorate([
        Metadata({ data: "json, name=companyId" }),
        __metadata("design:type", String)
    ], Company.prototype, "companyId", void 0);
    __decorate([
        Metadata({ data: "json, name=companyName" }),
        __metadata("design:type", String)
    ], Company.prototype, "companyName", void 0);
    __decorate([
        Metadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], Company.prototype, "languageCode", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Company.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=ownerEmails" }),
        __metadata("design:type", Array)
    ], Company.prototype, "ownerEmails", void 0);
    __decorate([
        Metadata({ data: "json, name=skipWelcomeEmail" }),
        __metadata("design:type", Boolean)
    ], Company.prototype, "skipWelcomeEmail", void 0);
    __decorate([
        Metadata({ data: "json, name=termsStatus" }),
        __metadata("design:type", String)
    ], Company.prototype, "termsStatus", void 0);
    return Company;
}(SpeakeasyBase));
export { Company };
