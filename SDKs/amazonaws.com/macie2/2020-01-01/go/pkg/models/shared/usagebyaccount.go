package shared

type UsageByAccount struct {
	Currency      *CurrencyEnum  `json:"currency"`
	EstimatedCost *string        `json:"estimatedCost"`
	ServiceLimit  *ServiceLimit  `json:"serviceLimit"`
	Type          *UsageTypeEnum `json:"type"`
}
