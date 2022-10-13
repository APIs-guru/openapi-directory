package shared

type CertificateRawData struct {
	PrivateKey        *string `json:"privateKey"`
	PublicCertificate *string `json:"publicCertificate"`
}
