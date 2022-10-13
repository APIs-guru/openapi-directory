package shared

type MarketingPrice struct {
	DiscountAmount     *Amount `json:"discountAmount"`
	DiscountPercentage *string `json:"discountPercentage"`
	OriginalPrice      *Amount `json:"originalPrice"`
	PriceTreatment     *string `json:"priceTreatment"`
}
