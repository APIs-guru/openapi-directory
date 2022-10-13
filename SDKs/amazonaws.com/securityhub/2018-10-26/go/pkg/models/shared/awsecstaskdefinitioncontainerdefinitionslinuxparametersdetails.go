package shared

type AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails struct {
	Capabilities       *AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails `json:"Capabilities"`
	Devices            []AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails     `json:"Devices"`
	InitProcessEnabled *bool                                                                       `json:"InitProcessEnabled"`
	MaxSwap            *int64                                                                      `json:"MaxSwap"`
	SharedMemorySize   *int64                                                                      `json:"SharedMemorySize"`
	Swappiness         *int64                                                                      `json:"Swappiness"`
	Tmpfs              []AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails       `json:"Tmpfs"`
}
