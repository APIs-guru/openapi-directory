package shared

type LoadBalancerTLSCertificateDomainValidationRecord struct {
	DomainName       *string                                     `json:"domainName"`
	Name             *string                                     `json:"name"`
	Type             *string                                     `json:"type"`
	ValidationStatus *LoadBalancerTLSCertificateDomainStatusEnum `json:"validationStatus"`
	Value            *string                                     `json:"value"`
}
