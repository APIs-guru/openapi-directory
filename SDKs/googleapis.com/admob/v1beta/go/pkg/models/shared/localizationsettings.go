package shared

// LocalizationSettings
// Localization settings for reports, such as currency and language. It affects how metrics are calculated.
type LocalizationSettings struct {
	CurrencyCode *string `json:"currencyCode,omitempty"`
	LanguageCode *string `json:"languageCode,omitempty"`
}
