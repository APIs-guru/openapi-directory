package shared

type LocalizationSettings struct {
	CurrencyCode *string `json:"currencyCode,omitempty"`
	LanguageCode *string `json:"languageCode,omitempty"`
}
