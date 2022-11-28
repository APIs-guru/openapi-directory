package shared

// AdWordsAccount
// JSON template for an Google Ads account.
type AdWordsAccount struct {
	AutoTaggingEnabled *bool   `json:"autoTaggingEnabled,omitempty"`
	CustomerID         *string `json:"customerId,omitempty"`
	Kind               *string `json:"kind,omitempty"`
}
