package shared

type SalesTax struct {
	CountryCode              *string `json:"countryCode,omitempty"`
	SalesTaxJurisdictionID   *string `json:"salesTaxJurisdictionId,omitempty"`
	SalesTaxPercentage       *string `json:"salesTaxPercentage,omitempty"`
	ShippingAndHandlingTaxed *bool   `json:"shippingAndHandlingTaxed,omitempty"`
}
