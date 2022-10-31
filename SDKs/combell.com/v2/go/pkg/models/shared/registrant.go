package shared



type Registrant struct {
    Address *string `json:"address,omitempty"`
    City *string `json:"city,omitempty"`
    CompanyName *string `json:"company_name,omitempty"`
    CountryCode *string `json:"country_code,omitempty"`
    Email *string `json:"email,omitempty"`
    EnterpriseNumber *string `json:"enterprise_number,omitempty"`
    Fax *string `json:"fax,omitempty"`
    FirstName *string `json:"first_name,omitempty"`
    LanguageCode *string `json:"language_code,omitempty"`
    LastName *string `json:"last_name,omitempty"`
    Phone *string `json:"phone,omitempty"`
    PostalCode *string `json:"postal_code,omitempty"`
    
}

