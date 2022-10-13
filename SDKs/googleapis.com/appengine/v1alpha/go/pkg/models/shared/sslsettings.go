package shared

type SslSettings struct {
	CertificateID        *string `json:"certificateId"`
	IsManagedCertificate *bool   `json:"isManagedCertificate"`
}
