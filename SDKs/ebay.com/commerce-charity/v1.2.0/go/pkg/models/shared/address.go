package shared



type Address struct {
    City *string `json:"city,omitempty"`
    Country *string `json:"country,omitempty"`
    PostalCode *string `json:"postalCode,omitempty"`
    StateOrProvince *string `json:"stateOrProvince,omitempty"`
    
}

