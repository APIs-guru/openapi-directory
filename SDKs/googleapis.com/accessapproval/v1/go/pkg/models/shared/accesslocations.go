package shared

type AccessLocations struct {
	PrincipalOfficeCountry           *string `json:"principalOfficeCountry,omitempty"`
	PrincipalPhysicalLocationCountry *string `json:"principalPhysicalLocationCountry,omitempty"`
}
