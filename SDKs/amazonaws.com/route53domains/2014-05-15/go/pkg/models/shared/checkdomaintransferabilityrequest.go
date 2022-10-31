package shared



type CheckDomainTransferabilityRequest struct {
    AuthCode *string `json:"AuthCode,omitempty"`
    DomainName string `json:"DomainName"`
    
}

