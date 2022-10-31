package shared



type ProxyInfo struct {
    ExcludedHosts []string `json:"excludedHosts,omitempty"`
    Host *string `json:"host,omitempty"`
    PacURI *string `json:"pacUri,omitempty"`
    Port *int32 `json:"port,omitempty"`
    
}

