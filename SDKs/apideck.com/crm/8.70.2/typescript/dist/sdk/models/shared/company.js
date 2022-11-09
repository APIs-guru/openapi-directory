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
import * as shared from "../shared";
import { CurrencyEnum } from "./currencyenum";
var CompanyCompanyRowType = /** @class */ (function (_super) {
    __extends(CompanyCompanyRowType, _super);
    function CompanyCompanyRowType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CompanyCompanyRowType.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CompanyCompanyRowType.prototype, "name", void 0);
    return CompanyCompanyRowType;
}(SpeakeasyBase));
export { CompanyCompanyRowType };
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=abn_branch" }),
        __metadata("design:type", String)
    ], Company.prototype, "abnBranch", void 0);
    __decorate([
        Metadata({ data: "json, name=abn_or_tfn" }),
        __metadata("design:type", String)
    ], Company.prototype, "abnOrTfn", void 0);
    __decorate([
        Metadata({ data: "json, name=acn" }),
        __metadata("design:type", String)
    ], Company.prototype, "acn", void 0);
    __decorate([
        Metadata({ data: "json, name=addresses", elemType: shared.Address }),
        __metadata("design:type", Array)
    ], Company.prototype, "addresses", void 0);
    __decorate([
        Metadata({ data: "json, name=annual_revenue" }),
        __metadata("design:type", String)
    ], Company.prototype, "annualRevenue", void 0);
    __decorate([
        Metadata({ data: "json, name=bank_accounts", elemType: shared.BankAccount }),
        __metadata("design:type", Array)
    ], Company.prototype, "bankAccounts", void 0);
    __decorate([
        Metadata({ data: "json, name=birthday" }),
        __metadata("design:type", Date)
    ], Company.prototype, "birthday", void 0);
    __decorate([
        Metadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Company.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], Company.prototype, "createdBy", void 0);
    __decorate([
        Metadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], Company.prototype, "currency", void 0);
    __decorate([
        Metadata({ data: "json, name=custom_fields", elemType: shared.CustomField }),
        __metadata("design:type", Array)
    ], Company.prototype, "customFields", void 0);
    __decorate([
        Metadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], Company.prototype, "deleted", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Company.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=emails", elemType: shared.Email }),
        __metadata("design:type", Array)
    ], Company.prototype, "emails", void 0);
    __decorate([
        Metadata({ data: "json, name=fax" }),
        __metadata("design:type", String)
    ], Company.prototype, "fax", void 0);
    __decorate([
        Metadata({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], Company.prototype, "firstName", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Company.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=image" }),
        __metadata("design:type", String)
    ], Company.prototype, "image", void 0);
    __decorate([
        Metadata({ data: "json, name=industry" }),
        __metadata("design:type", String)
    ], Company.prototype, "industry", void 0);
    __decorate([
        Metadata({ data: "json, name=interaction_count" }),
        __metadata("design:type", Number)
    ], Company.prototype, "interactionCount", void 0);
    __decorate([
        Metadata({ data: "json, name=last_activity_at" }),
        __metadata("design:type", Date)
    ], Company.prototype, "lastActivityAt", void 0);
    __decorate([
        Metadata({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], Company.prototype, "lastName", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Company.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=number_of_employees" }),
        __metadata("design:type", String)
    ], Company.prototype, "numberOfEmployees", void 0);
    __decorate([
        Metadata({ data: "json, name=owner_id" }),
        __metadata("design:type", String)
    ], Company.prototype, "ownerId", void 0);
    __decorate([
        Metadata({ data: "json, name=ownership" }),
        __metadata("design:type", String)
    ], Company.prototype, "ownership", void 0);
    __decorate([
        Metadata({ data: "json, name=parent_id" }),
        __metadata("design:type", String)
    ], Company.prototype, "parentId", void 0);
    __decorate([
        Metadata({ data: "json, name=payee_number" }),
        __metadata("design:type", String)
    ], Company.prototype, "payeeNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=phone_numbers", elemType: shared.PhoneNumber }),
        __metadata("design:type", Array)
    ], Company.prototype, "phoneNumbers", void 0);
    __decorate([
        Metadata({ data: "json, name=read_only" }),
        __metadata("design:type", Boolean)
    ], Company.prototype, "readOnly", void 0);
    __decorate([
        Metadata({ data: "json, name=row_type" }),
        __metadata("design:type", CompanyCompanyRowType)
    ], Company.prototype, "rowType", void 0);
    __decorate([
        Metadata({ data: "json, name=sales_tax_number" }),
        __metadata("design:type", String)
    ], Company.prototype, "salesTaxNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=salutation" }),
        __metadata("design:type", String)
    ], Company.prototype, "salutation", void 0);
    __decorate([
        Metadata({ data: "json, name=social_links", elemType: shared.SocialLink }),
        __metadata("design:type", Array)
    ], Company.prototype, "socialLinks", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Company.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], Company.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Company.prototype, "updatedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], Company.prototype, "updatedBy", void 0);
    __decorate([
        Metadata({ data: "json, name=vat_number" }),
        __metadata("design:type", String)
    ], Company.prototype, "vatNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=websites", elemType: shared.Website }),
        __metadata("design:type", Array)
    ], Company.prototype, "websites", void 0);
    return Company;
}(SpeakeasyBase));
export { Company };
