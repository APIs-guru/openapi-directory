package shared

type TaxAddress struct {
	City            *string `json:"city"`
	CountryCode     *string `json:"countryCode"`
	PostalCode      *string `json:"postalCode"`
	StateOrProvince *string `json:"stateOrProvince"`
}
