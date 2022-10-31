package shared



type ExtendedContact struct {
    CompanyName *string `json:"companyName,omitempty"`
    ContactAddress *Address `json:"contactAddress,omitempty"`
    Email *string `json:"email,omitempty"`
    FullName *string `json:"fullName,omitempty"`
    PrimaryPhone *PhoneNumber `json:"primaryPhone,omitempty"`
    
}

