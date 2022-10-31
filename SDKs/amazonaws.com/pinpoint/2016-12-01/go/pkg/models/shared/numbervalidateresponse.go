package shared

type NumberValidateResponse struct {
	Carrier                     *string `json:"Carrier,omitempty"`
	City                        *string `json:"City,omitempty"`
	CleansedPhoneNumberE164     *string `json:"CleansedPhoneNumberE164,omitempty"`
	CleansedPhoneNumberNational *string `json:"CleansedPhoneNumberNational,omitempty"`
	Country                     *string `json:"Country,omitempty"`
	CountryCodeIso2             *string `json:"CountryCodeIso2,omitempty"`
	CountryCodeNumeric          *string `json:"CountryCodeNumeric,omitempty"`
	County                      *string `json:"County,omitempty"`
	OriginalCountryCodeIso2     *string `json:"OriginalCountryCodeIso2,omitempty"`
	OriginalPhoneNumber         *string `json:"OriginalPhoneNumber,omitempty"`
	PhoneType                   *string `json:"PhoneType,omitempty"`
	PhoneTypeCode               *int64  `json:"PhoneTypeCode,omitempty"`
	Timezone                    *string `json:"Timezone,omitempty"`
	ZipCode                     *string `json:"ZipCode,omitempty"`
}
