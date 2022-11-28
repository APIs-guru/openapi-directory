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
import { Country } from "./country";
import { Currency } from "./currency";
import { UiLanguage } from "./uilanguage";
export var UserSettingsInvoiceTemplateEnum;
(function (UserSettingsInvoiceTemplateEnum) {
    UserSettingsInvoiceTemplateEnum["Default"] = "Default";
    UserSettingsInvoiceTemplateEnum["Template1"] = "Template1";
    UserSettingsInvoiceTemplateEnum["Template2"] = "Template2";
})(UserSettingsInvoiceTemplateEnum || (UserSettingsInvoiceTemplateEnum = {}));
export var UserSettingsProfessionEnum;
(function (UserSettingsProfessionEnum) {
    UserSettingsProfessionEnum["Other"] = "Other";
    UserSettingsProfessionEnum["DesignAndCreative"] = "DesignAndCreative";
    UserSettingsProfessionEnum["SoftwareDevelopment"] = "SoftwareDevelopment";
    UserSettingsProfessionEnum["ContentWritingAndMarketing"] = "ContentWritingAndMarketing";
    UserSettingsProfessionEnum["Freelancers"] = "Freelancers";
    UserSettingsProfessionEnum["Consultants"] = "Consultants";
    UserSettingsProfessionEnum["Smes"] = "Smes";
    UserSettingsProfessionEnum["Enterprise"] = "Enterprise";
    UserSettingsProfessionEnum["ECommerce"] = "ECommerce";
    UserSettingsProfessionEnum["Individual"] = "Individual";
})(UserSettingsProfessionEnum || (UserSettingsProfessionEnum = {}));
export var UserSettingsReferralProgramEnum;
(function (UserSettingsReferralProgramEnum) {
    UserSettingsReferralProgramEnum["Enabled"] = "Enabled";
    UserSettingsReferralProgramEnum["Disabled"] = "Disabled";
})(UserSettingsReferralProgramEnum || (UserSettingsReferralProgramEnum = {}));
export var UserSettingsStoreCheckoutFieldsEnum;
(function (UserSettingsStoreCheckoutFieldsEnum) {
    UserSettingsStoreCheckoutFieldsEnum["ShowMinimumRequiredFields"] = "ShowMinimumRequiredFields";
    UserSettingsStoreCheckoutFieldsEnum["ShowAllFields"] = "ShowAllFields";
})(UserSettingsStoreCheckoutFieldsEnum || (UserSettingsStoreCheckoutFieldsEnum = {}));
var UserSettings = /** @class */ (function (_super) {
    __extends(UserSettings, _super);
    function UserSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountantEmail" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "accountantEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApiKey" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApiSecret" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "apiSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BackgroundImage" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "backgroundImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Bank" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "bank", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BankAccount" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "bankAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Cname" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "cname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompanyRegistrationNumber" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "companyRegistrationNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Country" }),
        __metadata("design:type", Country)
    ], UserSettings.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CountryId" }),
        __metadata("design:type", Number)
    ], UserSettings.prototype, "countryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", Currency)
    ], UserSettings.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrencyId" }),
        __metadata("design:type", Number)
    ], UserSettings.prototype, "currencyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrencySymbol" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "currencySymbol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultDateFormat" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "defaultDateFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultDueDateInDays" }),
        __metadata("design:type", Number)
    ], UserSettings.prototype, "defaultDueDateInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DoNotTrack" }),
        __metadata("design:type", Boolean)
    ], UserSettings.prototype, "doNotTrack", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableClientPortal" }),
        __metadata("design:type", Boolean)
    ], UserSettings.prototype, "enableClientPortal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnablePredictiveInvoicing" }),
        __metadata("design:type", Boolean)
    ], UserSettings.prototype, "enablePredictiveInvoicing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableRecurringInvoicing" }),
        __metadata("design:type", Boolean)
    ], UserSettings.prototype, "enableRecurringInvoicing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasInvoiceLogo" }),
        __metadata("design:type", Boolean)
    ], UserSettings.prototype, "hasInvoiceLogo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Iban" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "iban", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", Number)
    ], UserSettings.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InvoiceTemplate" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "invoiceTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InvoiceTemplateColorHex" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "invoiceTemplateColorHex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PhoneNumber" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "phoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Profession" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "profession", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReceiveSmsNotifications" }),
        __metadata("design:type", Boolean)
    ], UserSettings.prototype, "receiveSmsNotifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReferralProgram" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "referralProgram", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StoreCheckoutFields" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "storeCheckoutFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StoreColorHex" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "storeColorHex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StoreCurrency" }),
        __metadata("design:type", Currency)
    ], UserSettings.prototype, "storeCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StoreCurrencyId" }),
        __metadata("design:type", Number)
    ], UserSettings.prototype, "storeCurrencyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StoreCustomJavaScript" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "storeCustomJavaScript", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StoreDescription" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "storeDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StoreEmail" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "storeEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StoreLanguage" }),
        __metadata("design:type", UiLanguage)
    ], UserSettings.prototype, "storeLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StoreLanguageId" }),
        __metadata("design:type", Number)
    ], UserSettings.prototype, "storeLanguageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StoreName" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "storeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StorePurchaseEmailMessage" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "storePurchaseEmailMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StorePurchaseThankYouMessage" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "storePurchaseThankYouMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StoreTextColorHex" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "storeTextColorHex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StoreUrl" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "storeUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubscribeToProductEmails" }),
        __metadata("design:type", Boolean)
    ], UserSettings.prototype, "subscribeToProductEmails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Swift" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "swift", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Terms" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "terms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserId" }),
        __metadata("design:type", Number)
    ], UserSettings.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserSignature" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "userSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VatNumber" }),
        __metadata("design:type", String)
    ], UserSettings.prototype, "vatNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=YearsOfExperience" }),
        __metadata("design:type", Number)
    ], UserSettings.prototype, "yearsOfExperience", void 0);
    return UserSettings;
}(SpeakeasyBase));
export { UserSettings };
