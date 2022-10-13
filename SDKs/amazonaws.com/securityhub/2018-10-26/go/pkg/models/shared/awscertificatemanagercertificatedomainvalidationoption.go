package shared

type AwsCertificateManagerCertificateDomainValidationOption struct {
	DomainName       *string                                         `json:"DomainName"`
	ResourceRecord   *AwsCertificateManagerCertificateResourceRecord `json:"ResourceRecord"`
	ValidationDomain *string                                         `json:"ValidationDomain"`
	ValidationEmails []string                                        `json:"ValidationEmails"`
	ValidationMethod *string                                         `json:"ValidationMethod"`
	ValidationStatus *string                                         `json:"ValidationStatus"`
}
