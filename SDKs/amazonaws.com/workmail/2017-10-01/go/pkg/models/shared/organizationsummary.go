package shared

type OrganizationSummary struct {
	Alias             *string `json:"Alias"`
	DefaultMailDomain *string `json:"DefaultMailDomain"`
	ErrorMessage      *string `json:"ErrorMessage"`
	OrganizationID    *string `json:"OrganizationId"`
	State             *string `json:"State"`
}
