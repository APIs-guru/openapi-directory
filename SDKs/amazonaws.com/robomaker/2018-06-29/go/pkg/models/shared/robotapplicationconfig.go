package shared



type RobotApplicationConfig struct {
    Application string `json:"application"`
    ApplicationVersion *string `json:"applicationVersion,omitempty"`
    LaunchConfig LaunchConfig `json:"launchConfig"`
    Tools []Tool `json:"tools,omitempty"`
    UploadConfigurations []UploadConfiguration `json:"uploadConfigurations,omitempty"`
    UseDefaultTools *bool `json:"useDefaultTools,omitempty"`
    UseDefaultUploadConfigurations *bool `json:"useDefaultUploadConfigurations,omitempty"`
    
}

