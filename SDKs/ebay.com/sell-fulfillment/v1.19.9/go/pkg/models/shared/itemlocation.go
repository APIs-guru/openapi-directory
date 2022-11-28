package shared

// ItemLocation
// This type describes the physical location of an order.
type ItemLocation struct {
	CountryCode *string `json:"countryCode,omitempty"`
	Location    *string `json:"location,omitempty"`
	PostalCode  *string `json:"postalCode,omitempty"`
}
