package shared

// Phone
// The type that defines the fields for the details of a phone.
type Phone struct {
	CountryCode *string `json:"countryCode,omitempty"`
	Number      *string `json:"number,omitempty"`
	PhoneType   *string `json:"phoneType,omitempty"`
}
