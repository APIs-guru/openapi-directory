package shared

type ProxyInfo struct {
	ExcludedHosts []string `json:"excludedHosts"`
	Host          *string  `json:"host"`
	PacURI        *string  `json:"pacUri"`
	Port          *int32   `json:"port"`
}
