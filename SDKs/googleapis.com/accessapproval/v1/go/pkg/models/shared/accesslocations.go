package shared

// AccessLocations
// Home office and physical location of the principal.
type AccessLocations struct {
	PrincipalOfficeCountry           *string `json:"principalOfficeCountry,omitempty"`
	PrincipalPhysicalLocationCountry *string `json:"principalPhysicalLocationCountry,omitempty"`
}
