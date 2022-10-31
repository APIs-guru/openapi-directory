package shared



type ReturnAddress struct {
    AddressLine1 *string `json:"addressLine1,omitempty"`
    AddressLine2 *string `json:"addressLine2,omitempty"`
    City *string `json:"city,omitempty"`
    Country *string `json:"country,omitempty"`
    County *string `json:"county,omitempty"`
    FullName *string `json:"fullName,omitempty"`
    PostalCode *string `json:"postalCode,omitempty"`
    PrimaryPhone *Phone `json:"primaryPhone,omitempty"`
    StateOrProvince *string `json:"stateOrProvince,omitempty"`
    
}

