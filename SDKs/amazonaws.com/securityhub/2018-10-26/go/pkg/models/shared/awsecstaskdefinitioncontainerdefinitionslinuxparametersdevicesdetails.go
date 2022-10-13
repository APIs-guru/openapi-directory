package shared

type AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails struct {
	ContainerPath *string  `json:"ContainerPath"`
	HostPath      *string  `json:"HostPath"`
	Permissions   []string `json:"Permissions"`
}
