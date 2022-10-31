package shared

type AwsEcsTaskDefinitionVolumesDetails struct {
	DockerVolumeConfiguration *AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails `json:"DockerVolumeConfiguration,omitempty"`
	EfsVolumeConfiguration    *AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails    `json:"EfsVolumeConfiguration,omitempty"`
	Host                      *AwsEcsTaskDefinitionVolumesHostDetails                      `json:"Host,omitempty"`
	Name                      *string                                                      `json:"Name,omitempty"`
}
