package shared

// SalesTaxBase
// A container that describes the how the sales tax rate is calculated.
type SalesTaxBase struct {
	SalesTaxPercentage       *string `json:"salesTaxPercentage,omitempty"`
	ShippingAndHandlingTaxed *bool   `json:"shippingAndHandlingTaxed,omitempty"`
}
