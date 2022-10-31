package shared



type LoadBalancerTLSCertificateDomainValidationOption struct {
    DomainName *string `json:"domainName,omitempty"`
    ValidationStatus *LoadBalancerTLSCertificateDomainStatusEnum `json:"validationStatus,omitempty"`
    
}

