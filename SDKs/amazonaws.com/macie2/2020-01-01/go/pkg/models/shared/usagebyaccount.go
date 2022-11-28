package shared

// UsageByAccount
// Provides data for a specific usage metric and the corresponding quota for an Amazon Macie account.
type UsageByAccount struct {
	Currency      *CurrencyEnum  `json:"currency,omitempty"`
	EstimatedCost *string        `json:"estimatedCost,omitempty"`
	ServiceLimit  *ServiceLimit  `json:"serviceLimit,omitempty"`
	Type          *UsageTypeEnum `json:"type,omitempty"`
}
