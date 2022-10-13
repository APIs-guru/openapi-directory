package shared

type SslCertificateRequestDetail struct {
	CertificateType *SslCertificateTypeEnum            `json:"certificate_type"`
	CommonName      *string                            `json:"common_name"`
	ID              *int32                             `json:"id"`
	OrderCode       *string                            `json:"order_code"`
	SubjectAltNames []SslSubjectAltName                `json:"subject_alt_names"`
	ValidationLevel *SslCertificateValidationLevelEnum `json:"validation_level"`
	Validations     []SslCertificateRequestValidation  `json:"validations"`
	Vendor          *SslCertificateVendorEnum          `json:"vendor"`
}
