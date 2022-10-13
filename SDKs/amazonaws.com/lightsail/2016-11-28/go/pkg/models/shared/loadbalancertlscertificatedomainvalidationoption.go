package shared

type LoadBalancerTLSCertificateDomainValidationOption struct {
	DomainName       *string                                     `json:"domainName"`
	ValidationStatus *LoadBalancerTLSCertificateDomainStatusEnum `json:"validationStatus"`
}
