package shared

type Address struct {
	AddressLine1    *string `json:"addressLine1"`
	AddressLine2    *string `json:"addressLine2"`
	City            *string `json:"city"`
	Country         *string `json:"country"`
	County          *string `json:"county"`
	PostalCode      *string `json:"postalCode"`
	StateOrProvince *string `json:"stateOrProvince"`
}
