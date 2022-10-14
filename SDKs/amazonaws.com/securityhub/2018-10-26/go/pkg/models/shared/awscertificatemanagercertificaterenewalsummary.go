package shared

type AwsCertificateManagerCertificateRenewalSummary struct {
	DomainValidationOptions []AwsCertificateManagerCertificateDomainValidationOption `json:"DomainValidationOptions,omitempty"`
	RenewalStatus           *string                                                  `json:"RenewalStatus,omitempty"`
	RenewalStatusReason     *string                                                  `json:"RenewalStatusReason,omitempty"`
	UpdatedAt               *string                                                  `json:"UpdatedAt,omitempty"`
}
