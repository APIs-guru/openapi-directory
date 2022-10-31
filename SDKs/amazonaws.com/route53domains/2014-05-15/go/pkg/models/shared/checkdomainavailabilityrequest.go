package shared



type CheckDomainAvailabilityRequest struct {
    DomainName string `json:"DomainName"`
    IdnLangCode *string `json:"IdnLangCode,omitempty"`
    
}

