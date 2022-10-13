package shared

type SslCertificateRequestValidation struct {
	AutoValidated          *bool                                    `json:"auto_validated"`
	CnameValidationContent *string                                  `json:"cname_validation_content"`
	CnameValidationName    *string                                  `json:"cname_validation_name"`
	DNSName                *string                                  `json:"dns_name"`
	EmailAddresses         []string                                 `json:"email_addresses"`
	FileValidationContent  []string                                 `json:"file_validation_content"`
	FileValidationURLHTTP  *string                                  `json:"file_validation_url_http"`
	FileValidationURLHTTPS *string                                  `json:"file_validation_url_https"`
	Type                   *SslCertificateRequestValidationTypeEnum `json:"type"`
}
