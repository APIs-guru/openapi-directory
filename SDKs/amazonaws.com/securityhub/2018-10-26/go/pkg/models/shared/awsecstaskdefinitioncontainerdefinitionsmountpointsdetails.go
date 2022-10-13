package shared

type AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails struct {
	ContainerPath *string `json:"ContainerPath"`
	ReadOnly      *bool   `json:"ReadOnly"`
	SourceVolume  *string `json:"SourceVolume"`
}
