package shared

type Address struct {
	City            *string `json:"city"`
	Country         *string `json:"country"`
	PostalCode      *string `json:"postalCode"`
	StateOrProvince *string `json:"stateOrProvince"`
}
