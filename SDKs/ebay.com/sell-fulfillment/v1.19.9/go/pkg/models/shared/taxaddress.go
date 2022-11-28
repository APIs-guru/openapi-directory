package shared

// TaxAddress
// This container consists of address information that can be used by sellers for tax purpose.
type TaxAddress struct {
	City            *string `json:"city,omitempty"`
	CountryCode     *string `json:"countryCode,omitempty"`
	PostalCode      *string `json:"postalCode,omitempty"`
	StateOrProvince *string `json:"stateOrProvince,omitempty"`
}
