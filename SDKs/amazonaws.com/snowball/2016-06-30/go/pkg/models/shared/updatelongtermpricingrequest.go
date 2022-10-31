package shared



type UpdateLongTermPricingRequest struct {
    IsLongTermPricingAutoRenew *bool `json:"IsLongTermPricingAutoRenew,omitempty"`
    LongTermPricingID string `json:"LongTermPricingId"`
    ReplacementJob *string `json:"ReplacementJob,omitempty"`
    
}

