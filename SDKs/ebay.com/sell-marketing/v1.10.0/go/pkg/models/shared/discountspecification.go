package shared

// DiscountSpecification
// This container defines the criteria for when the discounts of a promotion trigger, such as the minimum quantity the buyer must purchase before the promotion kicks in. The promotional discount is applied each time the criteria defined by this container is met. Note: When configuring the rules that govern when the discounts are applied, populate just one of the following fields in the discountSpecification container: minAmount minQuantity forEachQuantity forEachAmount Tip: Refer to Configuring discounts for threshold promotions for information and examples on how to combine discountBenefit and discountSpecification to create different types of promotions.
type DiscountSpecification struct {
	ForEachAmount           *Amount `json:"forEachAmount,omitempty"`
	ForEachQuantity         *int32  `json:"forEachQuantity,omitempty"`
	MinAmount               *Amount `json:"minAmount,omitempty"`
	MinQuantity             *int32  `json:"minQuantity,omitempty"`
	NumberOfDiscountedItems *int32  `json:"numberOfDiscountedItems,omitempty"`
}
