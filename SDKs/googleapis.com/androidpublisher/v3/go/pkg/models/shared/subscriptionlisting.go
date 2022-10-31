package shared

type SubscriptionListing struct {
	Benefits     []string `json:"benefits,omitempty"`
	Description  *string  `json:"description,omitempty"`
	LanguageCode *string  `json:"languageCode,omitempty"`
	Title        *string  `json:"title,omitempty"`
}
