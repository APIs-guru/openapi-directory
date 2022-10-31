package shared

type MarketingPrice struct {
	DiscountAmount     *Amount `json:"discountAmount,omitempty"`
	DiscountPercentage *string `json:"discountPercentage,omitempty"`
	OriginalPrice      *Amount `json:"originalPrice,omitempty"`
	PriceTreatment     *string `json:"priceTreatment,omitempty"`
}
