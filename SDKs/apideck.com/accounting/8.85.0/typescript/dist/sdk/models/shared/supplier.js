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
import { LinkedLedgerAccount } from "./linkedledgeraccount";
import { Address } from "./address";
import { BankAccount } from "./bankaccount";
import { CurrencyEnum } from "./currencyenum";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
import { LinkedTaxRate } from "./linkedtaxrate";
import { Website } from "./website";
import { LinkedLedgerAccountInput } from "./linkedledgeraccount";
import { LinkedTaxRateInput } from "./linkedtaxrate";
export var SupplierStatusEnum;
(function (SupplierStatusEnum) {
    SupplierStatusEnum["Active"] = "active";
    SupplierStatusEnum["Inactive"] = "inactive";
    SupplierStatusEnum["Archived"] = "archived";
    SupplierStatusEnum["GdprErasureRequest"] = "gdpr-erasure-request";
    SupplierStatusEnum["Unknown"] = "unknown";
})(SupplierStatusEnum || (SupplierStatusEnum = {}));
var Supplier = /** @class */ (function (_super) {
    __extends(Supplier, _super);
    function Supplier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", LinkedLedgerAccount)
    ], Supplier.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address }),
        __metadata("design:type", Array)
    ], Supplier.prototype, "addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bank_accounts", elemType: BankAccount }),
        __metadata("design:type", Array)
    ], Supplier.prototype, "bankAccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_name" }),
        __metadata("design:type", String)
    ], Supplier.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Supplier.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], Supplier.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], Supplier.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], Supplier.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downstream_id" }),
        __metadata("design:type", String)
    ], Supplier.prototype, "downstreamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emails", elemType: Email }),
        __metadata("design:type", Array)
    ], Supplier.prototype, "emails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], Supplier.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Supplier.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], Supplier.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=middle_name" }),
        __metadata("design:type", String)
    ], Supplier.prototype, "middleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], Supplier.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber }),
        __metadata("design:type", Array)
    ], Supplier.prototype, "phoneNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_version" }),
        __metadata("design:type", String)
    ], Supplier.prototype, "rowVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Supplier.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suffix" }),
        __metadata("design:type", String)
    ], Supplier.prototype, "suffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_number" }),
        __metadata("design:type", String)
    ], Supplier.prototype, "taxNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_rate" }),
        __metadata("design:type", LinkedTaxRate)
    ], Supplier.prototype, "taxRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Supplier.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Supplier.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], Supplier.prototype, "updatedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=websites", elemType: Website }),
        __metadata("design:type", Array)
    ], Supplier.prototype, "websites", void 0);
    return Supplier;
}(SpeakeasyBase));
export { Supplier };
var SupplierInput = /** @class */ (function (_super) {
    __extends(SupplierInput, _super);
    function SupplierInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", LinkedLedgerAccountInput)
    ], SupplierInput.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address }),
        __metadata("design:type", Array)
    ], SupplierInput.prototype, "addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bank_accounts", elemType: BankAccount }),
        __metadata("design:type", Array)
    ], SupplierInput.prototype, "bankAccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_name" }),
        __metadata("design:type", String)
    ], SupplierInput.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], SupplierInput.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], SupplierInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emails", elemType: Email }),
        __metadata("design:type", Array)
    ], SupplierInput.prototype, "emails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], SupplierInput.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], SupplierInput.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=middle_name" }),
        __metadata("design:type", String)
    ], SupplierInput.prototype, "middleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], SupplierInput.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber }),
        __metadata("design:type", Array)
    ], SupplierInput.prototype, "phoneNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_version" }),
        __metadata("design:type", String)
    ], SupplierInput.prototype, "rowVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], SupplierInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suffix" }),
        __metadata("design:type", String)
    ], SupplierInput.prototype, "suffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_number" }),
        __metadata("design:type", String)
    ], SupplierInput.prototype, "taxNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_rate" }),
        __metadata("design:type", LinkedTaxRateInput)
    ], SupplierInput.prototype, "taxRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], SupplierInput.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=websites", elemType: Website }),
        __metadata("design:type", Array)
    ], SupplierInput.prototype, "websites", void 0);
    return SupplierInput;
}(SpeakeasyBase));
export { SupplierInput };
