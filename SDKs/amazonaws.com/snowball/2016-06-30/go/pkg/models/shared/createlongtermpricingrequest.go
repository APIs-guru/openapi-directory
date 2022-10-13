package shared

type CreateLongTermPricingRequest struct {
	IsLongTermPricingAutoRenew *bool                   `json:"IsLongTermPricingAutoRenew"`
	LongTermPricingType        LongTermPricingTypeEnum `json:"LongTermPricingType"`
	SnowballType               *SnowballTypeEnum       `json:"SnowballType"`
}
