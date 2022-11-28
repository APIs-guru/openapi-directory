package shared

// AwsCertificateManagerCertificateRenewalSummary
// Contains information about the Certificate Manager managed renewal for an <code>AMAZON_ISSUED</code> certificate.
type AwsCertificateManagerCertificateRenewalSummary struct {
	DomainValidationOptions []AwsCertificateManagerCertificateDomainValidationOption `json:"DomainValidationOptions,omitempty"`
	RenewalStatus           *string                                                  `json:"RenewalStatus,omitempty"`
	RenewalStatusReason     *string                                                  `json:"RenewalStatusReason,omitempty"`
	UpdatedAt               *string                                                  `json:"UpdatedAt,omitempty"`
}
