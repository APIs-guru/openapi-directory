package shared

type DiscountBenefit struct {
	AmountOffItem      *Amount `json:"amountOffItem"`
	AmountOffOrder     *Amount `json:"amountOffOrder"`
	PercentageOffItem  *string `json:"percentageOffItem"`
	PercentageOffOrder *string `json:"percentageOffOrder"`
}
