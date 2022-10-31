package shared



type ContactInfo struct {
    ContactEmail *string `json:"contactEmail,omitempty"`
    DataProtectionOfficerEmail *string `json:"dataProtectionOfficerEmail,omitempty"`
    DataProtectionOfficerName *string `json:"dataProtectionOfficerName,omitempty"`
    DataProtectionOfficerPhone *string `json:"dataProtectionOfficerPhone,omitempty"`
    EuRepresentativeEmail *string `json:"euRepresentativeEmail,omitempty"`
    EuRepresentativeName *string `json:"euRepresentativeName,omitempty"`
    EuRepresentativePhone *string `json:"euRepresentativePhone,omitempty"`
    
}

