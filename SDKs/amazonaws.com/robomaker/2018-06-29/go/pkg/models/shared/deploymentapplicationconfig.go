package shared

// DeploymentApplicationConfig
// Information about a deployment application configuration.
type DeploymentApplicationConfig struct {
	Application        string                 `json:"application"`
	ApplicationVersion string                 `json:"applicationVersion"`
	LaunchConfig       DeploymentLaunchConfig `json:"launchConfig"`
}
