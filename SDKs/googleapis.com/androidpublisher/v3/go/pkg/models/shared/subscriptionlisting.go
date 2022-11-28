package shared

// SubscriptionListing
// The consumer-visible metadata of a subscription.
type SubscriptionListing struct {
	Benefits     []string `json:"benefits,omitempty"`
	Description  *string  `json:"description,omitempty"`
	LanguageCode *string  `json:"languageCode,omitempty"`
	Title        *string  `json:"title,omitempty"`
}
