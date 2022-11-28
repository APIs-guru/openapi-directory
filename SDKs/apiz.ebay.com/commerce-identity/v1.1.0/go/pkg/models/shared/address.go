package shared

// Address
// The type that defines the fields for an address.
type Address struct {
	AddressLine1    *string `json:"addressLine1,omitempty"`
	AddressLine2    *string `json:"addressLine2,omitempty"`
	City            *string `json:"city,omitempty"`
	Country         *string `json:"country,omitempty"`
	County          *string `json:"county,omitempty"`
	PostalCode      *string `json:"postalCode,omitempty"`
	StateOrProvince *string `json:"stateOrProvince,omitempty"`
}
