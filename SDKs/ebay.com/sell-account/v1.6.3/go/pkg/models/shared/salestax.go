package shared

type SalesTax struct {
	CountryCode              *string `json:"countryCode"`
	SalesTaxJurisdictionID   *string `json:"salesTaxJurisdictionId"`
	SalesTaxPercentage       *string `json:"salesTaxPercentage"`
	ShippingAndHandlingTaxed *bool   `json:"shippingAndHandlingTaxed"`
}
