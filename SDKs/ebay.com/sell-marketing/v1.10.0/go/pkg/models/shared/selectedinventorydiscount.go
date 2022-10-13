package shared

type SelectedInventoryDiscount struct {
	DiscountBenefit    *DiscountBenefit    `json:"discountBenefit"`
	DiscountID         *string             `json:"discountId"`
	InventoryCriterion *InventoryCriterion `json:"inventoryCriterion"`
	RuleOrder          *int32              `json:"ruleOrder"`
}
