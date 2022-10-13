package shared

type UpdateLongTermPricingRequest struct {
	IsLongTermPricingAutoRenew *bool   `json:"IsLongTermPricingAutoRenew"`
	LongTermPricingID          string  `json:"LongTermPricingId"`
	ReplacementJob             *string `json:"ReplacementJob"`
}
