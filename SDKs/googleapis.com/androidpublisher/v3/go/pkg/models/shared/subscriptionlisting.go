package shared

type SubscriptionListing struct {
	Benefits     []string `json:"benefits"`
	Description  *string  `json:"description"`
	LanguageCode *string  `json:"languageCode"`
	Title        *string  `json:"title"`
}
