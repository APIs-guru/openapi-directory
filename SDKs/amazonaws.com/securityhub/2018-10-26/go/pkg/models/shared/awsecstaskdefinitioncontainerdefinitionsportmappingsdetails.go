package shared

type AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails struct {
	ContainerPort *int64  `json:"ContainerPort"`
	HostPort      *int64  `json:"HostPort"`
	Protocol      *string `json:"Protocol"`
}
