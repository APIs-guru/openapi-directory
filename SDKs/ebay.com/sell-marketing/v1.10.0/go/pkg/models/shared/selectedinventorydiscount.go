package shared



type SelectedInventoryDiscount struct {
    DiscountBenefit *DiscountBenefit `json:"discountBenefit,omitempty"`
    DiscountID *string `json:"discountId,omitempty"`
    InventoryCriterion *InventoryCriterion `json:"inventoryCriterion,omitempty"`
    RuleOrder *int32 `json:"ruleOrder,omitempty"`
    
}

