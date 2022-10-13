package shared

type SslCertificateRequest struct {
	CertificateType *SslCertificateTypeEnum            `json:"certificate_type"`
	CommonName      *string                            `json:"common_name"`
	ID              *int32                             `json:"id"`
	OrderCode       *string                            `json:"order_code"`
	ValidationLevel *SslCertificateValidationLevelEnum `json:"validation_level"`
	Vendor          *SslCertificateVendorEnum          `json:"vendor"`
}
