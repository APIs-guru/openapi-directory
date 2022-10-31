package shared



type ContactAddress struct {
    AddressLine1 *string `json:"addressLine1,omitempty"`
    AddressLine2 *string `json:"addressLine2,omitempty"`
    City *string `json:"city,omitempty"`
    CountryCode *string `json:"countryCode,omitempty"`
    County *string `json:"county,omitempty"`
    PostalCode *string `json:"postalCode,omitempty"`
    StateOrProvince *string `json:"stateOrProvince,omitempty"`
    
}

