package shared

// AwsCertificateManagerCertificateDomainValidationOption
// <p>Contains information about one of the following:</p> <ul> <li> <p>The initial validation of each domain name that occurs as a result of the <code>RequestCertificate</code> request</p> </li> <li> <p>The validation of each domain name in the certificate, as it pertains to Certificate Manager managed renewal</p> </li> </ul>
type AwsCertificateManagerCertificateDomainValidationOption struct {
	DomainName       *string                                         `json:"DomainName,omitempty"`
	ResourceRecord   *AwsCertificateManagerCertificateResourceRecord `json:"ResourceRecord,omitempty"`
	ValidationDomain *string                                         `json:"ValidationDomain,omitempty"`
	ValidationEmails []string                                        `json:"ValidationEmails,omitempty"`
	ValidationMethod *string                                         `json:"ValidationMethod,omitempty"`
	ValidationStatus *string                                         `json:"ValidationStatus,omitempty"`
}
