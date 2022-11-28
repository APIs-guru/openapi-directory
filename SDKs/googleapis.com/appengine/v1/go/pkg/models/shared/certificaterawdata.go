package shared

// CertificateRawData
// An SSL certificate obtained from a certificate authority.
type CertificateRawData struct {
	PrivateKey        *string `json:"privateKey,omitempty"`
	PublicCertificate *string `json:"publicCertificate,omitempty"`
}
