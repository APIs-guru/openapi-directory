package shared

// AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails
// Information about a Docker volume.
type AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails struct {
	Autoprovision *bool             `json:"Autoprovision,omitempty"`
	Driver        *string           `json:"Driver,omitempty"`
	DriverOpts    map[string]string `json:"DriverOpts,omitempty"`
	Labels        map[string]string `json:"Labels,omitempty"`
	Scope         *string           `json:"Scope,omitempty"`
}
