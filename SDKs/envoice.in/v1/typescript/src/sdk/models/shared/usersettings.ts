import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Country } from "./country";
import { Currency } from "./currency";
import { Currency } from "./currency";
import { UiLanguage } from "./uilanguage";

export enum UserSettingsInvoiceTemplateEnum {
    Default = "Default"
,    Template1 = "Template1"
,    Template2 = "Template2"
}

export enum UserSettingsProfessionEnum {
    Other = "Other"
,    DesignAndCreative = "DesignAndCreative"
,    SoftwareDevelopment = "SoftwareDevelopment"
,    ContentWritingAndMarketing = "ContentWritingAndMarketing"
,    Freelancers = "Freelancers"
,    Consultants = "Consultants"
,    Smes = "Smes"
,    Enterprise = "Enterprise"
,    ECommerce = "ECommerce"
,    Individual = "Individual"
}

export enum UserSettingsReferralProgramEnum {
    Enabled = "Enabled"
,    Disabled = "Disabled"
}

export enum UserSettingsStoreCheckoutFieldsEnum {
    ShowMinimumRequiredFields = "ShowMinimumRequiredFields"
,    ShowAllFields = "ShowAllFields"
}


export class UserSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountantEmail" })
  accountantEmail?: string;

  @Metadata({ data: "json, name=Address" })
  address?: string;

  @Metadata({ data: "json, name=ApiKey" })
  apiKey?: string;

  @Metadata({ data: "json, name=ApiSecret" })
  apiSecret?: string;

  @Metadata({ data: "json, name=BackgroundImage" })
  backgroundImage?: string;

  @Metadata({ data: "json, name=Bank" })
  bank?: string;

  @Metadata({ data: "json, name=BankAccount" })
  bankAccount?: string;

  @Metadata({ data: "json, name=Cname" })
  cname?: string;

  @Metadata({ data: "json, name=CompanyRegistrationNumber" })
  companyRegistrationNumber?: string;

  @Metadata({ data: "json, name=Country" })
  country?: Country;

  @Metadata({ data: "json, name=CountryId" })
  countryId?: number;

  @Metadata({ data: "json, name=Currency" })
  currency?: Currency;

  @Metadata({ data: "json, name=CurrencyId" })
  currencyId?: number;

  @Metadata({ data: "json, name=CurrencySymbol" })
  currencySymbol?: string;

  @Metadata({ data: "json, name=DefaultDateFormat" })
  defaultDateFormat?: string;

  @Metadata({ data: "json, name=DefaultDueDateInDays" })
  defaultDueDateInDays?: number;

  @Metadata({ data: "json, name=DoNotTrack" })
  doNotTrack?: boolean;

  @Metadata({ data: "json, name=EnableClientPortal" })
  enableClientPortal?: boolean;

  @Metadata({ data: "json, name=EnablePredictiveInvoicing" })
  enablePredictiveInvoicing?: boolean;

  @Metadata({ data: "json, name=EnableRecurringInvoicing" })
  enableRecurringInvoicing?: boolean;

  @Metadata({ data: "json, name=HasInvoiceLogo" })
  hasInvoiceLogo?: boolean;

  @Metadata({ data: "json, name=Iban" })
  iban?: string;

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=InvoiceTemplate" })
  invoiceTemplate?: UserSettingsInvoiceTemplateEnum;

  @Metadata({ data: "json, name=InvoiceTemplateColorHex" })
  invoiceTemplateColorHex?: string;

  @Metadata({ data: "json, name=PhoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=Profession" })
  profession?: UserSettingsProfessionEnum;

  @Metadata({ data: "json, name=ReceiveSmsNotifications" })
  receiveSmsNotifications?: boolean;

  @Metadata({ data: "json, name=ReferralProgram" })
  referralProgram?: UserSettingsReferralProgramEnum;

  @Metadata({ data: "json, name=StoreCheckoutFields" })
  storeCheckoutFields?: UserSettingsStoreCheckoutFieldsEnum;

  @Metadata({ data: "json, name=StoreColorHex" })
  storeColorHex?: string;

  @Metadata({ data: "json, name=StoreCurrency" })
  storeCurrency?: Currency;

  @Metadata({ data: "json, name=StoreCurrencyId" })
  storeCurrencyId?: number;

  @Metadata({ data: "json, name=StoreCustomJavaScript" })
  storeCustomJavaScript?: string;

  @Metadata({ data: "json, name=StoreDescription" })
  storeDescription?: string;

  @Metadata({ data: "json, name=StoreEmail" })
  storeEmail?: string;

  @Metadata({ data: "json, name=StoreLanguage" })
  storeLanguage?: UiLanguage;

  @Metadata({ data: "json, name=StoreLanguageId" })
  storeLanguageId?: number;

  @Metadata({ data: "json, name=StoreName" })
  storeName?: string;

  @Metadata({ data: "json, name=StorePurchaseEmailMessage" })
  storePurchaseEmailMessage?: string;

  @Metadata({ data: "json, name=StorePurchaseThankYouMessage" })
  storePurchaseThankYouMessage?: string;

  @Metadata({ data: "json, name=StoreTextColorHex" })
  storeTextColorHex?: string;

  @Metadata({ data: "json, name=StoreUrl" })
  storeUrl?: string;

  @Metadata({ data: "json, name=SubscribeToProductEmails" })
  subscribeToProductEmails?: boolean;

  @Metadata({ data: "json, name=Swift" })
  swift?: string;

  @Metadata({ data: "json, name=Terms" })
  terms?: string;

  @Metadata({ data: "json, name=UserId" })
  userId?: number;

  @Metadata({ data: "json, name=UserSignature" })
  userSignature?: string;

  @Metadata({ data: "json, name=VatNumber" })
  vatNumber?: string;

  @Metadata({ data: "json, name=YearsOfExperience" })
  yearsOfExperience?: number;
}
