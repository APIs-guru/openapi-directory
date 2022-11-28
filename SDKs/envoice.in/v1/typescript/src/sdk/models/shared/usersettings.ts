import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Country } from "./country";
import { Currency } from "./currency";
import { UiLanguage } from "./uilanguage";


export enum UserSettingsInvoiceTemplateEnum {
    Default = "Default",
    Template1 = "Template1",
    Template2 = "Template2"
}

export enum UserSettingsProfessionEnum {
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

export enum UserSettingsReferralProgramEnum {
    Enabled = "Enabled",
    Disabled = "Disabled"
}

export enum UserSettingsStoreCheckoutFieldsEnum {
    ShowMinimumRequiredFields = "ShowMinimumRequiredFields",
    ShowAllFields = "ShowAllFields"
}


export class UserSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountantEmail" })
  accountantEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=Address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=ApiKey" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "json, name=ApiSecret" })
  apiSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=BackgroundImage" })
  backgroundImage?: string;

  @SpeakeasyMetadata({ data: "json, name=Bank" })
  bank?: string;

  @SpeakeasyMetadata({ data: "json, name=BankAccount" })
  bankAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=Cname" })
  cname?: string;

  @SpeakeasyMetadata({ data: "json, name=CompanyRegistrationNumber" })
  companyRegistrationNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=Country" })
  country?: Country;

  @SpeakeasyMetadata({ data: "json, name=CountryId" })
  countryId?: number;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency?: Currency;

  @SpeakeasyMetadata({ data: "json, name=CurrencyId" })
  currencyId?: number;

  @SpeakeasyMetadata({ data: "json, name=CurrencySymbol" })
  currencySymbol?: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultDateFormat" })
  defaultDateFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultDueDateInDays" })
  defaultDueDateInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=DoNotTrack" })
  doNotTrack?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableClientPortal" })
  enableClientPortal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnablePredictiveInvoicing" })
  enablePredictiveInvoicing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableRecurringInvoicing" })
  enableRecurringInvoicing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=HasInvoiceLogo" })
  hasInvoiceLogo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Iban" })
  iban?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=InvoiceTemplate" })
  invoiceTemplate?: UserSettingsInvoiceTemplateEnum;

  @SpeakeasyMetadata({ data: "json, name=InvoiceTemplateColorHex" })
  invoiceTemplateColorHex?: string;

  @SpeakeasyMetadata({ data: "json, name=PhoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=Profession" })
  profession?: UserSettingsProfessionEnum;

  @SpeakeasyMetadata({ data: "json, name=ReceiveSmsNotifications" })
  receiveSmsNotifications?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ReferralProgram" })
  referralProgram?: UserSettingsReferralProgramEnum;

  @SpeakeasyMetadata({ data: "json, name=StoreCheckoutFields" })
  storeCheckoutFields?: UserSettingsStoreCheckoutFieldsEnum;

  @SpeakeasyMetadata({ data: "json, name=StoreColorHex" })
  storeColorHex?: string;

  @SpeakeasyMetadata({ data: "json, name=StoreCurrency" })
  storeCurrency?: Currency;

  @SpeakeasyMetadata({ data: "json, name=StoreCurrencyId" })
  storeCurrencyId?: number;

  @SpeakeasyMetadata({ data: "json, name=StoreCustomJavaScript" })
  storeCustomJavaScript?: string;

  @SpeakeasyMetadata({ data: "json, name=StoreDescription" })
  storeDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=StoreEmail" })
  storeEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=StoreLanguage" })
  storeLanguage?: UiLanguage;

  @SpeakeasyMetadata({ data: "json, name=StoreLanguageId" })
  storeLanguageId?: number;

  @SpeakeasyMetadata({ data: "json, name=StoreName" })
  storeName?: string;

  @SpeakeasyMetadata({ data: "json, name=StorePurchaseEmailMessage" })
  storePurchaseEmailMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=StorePurchaseThankYouMessage" })
  storePurchaseThankYouMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=StoreTextColorHex" })
  storeTextColorHex?: string;

  @SpeakeasyMetadata({ data: "json, name=StoreUrl" })
  storeUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=SubscribeToProductEmails" })
  subscribeToProductEmails?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Swift" })
  swift?: string;

  @SpeakeasyMetadata({ data: "json, name=Terms" })
  terms?: string;

  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId?: number;

  @SpeakeasyMetadata({ data: "json, name=UserSignature" })
  userSignature?: string;

  @SpeakeasyMetadata({ data: "json, name=VatNumber" })
  vatNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=YearsOfExperience" })
  yearsOfExperience?: number;
}
