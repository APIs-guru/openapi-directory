package shared



type Phone struct {
    CountryCode *string `json:"countryCode,omitempty"`
    Number *string `json:"number,omitempty"`
    PhoneType *string `json:"phoneType,omitempty"`
    
}

