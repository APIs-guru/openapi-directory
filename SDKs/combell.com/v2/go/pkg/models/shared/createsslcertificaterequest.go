package shared

type CreateSslCertificateRequest struct {
	AdditionalValidationAttributes []AdditionalValidationAttribute    `json:"additional_validation_attributes"`
	CertificateType                *SslCertificateTypeEnum            `json:"certificate_type"`
	Csr                            *string                            `json:"csr"`
	ValidationLevel                *SslCertificateValidationLevelEnum `json:"validation_level"`
}
