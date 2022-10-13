package shared

type SalesTaxBase struct {
	SalesTaxPercentage       *string `json:"salesTaxPercentage"`
	ShippingAndHandlingTaxed *bool   `json:"shippingAndHandlingTaxed"`
}
