package shared

type LoadBalancerTLSCertificateDomainStatusEnum string

const (
	LoadBalancerTLSCertificateDomainStatusEnumPendingValidation LoadBalancerTLSCertificateDomainStatusEnum = "PENDING_VALIDATION"
	LoadBalancerTLSCertificateDomainStatusEnumFailed            LoadBalancerTLSCertificateDomainStatusEnum = "FAILED"
	LoadBalancerTLSCertificateDomainStatusEnumSuccess           LoadBalancerTLSCertificateDomainStatusEnum = "SUCCESS"
)
