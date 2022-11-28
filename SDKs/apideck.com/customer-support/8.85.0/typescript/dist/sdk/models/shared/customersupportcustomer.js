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
export var CustomerSupportCustomerStatusEnum;
(function (CustomerSupportCustomerStatusEnum) {
    CustomerSupportCustomerStatusEnum["Active"] = "active";
    CustomerSupportCustomerStatusEnum["Archived"] = "archived";
    CustomerSupportCustomerStatusEnum["GdprErasureRequest"] = "gdpr-erasure-request";
    CustomerSupportCustomerStatusEnum["Unknown"] = "unknown";
})(CustomerSupportCustomerStatusEnum || (CustomerSupportCustomerStatusEnum = {}));
var CustomerSupportCustomerInput = /** @class */ (function (_super) {
    __extends(CustomerSupportCustomerInput, _super);
    function CustomerSupportCustomerInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address }),
        __metadata("design:type", Array)
    ], CustomerSupportCustomerInput.prototype, "addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bank_accounts" }),
        __metadata("design:type", BankAccount)
    ], CustomerSupportCustomerInput.prototype, "bankAccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_name" }),
        __metadata("design:type", String)
    ], CustomerSupportCustomerInput.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], CustomerSupportCustomerInput.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emails", elemType: Email }),
        __metadata("design:type", Array)
    ], CustomerSupportCustomerInput.prototype, "emails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], CustomerSupportCustomerInput.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individual" }),
        __metadata("design:type", Boolean)
    ], CustomerSupportCustomerInput.prototype, "individual", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], CustomerSupportCustomerInput.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], CustomerSupportCustomerInput.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber }),
        __metadata("design:type", Array)
    ], CustomerSupportCustomerInput.prototype, "phoneNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], CustomerSupportCustomerInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_number" }),
        __metadata("design:type", String)
    ], CustomerSupportCustomerInput.prototype, "taxNumber", void 0);
    return CustomerSupportCustomerInput;
}(SpeakeasyBase));
export { CustomerSupportCustomerInput };
var CustomerSupportCustomer = /** @class */ (function (_super) {
    __extends(CustomerSupportCustomer, _super);
    function CustomerSupportCustomer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address }),
        __metadata("design:type", Array)
    ], CustomerSupportCustomer.prototype, "addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bank_accounts" }),
        __metadata("design:type", BankAccount)
    ], CustomerSupportCustomer.prototype, "bankAccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_name" }),
        __metadata("design:type", String)
    ], CustomerSupportCustomer.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], CustomerSupportCustomer.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], CustomerSupportCustomer.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], CustomerSupportCustomer.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emails", elemType: Email }),
        __metadata("design:type", Array)
    ], CustomerSupportCustomer.prototype, "emails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], CustomerSupportCustomer.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CustomerSupportCustomer.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=individual" }),
        __metadata("design:type", Boolean)
    ], CustomerSupportCustomer.prototype, "individual", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], CustomerSupportCustomer.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], CustomerSupportCustomer.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber }),
        __metadata("design:type", Array)
    ], CustomerSupportCustomer.prototype, "phoneNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], CustomerSupportCustomer.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_number" }),
        __metadata("design:type", String)
    ], CustomerSupportCustomer.prototype, "taxNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], CustomerSupportCustomer.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], CustomerSupportCustomer.prototype, "updatedBy", void 0);
    return CustomerSupportCustomer;
}(SpeakeasyBase));
export { CustomerSupportCustomer };
