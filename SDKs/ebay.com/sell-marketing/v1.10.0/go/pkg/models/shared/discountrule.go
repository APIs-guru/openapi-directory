package shared

type DiscountRule struct {
	DiscountBenefit       *DiscountBenefit       `json:"discountBenefit"`
	DiscountSpecification *DiscountSpecification `json:"discountSpecification"`
	MaxDiscountAmount     *Amount                `json:"maxDiscountAmount"`
	RuleOrder             *int32                 `json:"ruleOrder"`
}
