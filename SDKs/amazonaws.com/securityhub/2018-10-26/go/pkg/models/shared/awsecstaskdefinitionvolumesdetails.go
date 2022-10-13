package shared

type AwsEcsTaskDefinitionVolumesDetails struct {
	DockerVolumeConfiguration *AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails `json:"DockerVolumeConfiguration"`
	EfsVolumeConfiguration    *AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails    `json:"EfsVolumeConfiguration"`
	Host                      *AwsEcsTaskDefinitionVolumesHostDetails                      `json:"Host"`
	Name                      *string                                                      `json:"Name"`
}
