package shared

type LoadBalancerTLSCertificateStatusEnum string

const (
	LoadBalancerTLSCertificateStatusEnumPendingValidation  LoadBalancerTLSCertificateStatusEnum = "PENDING_VALIDATION"
	LoadBalancerTLSCertificateStatusEnumIssued             LoadBalancerTLSCertificateStatusEnum = "ISSUED"
	LoadBalancerTLSCertificateStatusEnumInactive           LoadBalancerTLSCertificateStatusEnum = "INACTIVE"
	LoadBalancerTLSCertificateStatusEnumExpired            LoadBalancerTLSCertificateStatusEnum = "EXPIRED"
	LoadBalancerTLSCertificateStatusEnumValidationTimedOut LoadBalancerTLSCertificateStatusEnum = "VALIDATION_TIMED_OUT"
	LoadBalancerTLSCertificateStatusEnumRevoked            LoadBalancerTLSCertificateStatusEnum = "REVOKED"
	LoadBalancerTLSCertificateStatusEnumFailed             LoadBalancerTLSCertificateStatusEnum = "FAILED"
	LoadBalancerTLSCertificateStatusEnumUnknown            LoadBalancerTLSCertificateStatusEnum = "UNKNOWN"
)
