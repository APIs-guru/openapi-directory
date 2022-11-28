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
var StateElectionOfficeInfo = /** @class */ (function (_super) {
    __extends(StateElectionOfficeInfo, _super);
    function StateElectionOfficeInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address_line1" }),
        __metadata("design:type", String)
    ], StateElectionOfficeInfo.prototype, "addressLine1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address_line2" }),
        __metadata("design:type", String)
    ], StateElectionOfficeInfo.prototype, "addressLine2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], StateElectionOfficeInfo.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], StateElectionOfficeInfo.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fax_number" }),
        __metadata("design:type", String)
    ], StateElectionOfficeInfo.prototype, "faxNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mailing_address1" }),
        __metadata("design:type", String)
    ], StateElectionOfficeInfo.prototype, "mailingAddress1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mailing_address2" }),
        __metadata("design:type", String)
    ], StateElectionOfficeInfo.prototype, "mailingAddress2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mailing_city" }),
        __metadata("design:type", String)
    ], StateElectionOfficeInfo.prototype, "mailingCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mailing_state" }),
        __metadata("design:type", String)
    ], StateElectionOfficeInfo.prototype, "mailingState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mailing_zipcode" }),
        __metadata("design:type", String)
    ], StateElectionOfficeInfo.prototype, "mailingZipcode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=office_name" }),
        __metadata("design:type", String)
    ], StateElectionOfficeInfo.prototype, "officeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=office_type" }),
        __metadata("design:type", String)
    ], StateElectionOfficeInfo.prototype, "officeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_phone_number" }),
        __metadata("design:type", String)
    ], StateElectionOfficeInfo.prototype, "primaryPhoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondary_phone_number" }),
        __metadata("design:type", String)
    ], StateElectionOfficeInfo.prototype, "secondaryPhoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], StateElectionOfficeInfo.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state_full_name" }),
        __metadata("design:type", String)
    ], StateElectionOfficeInfo.prototype, "stateFullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=website_url1" }),
        __metadata("design:type", String)
    ], StateElectionOfficeInfo.prototype, "websiteUrl1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=website_url2" }),
        __metadata("design:type", String)
    ], StateElectionOfficeInfo.prototype, "websiteUrl2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zip_code" }),
        __metadata("design:type", String)
    ], StateElectionOfficeInfo.prototype, "zipCode", void 0);
    return StateElectionOfficeInfo;
}(SpeakeasyBase));
export { StateElectionOfficeInfo };
