package shared

type AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails struct {
	Capabilities       *AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails `json:"Capabilities,omitempty"`
	Devices            []AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails     `json:"Devices,omitempty"`
	InitProcessEnabled *bool                                                                       `json:"InitProcessEnabled,omitempty"`
	MaxSwap            *int64                                                                      `json:"MaxSwap,omitempty"`
	SharedMemorySize   *int64                                                                      `json:"SharedMemorySize,omitempty"`
	Swappiness         *int64                                                                      `json:"Swappiness,omitempty"`
	Tmpfs              []AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails       `json:"Tmpfs,omitempty"`
}
