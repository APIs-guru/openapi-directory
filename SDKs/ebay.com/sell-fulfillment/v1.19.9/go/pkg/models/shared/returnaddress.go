package shared

type ReturnAddress struct {
	AddressLine1    *string `json:"addressLine1"`
	AddressLine2    *string `json:"addressLine2"`
	City            *string `json:"city"`
	Country         *string `json:"country"`
	County          *string `json:"county"`
	FullName        *string `json:"fullName"`
	PostalCode      *string `json:"postalCode"`
	PrimaryPhone    *Phone  `json:"primaryPhone"`
	StateOrProvince *string `json:"stateOrProvince"`
}
