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
import { BankAccount } from "./bankaccount";
import { CurrencyEnum } from "./currencyenum";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
import { LinkedTaxRateInput } from "./linkedtaxrate";
import { Website } from "./website";
import { LinkedTaxRate } from "./linkedtaxrate";
export var AccountingCustomerStatusEnum;
(function (AccountingCustomerStatusEnum) {
    AccountingCustomerStatusEnum["Active"] = "active";
    AccountingCustomerStatusEnum["Inactive"] = "inactive";
    AccountingCustomerStatusEnum["Archived"] = "archived";
    AccountingCustomerStatusEnum["GdprErasureRequest"] = "gdpr-erasure-request";
    AccountingCustomerStatusEnum["Unknown"] = "unknown";
})(AccountingCustomerStatusEnum || (AccountingCustomerStatusEnum = {}));
var AccountingCustomerInput = /** @class */ (function (_super) {
    __extends(AccountingCustomerInput, _super);
    function AccountingCustomerInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address }),
        __metadata("design:type", Array)
    ], AccountingCustomerInput.prototype, "addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bank_accounts", elemType: BankAccount }),
        __metadata("design:type", Array)
    ], AccountingCustomerInput.prototype, "bankAccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_name" }),
        __metadata("design:type", String)
    ], AccountingCustomerInput.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], AccountingCustomerInput.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_id" }),
        __metadata("design:type", String)
    ], AccountingCustomerInput.prototype, "displayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], AccountingCustomerInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emails", elemType: Email }),
        __metadata("design:type", Array)
    ], AccountingCustomerInput.prototype, "emails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], AccountingCustomerInput.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individual" }),
        __metadata("design:type", Boolean)
    ], AccountingCustomerInput.prototype, "individual", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], AccountingCustomerInput.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=middle_name" }),
        __metadata("design:type", String)
    ], AccountingCustomerInput.prototype, "middleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], AccountingCustomerInput.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber }),
        __metadata("design:type", Array)
    ], AccountingCustomerInput.prototype, "phoneNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_version" }),
        __metadata("design:type", String)
    ], AccountingCustomerInput.prototype, "rowVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AccountingCustomerInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suffix" }),
        __metadata("design:type", String)
    ], AccountingCustomerInput.prototype, "suffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_number" }),
        __metadata("design:type", String)
    ], AccountingCustomerInput.prototype, "taxNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_rate" }),
        __metadata("design:type", LinkedTaxRateInput)
    ], AccountingCustomerInput.prototype, "taxRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], AccountingCustomerInput.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=websites", elemType: Website }),
        __metadata("design:type", Array)
    ], AccountingCustomerInput.prototype, "websites", void 0);
    return AccountingCustomerInput;
}(SpeakeasyBase));
export { AccountingCustomerInput };
var AccountingCustomer = /** @class */ (function (_super) {
    __extends(AccountingCustomer, _super);
    function AccountingCustomer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address }),
        __metadata("design:type", Array)
    ], AccountingCustomer.prototype, "addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bank_accounts", elemType: BankAccount }),
        __metadata("design:type", Array)
    ], AccountingCustomer.prototype, "bankAccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_name" }),
        __metadata("design:type", String)
    ], AccountingCustomer.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], AccountingCustomer.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], AccountingCustomer.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], AccountingCustomer.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_id" }),
        __metadata("design:type", String)
    ], AccountingCustomer.prototype, "displayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], AccountingCustomer.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emails", elemType: Email }),
        __metadata("design:type", Array)
    ], AccountingCustomer.prototype, "emails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], AccountingCustomer.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AccountingCustomer.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individual" }),
        __metadata("design:type", Boolean)
    ], AccountingCustomer.prototype, "individual", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], AccountingCustomer.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=middle_name" }),
        __metadata("design:type", String)
    ], AccountingCustomer.prototype, "middleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], AccountingCustomer.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber }),
        __metadata("design:type", Array)
    ], AccountingCustomer.prototype, "phoneNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_version" }),
        __metadata("design:type", String)
    ], AccountingCustomer.prototype, "rowVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AccountingCustomer.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suffix" }),
        __metadata("design:type", String)
    ], AccountingCustomer.prototype, "suffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_number" }),
        __metadata("design:type", String)
    ], AccountingCustomer.prototype, "taxNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_rate" }),
        __metadata("design:type", LinkedTaxRate)
    ], AccountingCustomer.prototype, "taxRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], AccountingCustomer.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], AccountingCustomer.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], AccountingCustomer.prototype, "updatedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=websites", elemType: Website }),
        __metadata("design:type", Array)
    ], AccountingCustomer.prototype, "websites", void 0);
    return AccountingCustomer;
}(SpeakeasyBase));
export { AccountingCustomer };
