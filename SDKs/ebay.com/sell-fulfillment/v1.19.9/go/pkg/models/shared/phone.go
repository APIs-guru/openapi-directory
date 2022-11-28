package shared

// Phone
// This type is used by the returnAddress
type Phone struct {
	CountryCode *string `json:"countryCode,omitempty"`
	Number      *string `json:"number,omitempty"`
}
