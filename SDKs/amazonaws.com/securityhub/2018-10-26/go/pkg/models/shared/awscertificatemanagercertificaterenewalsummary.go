package shared

type AwsCertificateManagerCertificateRenewalSummary struct {
	DomainValidationOptions []AwsCertificateManagerCertificateDomainValidationOption `json:"DomainValidationOptions"`
	RenewalStatus           *string                                                  `json:"RenewalStatus"`
	RenewalStatusReason     *string                                                  `json:"RenewalStatusReason"`
	UpdatedAt               *string                                                  `json:"UpdatedAt"`
}
