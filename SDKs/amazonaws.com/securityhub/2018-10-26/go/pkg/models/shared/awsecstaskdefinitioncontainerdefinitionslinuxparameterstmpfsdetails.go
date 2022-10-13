package shared

type AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails struct {
	ContainerPath *string  `json:"ContainerPath"`
	MountOptions  []string `json:"MountOptions"`
	Size          *int64   `json:"Size"`
}
