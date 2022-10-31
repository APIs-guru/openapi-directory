package shared



type DeploymentLaunchConfig struct {
    EnvironmentVariables map[string]string `json:"environmentVariables,omitempty"`
    LaunchFile string `json:"launchFile"`
    PackageName string `json:"packageName"`
    PostLaunchFile *string `json:"postLaunchFile,omitempty"`
    PreLaunchFile *string `json:"preLaunchFile,omitempty"`
    
}

