package shared

type SiteBinding struct {
	CertThumbprint *string `json:"cert_thumbprint"`
	HostName       *string `json:"host_name"`
	IPAddress      *string `json:"ip_address"`
	Port           *int32  `json:"port"`
	Protocol       *string `json:"protocol"`
	SslEnabled     *bool   `json:"ssl_enabled"`
}
