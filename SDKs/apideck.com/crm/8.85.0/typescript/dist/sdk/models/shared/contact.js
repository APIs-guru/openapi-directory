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
import { CustomField } from "./customfield";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
import { SocialLink } from "./sociallink";
import { Website } from "./website";
export var ContactGenderEnum;
(function (ContactGenderEnum) {
    ContactGenderEnum["Male"] = "male";
    ContactGenderEnum["Female"] = "female";
    ContactGenderEnum["Unisex"] = "unisex";
})(ContactGenderEnum || (ContactGenderEnum = {}));
export var ContactTypeEnum;
(function (ContactTypeEnum) {
    ContactTypeEnum["Customer"] = "customer";
    ContactTypeEnum["Supplier"] = "supplier";
    ContactTypeEnum["Employee"] = "employee";
    ContactTypeEnum["Personal"] = "personal";
})(ContactTypeEnum || (ContactTypeEnum = {}));
var Contact = /** @class */ (function (_super) {
    __extends(Contact, _super);
    function Contact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], Contact.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address }),
        __metadata("design:type", Array)
    ], Contact.prototype, "addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=birthday" }),
        __metadata("design:type", String)
    ], Contact.prototype, "birthday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_id" }),
        __metadata("design:type", String)
    ], Contact.prototype, "companyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_name" }),
        __metadata("design:type", String)
    ], Contact.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Contact.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_balance" }),
        __metadata("design:type", Number)
    ], Contact.prototype, "currentBalance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_fields", elemType: CustomField }),
        __metadata("design:type", Array)
    ], Contact.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=department" }),
        __metadata("design:type", String)
    ], Contact.prototype, "department", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Contact.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emails", elemType: Email }),
        __metadata("design:type", Array)
    ], Contact.prototype, "emails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fax" }),
        __metadata("design:type", String)
    ], Contact.prototype, "fax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_call_at" }),
        __metadata("design:type", Date)
    ], Contact.prototype, "firstCallAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_email_at" }),
        __metadata("design:type", Date)
    ], Contact.prototype, "firstEmailAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], Contact.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gender" }),
        __metadata("design:type", String)
    ], Contact.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Contact.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", String)
    ], Contact.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], Contact.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_activity_at" }),
        __metadata("design:type", Date)
    ], Contact.prototype, "lastActivityAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], Contact.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lead_id" }),
        __metadata("design:type", String)
    ], Contact.prototype, "leadId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lead_source" }),
        __metadata("design:type", String)
    ], Contact.prototype, "leadSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=middle_name" }),
        __metadata("design:type", String)
    ], Contact.prototype, "middleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Contact.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner_id" }),
        __metadata("design:type", String)
    ], Contact.prototype, "ownerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber }),
        __metadata("design:type", Array)
    ], Contact.prototype, "phoneNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photo_url" }),
        __metadata("design:type", String)
    ], Contact.prototype, "photoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prefix" }),
        __metadata("design:type", String)
    ], Contact.prototype, "prefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=social_links", elemType: SocialLink }),
        __metadata("design:type", Array)
    ], Contact.prototype, "socialLinks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Contact.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suffix" }),
        __metadata("design:type", String)
    ], Contact.prototype, "suffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], Contact.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Contact.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Contact.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Contact.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=websites", elemType: Website }),
        __metadata("design:type", Array)
    ], Contact.prototype, "websites", void 0);
    return Contact;
}(SpeakeasyBase));
export { Contact };
var ContactInput = /** @class */ (function (_super) {
    __extends(ContactInput, _super);
    function ContactInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], ContactInput.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address }),
        __metadata("design:type", Array)
    ], ContactInput.prototype, "addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=birthday" }),
        __metadata("design:type", String)
    ], ContactInput.prototype, "birthday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_id" }),
        __metadata("design:type", String)
    ], ContactInput.prototype, "companyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_name" }),
        __metadata("design:type", String)
    ], ContactInput.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_balance" }),
        __metadata("design:type", Number)
    ], ContactInput.prototype, "currentBalance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_fields", elemType: CustomField }),
        __metadata("design:type", Array)
    ], ContactInput.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=department" }),
        __metadata("design:type", String)
    ], ContactInput.prototype, "department", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ContactInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emails", elemType: Email }),
        __metadata("design:type", Array)
    ], ContactInput.prototype, "emails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fax" }),
        __metadata("design:type", String)
    ], ContactInput.prototype, "fax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], ContactInput.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gender" }),
        __metadata("design:type", String)
    ], ContactInput.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", String)
    ], ContactInput.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], ContactInput.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], ContactInput.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lead_id" }),
        __metadata("design:type", String)
    ], ContactInput.prototype, "leadId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lead_source" }),
        __metadata("design:type", String)
    ], ContactInput.prototype, "leadSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=middle_name" }),
        __metadata("design:type", String)
    ], ContactInput.prototype, "middleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ContactInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner_id" }),
        __metadata("design:type", String)
    ], ContactInput.prototype, "ownerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber }),
        __metadata("design:type", Array)
    ], ContactInput.prototype, "phoneNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photo_url" }),
        __metadata("design:type", String)
    ], ContactInput.prototype, "photoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prefix" }),
        __metadata("design:type", String)
    ], ContactInput.prototype, "prefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=social_links", elemType: SocialLink }),
        __metadata("design:type", Array)
    ], ContactInput.prototype, "socialLinks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ContactInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suffix" }),
        __metadata("design:type", String)
    ], ContactInput.prototype, "suffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], ContactInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ContactInput.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ContactInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=websites", elemType: Website }),
        __metadata("design:type", Array)
    ], ContactInput.prototype, "websites", void 0);
    return ContactInput;
}(SpeakeasyBase));
export { ContactInput };
