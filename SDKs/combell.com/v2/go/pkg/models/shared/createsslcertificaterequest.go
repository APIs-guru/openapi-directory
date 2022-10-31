package shared



type CreateSslCertificateRequest struct {
    AdditionalValidationAttributes []AdditionalValidationAttribute `json:"additional_validation_attributes,omitempty"`
    CertificateType *SslCertificateTypeEnum `json:"certificate_type,omitempty"`
    Csr *string `json:"csr,omitempty"`
    ValidationLevel *SslCertificateValidationLevelEnum `json:"validation_level,omitempty"`
    
}

