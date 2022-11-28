package shared

// LoadBalancerTLSCertificateDomainValidationOption
// Contains information about the domain names on an SSL/TLS certificate that you will use to validate domain ownership.
type LoadBalancerTLSCertificateDomainValidationOption struct {
	DomainName       *string                                     `json:"domainName,omitempty"`
	ValidationStatus *LoadBalancerTLSCertificateDomainStatusEnum `json:"validationStatus,omitempty"`
}
