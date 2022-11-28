package shared

// Country
// Information about a country.
type Country struct {
	CountryCode *string `json:"CountryCode,omitempty"`
	CountryName *string `json:"CountryName,omitempty"`
}
