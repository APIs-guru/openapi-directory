package shared



type TaxAddress struct {
    City *string `json:"city,omitempty"`
    CountryCode *string `json:"countryCode,omitempty"`
    PostalCode *string `json:"postalCode,omitempty"`
    StateOrProvince *string `json:"stateOrProvince,omitempty"`
    
}

