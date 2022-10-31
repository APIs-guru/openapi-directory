package shared

type ItemLocation struct {
	CountryCode *string `json:"countryCode,omitempty"`
	Location    *string `json:"location,omitempty"`
	PostalCode  *string `json:"postalCode,omitempty"`
}
