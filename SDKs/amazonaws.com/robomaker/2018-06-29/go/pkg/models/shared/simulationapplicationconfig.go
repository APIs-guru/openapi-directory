package shared

type SimulationApplicationConfig struct {
	Application                    string                `json:"application"`
	ApplicationVersion             *string               `json:"applicationVersion"`
	LaunchConfig                   LaunchConfig          `json:"launchConfig"`
	Tools                          []Tool                `json:"tools"`
	UploadConfigurations           []UploadConfiguration `json:"uploadConfigurations"`
	UseDefaultTools                *bool                 `json:"useDefaultTools"`
	UseDefaultUploadConfigurations *bool                 `json:"useDefaultUploadConfigurations"`
	WorldConfigs                   []WorldConfig         `json:"worldConfigs"`
}
