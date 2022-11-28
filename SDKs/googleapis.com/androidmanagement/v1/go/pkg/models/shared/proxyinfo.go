package shared

// ProxyInfo
// Configuration info for an HTTP proxy. For a direct proxy, set the host, port, and excluded_hosts fields. For a PAC script proxy, set the pac_uri field.
type ProxyInfo struct {
	ExcludedHosts []string `json:"excludedHosts,omitempty"`
	Host          *string  `json:"host,omitempty"`
	PacURI        *string  `json:"pacUri,omitempty"`
	Port          *int32   `json:"port,omitempty"`
}
