package shared



type ContactDetail struct {
    AddressLine1 *string `json:"AddressLine1,omitempty"`
    AddressLine2 *string `json:"AddressLine2,omitempty"`
    City *string `json:"City,omitempty"`
    ContactType *ContactTypeEnum `json:"ContactType,omitempty"`
    CountryCode *CountryCodeEnum `json:"CountryCode,omitempty"`
    Email *string `json:"Email,omitempty"`
    ExtraParams []ExtraParam `json:"ExtraParams,omitempty"`
    Fax *string `json:"Fax,omitempty"`
    FirstName *string `json:"FirstName,omitempty"`
    LastName *string `json:"LastName,omitempty"`
    OrganizationName *string `json:"OrganizationName,omitempty"`
    PhoneNumber *string `json:"PhoneNumber,omitempty"`
    State *string `json:"State,omitempty"`
    ZipCode *string `json:"ZipCode,omitempty"`
    
}

