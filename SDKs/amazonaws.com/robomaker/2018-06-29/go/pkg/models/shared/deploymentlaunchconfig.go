package shared

type DeploymentLaunchConfig struct {
	EnvironmentVariables map[string]string `json:"environmentVariables"`
	LaunchFile           string            `json:"launchFile"`
	PackageName          string            `json:"packageName"`
	PostLaunchFile       *string           `json:"postLaunchFile"`
	PreLaunchFile        *string           `json:"preLaunchFile"`
}
