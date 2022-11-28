package shared

// AwsCertificateManagerCertificateDetails
// Provides details about an Certificate Manager certificate.
type AwsCertificateManagerCertificateDetails struct {
	CertificateAuthorityArn *string                                                  `json:"CertificateAuthorityArn,omitempty"`
	CreatedAt               *string                                                  `json:"CreatedAt,omitempty"`
	DomainName              *string                                                  `json:"DomainName,omitempty"`
	DomainValidationOptions []AwsCertificateManagerCertificateDomainValidationOption `json:"DomainValidationOptions,omitempty"`
	ExtendedKeyUsages       []AwsCertificateManagerCertificateExtendedKeyUsage       `json:"ExtendedKeyUsages,omitempty"`
	FailureReason           *string                                                  `json:"FailureReason,omitempty"`
	ImportedAt              *string                                                  `json:"ImportedAt,omitempty"`
	InUseBy                 []string                                                 `json:"InUseBy,omitempty"`
	IssuedAt                *string                                                  `json:"IssuedAt,omitempty"`
	Issuer                  *string                                                  `json:"Issuer,omitempty"`
	KeyAlgorithm            *string                                                  `json:"KeyAlgorithm,omitempty"`
	KeyUsages               []AwsCertificateManagerCertificateKeyUsage               `json:"KeyUsages,omitempty"`
	NotAfter                *string                                                  `json:"NotAfter,omitempty"`
	NotBefore               *string                                                  `json:"NotBefore,omitempty"`
	Options                 *AwsCertificateManagerCertificateOptions                 `json:"Options,omitempty"`
	RenewalEligibility      *string                                                  `json:"RenewalEligibility,omitempty"`
	RenewalSummary          *AwsCertificateManagerCertificateRenewalSummary          `json:"RenewalSummary,omitempty"`
	Serial                  *string                                                  `json:"Serial,omitempty"`
	SignatureAlgorithm      *string                                                  `json:"SignatureAlgorithm,omitempty"`
	Status                  *string                                                  `json:"Status,omitempty"`
	Subject                 *string                                                  `json:"Subject,omitempty"`
	SubjectAlternativeNames []string                                                 `json:"SubjectAlternativeNames,omitempty"`
	Type                    *string                                                  `json:"Type,omitempty"`
}
