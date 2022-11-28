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
import { CustomField } from "./customfield";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
import { SocialLink } from "./sociallink";
import { Website } from "./website";
var Lead = /** @class */ (function (_super) {
    __extends(Lead, _super);
    function Lead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address }),
        __metadata("design:type", Array)
    ], Lead.prototype, "addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_id" }),
        __metadata("design:type", String)
    ], Lead.prototype, "companyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_name" }),
        __metadata("design:type", String)
    ], Lead.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contact_id" }),
        __metadata("design:type", String)
    ], Lead.prototype, "contactId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], Lead.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], Lead.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_fields", elemType: CustomField }),
        __metadata("design:type", Array)
    ], Lead.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Lead.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emails", elemType: Email }),
        __metadata("design:type", Array)
    ], Lead.prototype, "emails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fax" }),
        __metadata("design:type", String)
    ], Lead.prototype, "fax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], Lead.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Lead.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], Lead.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], Lead.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lead_source" }),
        __metadata("design:type", String)
    ], Lead.prototype, "leadSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monetary_amount" }),
        __metadata("design:type", Number)
    ], Lead.prototype, "monetaryAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Lead.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner_id" }),
        __metadata("design:type", String)
    ], Lead.prototype, "ownerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber }),
        __metadata("design:type", Array)
    ], Lead.prototype, "phoneNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prefix" }),
        __metadata("design:type", String)
    ], Lead.prototype, "prefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=social_links", elemType: SocialLink }),
        __metadata("design:type", Array)
    ], Lead.prototype, "socialLinks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Lead.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], Lead.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Lead.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], Lead.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=websites", elemType: Website }),
        __metadata("design:type", Array)
    ], Lead.prototype, "websites", void 0);
    return Lead;
}(SpeakeasyBase));
export { Lead };
var LeadInput = /** @class */ (function (_super) {
    __extends(LeadInput, _super);
    function LeadInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address }),
        __metadata("design:type", Array)
    ], LeadInput.prototype, "addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_id" }),
        __metadata("design:type", String)
    ], LeadInput.prototype, "companyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_name" }),
        __metadata("design:type", String)
    ], LeadInput.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contact_id" }),
        __metadata("design:type", String)
    ], LeadInput.prototype, "contactId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], LeadInput.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_fields", elemType: CustomField }),
        __metadata("design:type", Array)
    ], LeadInput.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], LeadInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emails", elemType: Email }),
        __metadata("design:type", Array)
    ], LeadInput.prototype, "emails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fax" }),
        __metadata("design:type", String)
    ], LeadInput.prototype, "fax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], LeadInput.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], LeadInput.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], LeadInput.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lead_source" }),
        __metadata("design:type", String)
    ], LeadInput.prototype, "leadSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monetary_amount" }),
        __metadata("design:type", Number)
    ], LeadInput.prototype, "monetaryAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], LeadInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner_id" }),
        __metadata("design:type", String)
    ], LeadInput.prototype, "ownerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber }),
        __metadata("design:type", Array)
    ], LeadInput.prototype, "phoneNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prefix" }),
        __metadata("design:type", String)
    ], LeadInput.prototype, "prefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=social_links", elemType: SocialLink }),
        __metadata("design:type", Array)
    ], LeadInput.prototype, "socialLinks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], LeadInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], LeadInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], LeadInput.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=websites", elemType: Website }),
        __metadata("design:type", Array)
    ], LeadInput.prototype, "websites", void 0);
    return LeadInput;
}(SpeakeasyBase));
export { LeadInput };
