package shared

type SslCertificateRequest struct {
	CertificateType *SslCertificateTypeEnum            `json:"certificate_type,omitempty"`
	CommonName      *string                            `json:"common_name,omitempty"`
	ID              *int32                             `json:"id,omitempty"`
	OrderCode       *string                            `json:"order_code,omitempty"`
	ValidationLevel *SslCertificateValidationLevelEnum `json:"validation_level,omitempty"`
	Vendor          *SslCertificateVendorEnum          `json:"vendor,omitempty"`
}
