package shared

// AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails
// The container path, mount options, and size (in MiB) of a tmpfs mount.
type AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails struct {
	ContainerPath *string  `json:"ContainerPath,omitempty"`
	MountOptions  []string `json:"MountOptions,omitempty"`
	Size          *int64   `json:"Size,omitempty"`
}
