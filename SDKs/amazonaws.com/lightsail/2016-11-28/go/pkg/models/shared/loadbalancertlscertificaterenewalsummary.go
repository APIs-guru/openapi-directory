package shared



type LoadBalancerTLSCertificateRenewalSummary struct {
    DomainValidationOptions []LoadBalancerTLSCertificateDomainValidationOption `json:"domainValidationOptions,omitempty"`
    RenewalStatus *LoadBalancerTLSCertificateRenewalStatusEnum `json:"renewalStatus,omitempty"`
    
}

