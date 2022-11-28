package shared

// AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails
// A host device to expose to the container.
type AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails struct {
	ContainerPath *string  `json:"ContainerPath,omitempty"`
	HostPath      *string  `json:"HostPath,omitempty"`
	Permissions   []string `json:"Permissions,omitempty"`
}
