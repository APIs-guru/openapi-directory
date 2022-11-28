package shared

// AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails
// A mount point for the data volumes in the container.
type AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails struct {
	ContainerPath *string `json:"ContainerPath,omitempty"`
	ReadOnly      *bool   `json:"ReadOnly,omitempty"`
	SourceVolume  *string `json:"SourceVolume,omitempty"`
}
