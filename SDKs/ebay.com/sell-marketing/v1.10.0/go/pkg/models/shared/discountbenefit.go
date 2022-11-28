package shared

// DiscountBenefit
// This container defines the promotional discount as either a monetary amount or a percentage of the sales price. Important!: You must populate one and only one of the fields in this container: amountOffItem amountOffOrder percentageOffItem percentageOffOrder Tip: Refer to Configuring discounts for threshold promotions for information and examples on how to combine discountBenefit and discountSpecification values to create different types of promotions.
type DiscountBenefit struct {
	AmountOffItem      *Amount `json:"amountOffItem,omitempty"`
	AmountOffOrder     *Amount `json:"amountOffOrder,omitempty"`
	PercentageOffItem  *string `json:"percentageOffItem,omitempty"`
	PercentageOffOrder *string `json:"percentageOffOrder,omitempty"`
}
