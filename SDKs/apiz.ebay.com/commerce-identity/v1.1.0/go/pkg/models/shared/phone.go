package shared

type Phone struct {
	CountryCode *string `json:"countryCode"`
	Number      *string `json:"number"`
	PhoneType   *string `json:"phoneType"`
}
