package shared

type DiscountBenefit struct {
	AmountOffItem      *Amount `json:"amountOffItem,omitempty"`
	AmountOffOrder     *Amount `json:"amountOffOrder,omitempty"`
	PercentageOffItem  *string `json:"percentageOffItem,omitempty"`
	PercentageOffOrder *string `json:"percentageOffOrder,omitempty"`
}
