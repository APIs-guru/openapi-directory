package shared

type ContactAddress struct {
	AddressLine1    *string `json:"addressLine1"`
	AddressLine2    *string `json:"addressLine2"`
	City            *string `json:"city"`
	CountryCode     *string `json:"countryCode"`
	County          *string `json:"county"`
	PostalCode      *string `json:"postalCode"`
	StateOrProvince *string `json:"stateOrProvince"`
}
