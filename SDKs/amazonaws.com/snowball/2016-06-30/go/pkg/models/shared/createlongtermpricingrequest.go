package shared



type CreateLongTermPricingRequest struct {
    IsLongTermPricingAutoRenew *bool `json:"IsLongTermPricingAutoRenew,omitempty"`
    LongTermPricingType LongTermPricingTypeEnum `json:"LongTermPricingType"`
    SnowballType *SnowballTypeEnum `json:"SnowballType,omitempty"`
    
}

