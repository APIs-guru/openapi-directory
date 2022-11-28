import { SpeakeasyBase } from "../../../internal/utils";
import { Country } from "./country";
import { Currency } from "./currency";
import { UiLanguage } from "./uilanguage";
export declare enum UserSettingsInvoiceTemplateEnum {
    Default = "Default",
    Template1 = "Template1",
    Template2 = "Template2"
}
export declare enum UserSettingsProfessionEnum {
    Other = "Other",
    DesignAndCreative = "DesignAndCreative",
    SoftwareDevelopment = "SoftwareDevelopment",
    ContentWritingAndMarketing = "ContentWritingAndMarketing",
    Freelancers = "Freelancers",
    Consultants = "Consultants",
    Smes = "Smes",
    Enterprise = "Enterprise",
    ECommerce = "ECommerce",
    Individual = "Individual"
}
export declare enum UserSettingsReferralProgramEnum {
    Enabled = "Enabled",
    Disabled = "Disabled"
}
export declare enum UserSettingsStoreCheckoutFieldsEnum {
    ShowMinimumRequiredFields = "ShowMinimumRequiredFields",
    ShowAllFields = "ShowAllFields"
}
export declare class UserSettings extends SpeakeasyBase {
    accountantEmail?: string;
    address?: string;
    apiKey?: string;
    apiSecret?: string;
    backgroundImage?: string;
    bank?: string;
    bankAccount?: string;
    cname?: string;
    companyRegistrationNumber?: string;
    country?: Country;
    countryId?: number;
    currency?: Currency;
    currencyId?: number;
    currencySymbol?: string;
    defaultDateFormat?: string;
    defaultDueDateInDays?: number;
    doNotTrack?: boolean;
    enableClientPortal?: boolean;
    enablePredictiveInvoicing?: boolean;
    enableRecurringInvoicing?: boolean;
    hasInvoiceLogo?: boolean;
    iban?: string;
    id?: number;
    invoiceTemplate?: UserSettingsInvoiceTemplateEnum;
    invoiceTemplateColorHex?: string;
    phoneNumber?: string;
    profession?: UserSettingsProfessionEnum;
    receiveSmsNotifications?: boolean;
    referralProgram?: UserSettingsReferralProgramEnum;
    storeCheckoutFields?: UserSettingsStoreCheckoutFieldsEnum;
    storeColorHex?: string;
    storeCurrency?: Currency;
    storeCurrencyId?: number;
    storeCustomJavaScript?: string;
    storeDescription?: string;
    storeEmail?: string;
    storeLanguage?: UiLanguage;
    storeLanguageId?: number;
    storeName?: string;
    storePurchaseEmailMessage?: string;
    storePurchaseThankYouMessage?: string;
    storeTextColorHex?: string;
    storeUrl?: string;
    subscribeToProductEmails?: boolean;
    swift?: string;
    terms?: string;
    userId?: number;
    userSignature?: string;
    vatNumber?: string;
    yearsOfExperience?: number;
}
