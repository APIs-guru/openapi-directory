package shared

type ItemLocation struct {
	CountryCode *string `json:"countryCode"`
	Location    *string `json:"location"`
	PostalCode  *string `json:"postalCode"`
}
