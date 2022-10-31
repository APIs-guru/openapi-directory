package shared



type SslCertificateRequestDetail struct {
    CertificateType *SslCertificateTypeEnum `json:"certificate_type,omitempty"`
    CommonName *string `json:"common_name,omitempty"`
    ID *int32 `json:"id,omitempty"`
    OrderCode *string `json:"order_code,omitempty"`
    SubjectAltNames []SslSubjectAltName `json:"subject_alt_names,omitempty"`
    ValidationLevel *SslCertificateValidationLevelEnum `json:"validation_level,omitempty"`
    Validations []SslCertificateRequestValidation `json:"validations,omitempty"`
    Vendor *SslCertificateVendorEnum `json:"vendor,omitempty"`
    
}

