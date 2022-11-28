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
import { Address } from "./address";
import { CurrencyEnum } from "./currencyenum";
import { LinkedTaxRate } from "./linkedtaxrate";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
export var CompanyInfoTheStartMonthOfFiscalYearEnum;
(function (CompanyInfoTheStartMonthOfFiscalYearEnum) {
    CompanyInfoTheStartMonthOfFiscalYearEnum["January"] = "January";
    CompanyInfoTheStartMonthOfFiscalYearEnum["February"] = "February";
    CompanyInfoTheStartMonthOfFiscalYearEnum["March"] = "March";
    CompanyInfoTheStartMonthOfFiscalYearEnum["April"] = "April";
    CompanyInfoTheStartMonthOfFiscalYearEnum["May"] = "May";
    CompanyInfoTheStartMonthOfFiscalYearEnum["June"] = "June";
    CompanyInfoTheStartMonthOfFiscalYearEnum["July"] = "July";
    CompanyInfoTheStartMonthOfFiscalYearEnum["August"] = "August";
    CompanyInfoTheStartMonthOfFiscalYearEnum["September"] = "September";
    CompanyInfoTheStartMonthOfFiscalYearEnum["October"] = "October";
    CompanyInfoTheStartMonthOfFiscalYearEnum["November"] = "November";
    CompanyInfoTheStartMonthOfFiscalYearEnum["December"] = "December";
})(CompanyInfoTheStartMonthOfFiscalYearEnum || (CompanyInfoTheStartMonthOfFiscalYearEnum = {}));
export var CompanyInfoCompanyStatusEnum;
(function (CompanyInfoCompanyStatusEnum) {
    CompanyInfoCompanyStatusEnum["Active"] = "active";
    CompanyInfoCompanyStatusEnum["Inactive"] = "inactive";
})(CompanyInfoCompanyStatusEnum || (CompanyInfoCompanyStatusEnum = {}));
var CompanyInfo = /** @class */ (function (_super) {
    __extends(CompanyInfo, _super);
    function CompanyInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address }),
        __metadata("design:type", Array)
    ], CompanyInfo.prototype, "addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=automated_sales_tax" }),
        __metadata("design:type", Boolean)
    ], CompanyInfo.prototype, "automatedSalesTax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_name" }),
        __metadata("design:type", String)
    ], CompanyInfo.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_start_date" }),
        __metadata("design:type", Date)
    ], CompanyInfo.prototype, "companyStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], CompanyInfo.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], CompanyInfo.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], CompanyInfo.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], CompanyInfo.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_sales_tax" }),
        __metadata("design:type", LinkedTaxRate)
    ], CompanyInfo.prototype, "defaultSalesTax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emails", elemType: Email }),
        __metadata("design:type", Array)
    ], CompanyInfo.prototype, "emails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fiscal_year_start_month" }),
        __metadata("design:type", String)
    ], CompanyInfo.prototype, "fiscalYearStartMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CompanyInfo.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], CompanyInfo.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legal_name" }),
        __metadata("design:type", String)
    ], CompanyInfo.prototype, "legalName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber }),
        __metadata("design:type", Array)
    ], CompanyInfo.prototype, "phoneNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_version" }),
        __metadata("design:type", String)
    ], CompanyInfo.prototype, "rowVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sales_tax_enabled" }),
        __metadata("design:type", Boolean)
    ], CompanyInfo.prototype, "salesTaxEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sales_tax_number" }),
        __metadata("design:type", String)
    ], CompanyInfo.prototype, "salesTaxNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], CompanyInfo.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], CompanyInfo.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], CompanyInfo.prototype, "updatedBy", void 0);
    return CompanyInfo;
}(SpeakeasyBase));
export { CompanyInfo };
