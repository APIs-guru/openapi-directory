package shared

// LoadBalancerTLSCertificateDomainValidationRecord
// Describes the validation record of each domain name in the SSL/TLS certificate.
type LoadBalancerTLSCertificateDomainValidationRecord struct {
	DomainName       *string                                     `json:"domainName,omitempty"`
	Name             *string                                     `json:"name,omitempty"`
	Type             *string                                     `json:"type,omitempty"`
	ValidationStatus *LoadBalancerTLSCertificateDomainStatusEnum `json:"validationStatus,omitempty"`
	Value            *string                                     `json:"value,omitempty"`
}
