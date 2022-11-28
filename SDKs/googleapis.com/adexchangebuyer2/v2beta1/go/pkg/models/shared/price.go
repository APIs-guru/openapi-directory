package shared

type PricePricingTypeEnum string

const (
	PricePricingTypeEnumPricingTypeUnspecified PricePricingTypeEnum = "PRICING_TYPE_UNSPECIFIED"
	PricePricingTypeEnumCostPerMille           PricePricingTypeEnum = "COST_PER_MILLE"
	PricePricingTypeEnumCostPerDay             PricePricingTypeEnum = "COST_PER_DAY"
)

// Price
// Represents a price and a pricing type for a product / deal.
type Price struct {
	Amount      *Money                `json:"amount,omitempty"`
	PricingType *PricePricingTypeEnum `json:"pricingType,omitempty"`
}
