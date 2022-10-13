package shared

type AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails struct {
	Autoprovision *bool             `json:"Autoprovision"`
	Driver        *string           `json:"Driver"`
	DriverOpts    map[string]string `json:"DriverOpts"`
	Labels        map[string]string `json:"Labels"`
	Scope         *string           `json:"Scope"`
}
