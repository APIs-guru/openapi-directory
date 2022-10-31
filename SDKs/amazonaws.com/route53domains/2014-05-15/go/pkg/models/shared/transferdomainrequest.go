package shared



type TransferDomainRequest struct {
    AdminContact ContactDetail `json:"AdminContact"`
    AuthCode *string `json:"AuthCode,omitempty"`
    AutoRenew *bool `json:"AutoRenew,omitempty"`
    DomainName string `json:"DomainName"`
    DurationInYears int64 `json:"DurationInYears"`
    IdnLangCode *string `json:"IdnLangCode,omitempty"`
    Nameservers []Nameserver `json:"Nameservers,omitempty"`
    PrivacyProtectAdminContact *bool `json:"PrivacyProtectAdminContact,omitempty"`
    PrivacyProtectRegistrantContact *bool `json:"PrivacyProtectRegistrantContact,omitempty"`
    PrivacyProtectTechContact *bool `json:"PrivacyProtectTechContact,omitempty"`
    RegistrantContact ContactDetail `json:"RegistrantContact"`
    TechContact ContactDetail `json:"TechContact"`
    
}

