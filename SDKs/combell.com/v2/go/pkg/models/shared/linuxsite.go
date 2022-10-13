package shared

type LinuxSite struct {
	HostHeaders          []HostHeader `json:"host_headers"`
	Http2Enabled         *bool        `json:"http2_enabled"`
	HTTPSRedirectEnabled *bool        `json:"https_redirect_enabled"`
	Name                 *string      `json:"name"`
	Path                 *string      `json:"path"`
	SslEnabled           *bool        `json:"ssl_enabled"`
}
