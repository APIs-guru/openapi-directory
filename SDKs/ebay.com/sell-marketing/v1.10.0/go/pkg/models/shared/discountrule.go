package shared



type DiscountRule struct {
    DiscountBenefit *DiscountBenefit `json:"discountBenefit,omitempty"`
    DiscountSpecification *DiscountSpecification `json:"discountSpecification,omitempty"`
    MaxDiscountAmount *Amount `json:"maxDiscountAmount,omitempty"`
    RuleOrder *int32 `json:"ruleOrder,omitempty"`
    
}

