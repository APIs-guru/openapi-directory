package shared

type UsageTotal struct {
	Currency      *CurrencyEnum  `json:"currency"`
	EstimatedCost *string        `json:"estimatedCost"`
	Type          *UsageTypeEnum `json:"type"`
}
