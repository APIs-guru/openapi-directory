package shared

type LaunchConfig struct {
	EnvironmentVariables map[string]string     `json:"environmentVariables"`
	LaunchFile           string                `json:"launchFile"`
	PackageName          string                `json:"packageName"`
	PortForwardingConfig *PortForwardingConfig `json:"portForwardingConfig"`
	StreamUI             *bool                 `json:"streamUI"`
}
