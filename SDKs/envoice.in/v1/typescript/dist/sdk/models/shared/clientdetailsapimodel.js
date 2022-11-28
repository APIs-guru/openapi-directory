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
import { AdditionalClientEmailApiModel } from "./additionalclientemailapimodel";
var ClientDetailsApiModel = /** @class */ (function (_super) {
    __extends(ClientDetailsApiModel, _super);
    function ClientDetailsApiModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdditionalEmails", elemType: AdditionalClientEmailApiModel }),
        __metadata("design:type", Array)
    ], ClientDetailsApiModel.prototype, "additionalEmails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address" }),
        __metadata("design:type", String)
    ], ClientDetailsApiModel.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientCountryId" }),
        __metadata("design:type", Number)
    ], ClientDetailsApiModel.prototype, "clientCountryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientCurrencyId" }),
        __metadata("design:type", Number)
    ], ClientDetailsApiModel.prototype, "clientCurrencyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompanyRegistrationNumber" }),
        __metadata("design:type", String)
    ], ClientDetailsApiModel.prototype, "companyRegistrationNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedOn" }),
        __metadata("design:type", Date)
    ], ClientDetailsApiModel.prototype, "createdOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultDueDateInDays" }),
        __metadata("design:type", Number)
    ], ClientDetailsApiModel.prototype, "defaultDueDateInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Email" }),
        __metadata("design:type", String)
    ], ClientDetailsApiModel.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", Number)
    ], ClientDetailsApiModel.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ClientDetailsApiModel.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PhoneNumber" }),
        __metadata("design:type", String)
    ], ClientDetailsApiModel.prototype, "phoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UiLanguageId" }),
        __metadata("design:type", Number)
    ], ClientDetailsApiModel.prototype, "uiLanguageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Vat" }),
        __metadata("design:type", String)
    ], ClientDetailsApiModel.prototype, "vat", void 0);
    return ClientDetailsApiModel;
}(SpeakeasyBase));
export { ClientDetailsApiModel };
