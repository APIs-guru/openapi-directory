package shared

// SelectedInventoryDiscount
// This type defines the fields that describe the discounts applied to a set of inventory items and the order in which the selection rules are applied.
type SelectedInventoryDiscount struct {
	DiscountBenefit    *DiscountBenefit    `json:"discountBenefit,omitempty"`
	DiscountID         *string             `json:"discountId,omitempty"`
	InventoryCriterion *InventoryCriterion `json:"inventoryCriterion,omitempty"`
	RuleOrder          *int32              `json:"ruleOrder,omitempty"`
}
