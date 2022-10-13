package shared

type NumberValidateResponse struct {
	Carrier                     *string `json:"Carrier"`
	City                        *string `json:"City"`
	CleansedPhoneNumberE164     *string `json:"CleansedPhoneNumberE164"`
	CleansedPhoneNumberNational *string `json:"CleansedPhoneNumberNational"`
	Country                     *string `json:"Country"`
	CountryCodeIso2             *string `json:"CountryCodeIso2"`
	CountryCodeNumeric          *string `json:"CountryCodeNumeric"`
	County                      *string `json:"County"`
	OriginalCountryCodeIso2     *string `json:"OriginalCountryCodeIso2"`
	OriginalPhoneNumber         *string `json:"OriginalPhoneNumber"`
	PhoneType                   *string `json:"PhoneType"`
	PhoneTypeCode               *int64  `json:"PhoneTypeCode"`
	Timezone                    *string `json:"Timezone"`
	ZipCode                     *string `json:"ZipCode"`
}
