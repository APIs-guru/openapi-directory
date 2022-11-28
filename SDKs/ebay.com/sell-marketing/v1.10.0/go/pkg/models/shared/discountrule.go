package shared

// DiscountRule
// This complex type defines a promotion as being either a monetary amount or a percentage of a sales price that's subtracted from the price of an item or order. Set the amount of the discount and the rules that govern when the discount triggers using the discountBenefit and discountSpecification fields. Note: In volume pricing promotions, you must configure at least two discountRule containers and at most four.
type DiscountRule struct {
	DiscountBenefit       *DiscountBenefit       `json:"discountBenefit,omitempty"`
	DiscountSpecification *DiscountSpecification `json:"discountSpecification,omitempty"`
	MaxDiscountAmount     *Amount                `json:"maxDiscountAmount,omitempty"`
	RuleOrder             *int32                 `json:"ruleOrder,omitempty"`
}
