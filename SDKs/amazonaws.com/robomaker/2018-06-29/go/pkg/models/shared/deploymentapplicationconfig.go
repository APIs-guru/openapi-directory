package shared



type DeploymentApplicationConfig struct {
    Application string `json:"application"`
    ApplicationVersion string `json:"applicationVersion"`
    LaunchConfig DeploymentLaunchConfig `json:"launchConfig"`
    
}

