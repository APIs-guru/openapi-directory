package shared

// SiteBinding
// A site binding identifies a web domain.
type SiteBinding struct {
	CertThumbprint *string `json:"cert_thumbprint,omitempty"`
	HostName       *string `json:"host_name,omitempty"`
	IPAddress      *string `json:"ip_address,omitempty"`
	Port           *int32  `json:"port,omitempty"`
	Protocol       *string `json:"protocol,omitempty"`
	SslEnabled     *bool   `json:"ssl_enabled,omitempty"`
}
