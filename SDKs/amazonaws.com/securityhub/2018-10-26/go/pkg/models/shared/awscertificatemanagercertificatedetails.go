package shared

type AwsCertificateManagerCertificateDetails struct {
	CertificateAuthorityArn *string                                                  `json:"CertificateAuthorityArn"`
	CreatedAt               *string                                                  `json:"CreatedAt"`
	DomainName              *string                                                  `json:"DomainName"`
	DomainValidationOptions []AwsCertificateManagerCertificateDomainValidationOption `json:"DomainValidationOptions"`
	ExtendedKeyUsages       []AwsCertificateManagerCertificateExtendedKeyUsage       `json:"ExtendedKeyUsages"`
	FailureReason           *string                                                  `json:"FailureReason"`
	ImportedAt              *string                                                  `json:"ImportedAt"`
	InUseBy                 []string                                                 `json:"InUseBy"`
	IssuedAt                *string                                                  `json:"IssuedAt"`
	Issuer                  *string                                                  `json:"Issuer"`
	KeyAlgorithm            *string                                                  `json:"KeyAlgorithm"`
	KeyUsages               []AwsCertificateManagerCertificateKeyUsage               `json:"KeyUsages"`
	NotAfter                *string                                                  `json:"NotAfter"`
	NotBefore               *string                                                  `json:"NotBefore"`
	Options                 *AwsCertificateManagerCertificateOptions                 `json:"Options"`
	RenewalEligibility      *string                                                  `json:"RenewalEligibility"`
	RenewalSummary          *AwsCertificateManagerCertificateRenewalSummary          `json:"RenewalSummary"`
	Serial                  *string                                                  `json:"Serial"`
	SignatureAlgorithm      *string                                                  `json:"SignatureAlgorithm"`
	Status                  *string                                                  `json:"Status"`
	Subject                 *string                                                  `json:"Subject"`
	SubjectAlternativeNames []string                                                 `json:"SubjectAlternativeNames"`
	Type                    *string                                                  `json:"Type"`
}
