package shared



type UsageTotal struct {
    Currency *CurrencyEnum `json:"currency,omitempty"`
    EstimatedCost *string `json:"estimatedCost,omitempty"`
    Type *UsageTypeEnum `json:"type,omitempty"`
    
}

