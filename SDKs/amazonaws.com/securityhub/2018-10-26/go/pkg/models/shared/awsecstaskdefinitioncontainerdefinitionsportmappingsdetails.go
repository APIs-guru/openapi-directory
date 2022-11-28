package shared

// AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails
// A port mapping for the container.
type AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails struct {
	ContainerPort *int64  `json:"ContainerPort,omitempty"`
	HostPort      *int64  `json:"HostPort,omitempty"`
	Protocol      *string `json:"Protocol,omitempty"`
}
