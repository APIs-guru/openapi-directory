package shared



type AwsCertificateManagerCertificateDomainValidationOption struct {
    DomainName *string `json:"DomainName,omitempty"`
    ResourceRecord *AwsCertificateManagerCertificateResourceRecord `json:"ResourceRecord,omitempty"`
    ValidationDomain *string `json:"ValidationDomain,omitempty"`
    ValidationEmails []string `json:"ValidationEmails,omitempty"`
    ValidationMethod *string `json:"ValidationMethod,omitempty"`
    ValidationStatus *string `json:"ValidationStatus,omitempty"`
    
}

