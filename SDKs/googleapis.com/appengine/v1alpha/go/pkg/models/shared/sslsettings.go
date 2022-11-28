package shared

// SslSettings
// SSL configuration for a DomainMapping resource.
type SslSettings struct {
	CertificateID        *string `json:"certificateId,omitempty"`
	IsManagedCertificate *bool   `json:"isManagedCertificate,omitempty"`
}
