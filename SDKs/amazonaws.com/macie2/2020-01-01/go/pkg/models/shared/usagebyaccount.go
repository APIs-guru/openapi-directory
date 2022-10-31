package shared

type UsageByAccount struct {
	Currency      *CurrencyEnum  `json:"currency,omitempty"`
	EstimatedCost *string        `json:"estimatedCost,omitempty"`
	ServiceLimit  *ServiceLimit  `json:"serviceLimit,omitempty"`
	Type          *UsageTypeEnum `json:"type,omitempty"`
}
