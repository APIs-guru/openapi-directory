package shared

type LaunchConfig struct {
	EnvironmentVariables map[string]string     `json:"environmentVariables,omitempty"`
	LaunchFile           string                `json:"launchFile"`
	PackageName          string                `json:"packageName"`
	PortForwardingConfig *PortForwardingConfig `json:"portForwardingConfig,omitempty"`
	StreamUI             *bool                 `json:"streamUI,omitempty"`
}
