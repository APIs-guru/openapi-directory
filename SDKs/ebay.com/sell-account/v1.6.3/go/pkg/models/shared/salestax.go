package shared

// SalesTax
// The applicable sales tax rate, as a percentage of the sale amount, for a given country and sales tax jurisdiction within that country.
type SalesTax struct {
	CountryCode              *string `json:"countryCode,omitempty"`
	SalesTaxJurisdictionID   *string `json:"salesTaxJurisdictionId,omitempty"`
	SalesTaxPercentage       *string `json:"salesTaxPercentage,omitempty"`
	ShippingAndHandlingTaxed *bool   `json:"shippingAndHandlingTaxed,omitempty"`
}
