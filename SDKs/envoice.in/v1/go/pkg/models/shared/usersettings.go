package shared

type UserSettingsInvoiceTemplateEnum string

const (
	UserSettingsInvoiceTemplateEnumDefault   UserSettingsInvoiceTemplateEnum = "Default"
	UserSettingsInvoiceTemplateEnumTemplate1 UserSettingsInvoiceTemplateEnum = "Template1"
	UserSettingsInvoiceTemplateEnumTemplate2 UserSettingsInvoiceTemplateEnum = "Template2"
)

type UserSettingsProfessionEnum string

const (
	UserSettingsProfessionEnumOther                      UserSettingsProfessionEnum = "Other"
	UserSettingsProfessionEnumDesignAndCreative          UserSettingsProfessionEnum = "DesignAndCreative"
	UserSettingsProfessionEnumSoftwareDevelopment        UserSettingsProfessionEnum = "SoftwareDevelopment"
	UserSettingsProfessionEnumContentWritingAndMarketing UserSettingsProfessionEnum = "ContentWritingAndMarketing"
	UserSettingsProfessionEnumFreelancers                UserSettingsProfessionEnum = "Freelancers"
	UserSettingsProfessionEnumConsultants                UserSettingsProfessionEnum = "Consultants"
	UserSettingsProfessionEnumSmes                       UserSettingsProfessionEnum = "Smes"
	UserSettingsProfessionEnumEnterprise                 UserSettingsProfessionEnum = "Enterprise"
	UserSettingsProfessionEnumECommerce                  UserSettingsProfessionEnum = "ECommerce"
	UserSettingsProfessionEnumIndividual                 UserSettingsProfessionEnum = "Individual"
)

type UserSettingsReferralProgramEnum string

const (
	UserSettingsReferralProgramEnumEnabled  UserSettingsReferralProgramEnum = "Enabled"
	UserSettingsReferralProgramEnumDisabled UserSettingsReferralProgramEnum = "Disabled"
)

type UserSettingsStoreCheckoutFieldsEnum string

const (
	UserSettingsStoreCheckoutFieldsEnumShowMinimumRequiredFields UserSettingsStoreCheckoutFieldsEnum = "ShowMinimumRequiredFields"
	UserSettingsStoreCheckoutFieldsEnumShowAllFields             UserSettingsStoreCheckoutFieldsEnum = "ShowAllFields"
)

type UserSettings struct {
	AccountantEmail              *string                              `json:"AccountantEmail,omitempty"`
	Address                      *string                              `json:"Address,omitempty"`
	APIKey                       *string                              `json:"ApiKey,omitempty"`
	APISecret                    *string                              `json:"ApiSecret,omitempty"`
	BackgroundImage              *string                              `json:"BackgroundImage,omitempty"`
	Bank                         *string                              `json:"Bank,omitempty"`
	BankAccount                  *string                              `json:"BankAccount,omitempty"`
	Cname                        *string                              `json:"Cname,omitempty"`
	CompanyRegistrationNumber    *string                              `json:"CompanyRegistrationNumber,omitempty"`
	Country                      *Country                             `json:"Country,omitempty"`
	CountryID                    *int32                               `json:"CountryId,omitempty"`
	Currency                     *Currency                            `json:"Currency,omitempty"`
	CurrencyID                   *int32                               `json:"CurrencyId,omitempty"`
	CurrencySymbol               *string                              `json:"CurrencySymbol,omitempty"`
	DefaultDateFormat            *string                              `json:"DefaultDateFormat,omitempty"`
	DefaultDueDateInDays         *int32                               `json:"DefaultDueDateInDays,omitempty"`
	DoNotTrack                   *bool                                `json:"DoNotTrack,omitempty"`
	EnableClientPortal           *bool                                `json:"EnableClientPortal,omitempty"`
	EnablePredictiveInvoicing    *bool                                `json:"EnablePredictiveInvoicing,omitempty"`
	EnableRecurringInvoicing     *bool                                `json:"EnableRecurringInvoicing,omitempty"`
	HasInvoiceLogo               *bool                                `json:"HasInvoiceLogo,omitempty"`
	Iban                         *string                              `json:"Iban,omitempty"`
	ID                           *int32                               `json:"Id,omitempty"`
	InvoiceTemplate              *UserSettingsInvoiceTemplateEnum     `json:"InvoiceTemplate,omitempty"`
	InvoiceTemplateColorHex      *string                              `json:"InvoiceTemplateColorHex,omitempty"`
	PhoneNumber                  *string                              `json:"PhoneNumber,omitempty"`
	Profession                   *UserSettingsProfessionEnum          `json:"Profession,omitempty"`
	ReceiveSmsNotifications      *bool                                `json:"ReceiveSmsNotifications,omitempty"`
	ReferralProgram              *UserSettingsReferralProgramEnum     `json:"ReferralProgram,omitempty"`
	StoreCheckoutFields          *UserSettingsStoreCheckoutFieldsEnum `json:"StoreCheckoutFields,omitempty"`
	StoreColorHex                *string                              `json:"StoreColorHex,omitempty"`
	StoreCurrency                *Currency                            `json:"StoreCurrency,omitempty"`
	StoreCurrencyID              *int32                               `json:"StoreCurrencyId,omitempty"`
	StoreCustomJavaScript        *string                              `json:"StoreCustomJavaScript,omitempty"`
	StoreDescription             *string                              `json:"StoreDescription,omitempty"`
	StoreEmail                   *string                              `json:"StoreEmail,omitempty"`
	StoreLanguage                *UILanguage                          `json:"StoreLanguage,omitempty"`
	StoreLanguageID              *int32                               `json:"StoreLanguageId,omitempty"`
	StoreName                    *string                              `json:"StoreName,omitempty"`
	StorePurchaseEmailMessage    *string                              `json:"StorePurchaseEmailMessage,omitempty"`
	StorePurchaseThankYouMessage *string                              `json:"StorePurchaseThankYouMessage,omitempty"`
	StoreTextColorHex            *string                              `json:"StoreTextColorHex,omitempty"`
	StoreURL                     *string                              `json:"StoreUrl,omitempty"`
	SubscribeToProductEmails     *bool                                `json:"SubscribeToProductEmails,omitempty"`
	Swift                        *string                              `json:"Swift,omitempty"`
	Terms                        *string                              `json:"Terms,omitempty"`
	UserID                       *int32                               `json:"UserId,omitempty"`
	UserSignature                *string                              `json:"UserSignature,omitempty"`
	VatNumber                    *string                              `json:"VatNumber,omitempty"`
	YearsOfExperience            *int32                               `json:"YearsOfExperience,omitempty"`
}
