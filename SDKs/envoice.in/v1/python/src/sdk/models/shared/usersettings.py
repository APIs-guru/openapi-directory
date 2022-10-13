from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import country
from . import currency
from . import currency
from . import uilanguage

class UserSettingsInvoiceTemplateEnum(str, Enum):
    DEFAULT = "Default"
    TEMPLATE1 = "Template1"
    TEMPLATE2 = "Template2"

class UserSettingsProfessionEnum(str, Enum):
    OTHER = "Other"
    DESIGN_AND_CREATIVE = "DesignAndCreative"
    SOFTWARE_DEVELOPMENT = "SoftwareDevelopment"
    CONTENT_WRITING_AND_MARKETING = "ContentWritingAndMarketing"
    FREELANCERS = "Freelancers"
    CONSULTANTS = "Consultants"
    SMES = "Smes"
    ENTERPRISE = "Enterprise"
    E_COMMERCE = "ECommerce"
    INDIVIDUAL = "Individual"

class UserSettingsReferralProgramEnum(str, Enum):
    ENABLED = "Enabled"
    DISABLED = "Disabled"

class UserSettingsStoreCheckoutFieldsEnum(str, Enum):
    SHOW_MINIMUM_REQUIRED_FIELDS = "ShowMinimumRequiredFields"
    SHOW_ALL_FIELDS = "ShowAllFields"


@dataclass_json
@dataclass
class UserSettings:
    accountant_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountantEmail' }})
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address' }})
    api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiKey' }})
    api_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiSecret' }})
    background_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackgroundImage' }})
    bank: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Bank' }})
    bank_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BankAccount' }})
    cname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Cname' }})
    company_registration_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompanyRegistrationNumber' }})
    country: Optional[country.Country] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Country' }})
    country_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CountryId' }})
    currency: Optional[currency.Currency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    currency_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrencyId' }})
    currency_symbol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrencySymbol' }})
    default_date_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultDateFormat' }})
    default_due_date_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultDueDateInDays' }})
    do_not_track: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DoNotTrack' }})
    enable_client_portal: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableClientPortal' }})
    enable_predictive_invoicing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnablePredictiveInvoicing' }})
    enable_recurring_invoicing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableRecurringInvoicing' }})
    has_invoice_logo: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HasInvoiceLogo' }})
    iban: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Iban' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    invoice_template: Optional[UserSettingsInvoiceTemplateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InvoiceTemplate' }})
    invoice_template_color_hex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InvoiceTemplateColorHex' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PhoneNumber' }})
    profession: Optional[UserSettingsProfessionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Profession' }})
    receive_sms_notifications: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReceiveSmsNotifications' }})
    referral_program: Optional[UserSettingsReferralProgramEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReferralProgram' }})
    store_checkout_fields: Optional[UserSettingsStoreCheckoutFieldsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoreCheckoutFields' }})
    store_color_hex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoreColorHex' }})
    store_currency: Optional[currency.Currency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoreCurrency' }})
    store_currency_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoreCurrencyId' }})
    store_custom_java_script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoreCustomJavaScript' }})
    store_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoreDescription' }})
    store_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoreEmail' }})
    store_language: Optional[uilanguage.UILanguage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoreLanguage' }})
    store_language_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoreLanguageId' }})
    store_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoreName' }})
    store_purchase_email_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorePurchaseEmailMessage' }})
    store_purchase_thank_you_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorePurchaseThankYouMessage' }})
    store_text_color_hex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoreTextColorHex' }})
    store_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoreUrl' }})
    subscribe_to_product_emails: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubscribeToProductEmails' }})
    swift: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Swift' }})
    terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Terms' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserId' }})
    user_signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserSignature' }})
    vat_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VatNumber' }})
    years_of_experience: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'YearsOfExperience' }})
    
