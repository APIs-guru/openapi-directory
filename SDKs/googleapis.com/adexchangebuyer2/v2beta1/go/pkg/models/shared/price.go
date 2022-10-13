package shared

type PricePricingTypeEnum string

const (
	PricePricingTypeEnumPricingTypeUnspecified PricePricingTypeEnum = "PRICING_TYPE_UNSPECIFIED"
	PricePricingTypeEnumCostPerMille           PricePricingTypeEnum = "COST_PER_MILLE"
	PricePricingTypeEnumCostPerDay             PricePricingTypeEnum = "COST_PER_DAY"
)

type Price struct {
	Amount      *Money                `json:"amount"`
	PricingType *PricePricingTypeEnum `json:"pricingType"`
}
