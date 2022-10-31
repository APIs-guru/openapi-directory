package shared



type LinuxSite struct {
    HostHeaders []HostHeader `json:"host_headers,omitempty"`
    Http2Enabled *bool `json:"http2_enabled,omitempty"`
    HTTPSRedirectEnabled *bool `json:"https_redirect_enabled,omitempty"`
    Name *string `json:"name,omitempty"`
    Path *string `json:"path,omitempty"`
    SslEnabled *bool `json:"ssl_enabled,omitempty"`
    
}

