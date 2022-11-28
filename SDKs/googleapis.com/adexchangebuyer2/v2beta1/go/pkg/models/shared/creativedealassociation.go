package shared

// CreativeDealAssociation
// The association between a creative and a deal.
type CreativeDealAssociation struct {
	AccountID  *string `json:"accountId,omitempty"`
	CreativeID *string `json:"creativeId,omitempty"`
	DealsID    *string `json:"dealsId,omitempty"`
}
