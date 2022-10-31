package shared



type SslCertificateRequestValidation struct {
    AutoValidated *bool `json:"auto_validated,omitempty"`
    CnameValidationContent *string `json:"cname_validation_content,omitempty"`
    CnameValidationName *string `json:"cname_validation_name,omitempty"`
    DNSName *string `json:"dns_name,omitempty"`
    EmailAddresses []string `json:"email_addresses,omitempty"`
    FileValidationContent []string `json:"file_validation_content,omitempty"`
    FileValidationURLHTTP *string `json:"file_validation_url_http,omitempty"`
    FileValidationURLHTTPS *string `json:"file_validation_url_https,omitempty"`
    Type *SslCertificateRequestValidationTypeEnum `json:"type,omitempty"`
    
}

