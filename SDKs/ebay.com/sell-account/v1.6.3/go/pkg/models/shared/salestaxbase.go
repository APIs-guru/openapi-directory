package shared



type SalesTaxBase struct {
    SalesTaxPercentage *string `json:"salesTaxPercentage,omitempty"`
    ShippingAndHandlingTaxed *bool `json:"shippingAndHandlingTaxed,omitempty"`
    
}

