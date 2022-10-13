package shared

type RobotApplicationConfig struct {
	Application                    string                `json:"application"`
	ApplicationVersion             *string               `json:"applicationVersion"`
	LaunchConfig                   LaunchConfig          `json:"launchConfig"`
	Tools                          []Tool                `json:"tools"`
	UploadConfigurations           []UploadConfiguration `json:"uploadConfigurations"`
	UseDefaultTools                *bool                 `json:"useDefaultTools"`
	UseDefaultUploadConfigurations *bool                 `json:"useDefaultUploadConfigurations"`
}
