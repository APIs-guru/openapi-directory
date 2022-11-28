package shared

// AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails
// A dependency that is defined for container startup and shutdown.
type AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails struct {
	Condition     *string `json:"Condition,omitempty"`
	ContainerName *string `json:"ContainerName,omitempty"`
}
