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
	AccountantEmail              *string                              `json:"AccountantEmail"`
	Address                      *string                              `json:"Address"`
	APIKey                       *string                              `json:"ApiKey"`
	APISecret                    *string                              `json:"ApiSecret"`
	BackgroundImage              *string                              `json:"BackgroundImage"`
	Bank                         *string                              `json:"Bank"`
	BankAccount                  *string                              `json:"BankAccount"`
	Cname                        *string                              `json:"Cname"`
	CompanyRegistrationNumber    *string                              `json:"CompanyRegistrationNumber"`
	Country                      *Country                             `json:"Country"`
	CountryID                    *int32                               `json:"CountryId"`
	Currency                     *Currency                            `json:"Currency"`
	CurrencyID                   *int32                               `json:"CurrencyId"`
	CurrencySymbol               *string                              `json:"CurrencySymbol"`
	DefaultDateFormat            *string                              `json:"DefaultDateFormat"`
	DefaultDueDateInDays         *int32                               `json:"DefaultDueDateInDays"`
	DoNotTrack                   *bool                                `json:"DoNotTrack"`
	EnableClientPortal           *bool                                `json:"EnableClientPortal"`
	EnablePredictiveInvoicing    *bool                                `json:"EnablePredictiveInvoicing"`
	EnableRecurringInvoicing     *bool                                `json:"EnableRecurringInvoicing"`
	HasInvoiceLogo               *bool                                `json:"HasInvoiceLogo"`
	Iban                         *string                              `json:"Iban"`
	ID                           *int32                               `json:"Id"`
	InvoiceTemplate              *UserSettingsInvoiceTemplateEnum     `json:"InvoiceTemplate"`
	InvoiceTemplateColorHex      *string                              `json:"InvoiceTemplateColorHex"`
	PhoneNumber                  *string                              `json:"PhoneNumber"`
	Profession                   *UserSettingsProfessionEnum          `json:"Profession"`
	ReceiveSmsNotifications      *bool                                `json:"ReceiveSmsNotifications"`
	ReferralProgram              *UserSettingsReferralProgramEnum     `json:"ReferralProgram"`
	StoreCheckoutFields          *UserSettingsStoreCheckoutFieldsEnum `json:"StoreCheckoutFields"`
	StoreColorHex                *string                              `json:"StoreColorHex"`
	StoreCurrency                *Currency                            `json:"StoreCurrency"`
	StoreCurrencyID              *int32                               `json:"StoreCurrencyId"`
	StoreCustomJavaScript        *string                              `json:"StoreCustomJavaScript"`
	StoreDescription             *string                              `json:"StoreDescription"`
	StoreEmail                   *string                              `json:"StoreEmail"`
	StoreLanguage                *UILanguage                          `json:"StoreLanguage"`
	StoreLanguageID              *int32                               `json:"StoreLanguageId"`
	StoreName                    *string                              `json:"StoreName"`
	StorePurchaseEmailMessage    *string                              `json:"StorePurchaseEmailMessage"`
	StorePurchaseThankYouMessage *string                              `json:"StorePurchaseThankYouMessage"`
	StoreTextColorHex            *string                              `json:"StoreTextColorHex"`
	StoreURL                     *string                              `json:"StoreUrl"`
	SubscribeToProductEmails     *bool                                `json:"SubscribeToProductEmails"`
	Swift                        *string                              `json:"Swift"`
	Terms                        *string                              `json:"Terms"`
	UserID                       *int32                               `json:"UserId"`
	UserSignature                *string                              `json:"UserSignature"`
	VatNumber                    *string                              `json:"VatNumber"`
	YearsOfExperience            *int32                               `json:"YearsOfExperience"`
}
