package shared

type LoadBalancerTLSCertificateRevocationReasonEnum string

const (
	LoadBalancerTLSCertificateRevocationReasonEnumUnspecified          LoadBalancerTLSCertificateRevocationReasonEnum = "UNSPECIFIED"
	LoadBalancerTLSCertificateRevocationReasonEnumKeyCompromise        LoadBalancerTLSCertificateRevocationReasonEnum = "KEY_COMPROMISE"
	LoadBalancerTLSCertificateRevocationReasonEnumCaCompromise         LoadBalancerTLSCertificateRevocationReasonEnum = "CA_COMPROMISE"
	LoadBalancerTLSCertificateRevocationReasonEnumAffiliationChanged   LoadBalancerTLSCertificateRevocationReasonEnum = "AFFILIATION_CHANGED"
	LoadBalancerTLSCertificateRevocationReasonEnumSuperceded           LoadBalancerTLSCertificateRevocationReasonEnum = "SUPERCEDED"
	LoadBalancerTLSCertificateRevocationReasonEnumCessationOfOperation LoadBalancerTLSCertificateRevocationReasonEnum = "CESSATION_OF_OPERATION"
	LoadBalancerTLSCertificateRevocationReasonEnumCertificateHold      LoadBalancerTLSCertificateRevocationReasonEnum = "CERTIFICATE_HOLD"
	LoadBalancerTLSCertificateRevocationReasonEnumRemoveFromCrl        LoadBalancerTLSCertificateRevocationReasonEnum = "REMOVE_FROM_CRL"
	LoadBalancerTLSCertificateRevocationReasonEnumPrivilegeWithdrawn   LoadBalancerTLSCertificateRevocationReasonEnum = "PRIVILEGE_WITHDRAWN"
	LoadBalancerTLSCertificateRevocationReasonEnumAaCompromise         LoadBalancerTLSCertificateRevocationReasonEnum = "A_A_COMPROMISE"
)
