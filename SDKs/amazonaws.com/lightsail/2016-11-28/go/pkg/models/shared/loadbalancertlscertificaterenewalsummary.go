package shared

type LoadBalancerTLSCertificateRenewalSummary struct {
	DomainValidationOptions []LoadBalancerTLSCertificateDomainValidationOption `json:"domainValidationOptions"`
	RenewalStatus           *LoadBalancerTLSCertificateRenewalStatusEnum       `json:"renewalStatus"`
}
