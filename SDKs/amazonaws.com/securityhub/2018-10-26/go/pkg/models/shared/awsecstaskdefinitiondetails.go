package shared

// AwsEcsTaskDefinitionDetails
// details about a task definition. A task definition describes the container and volume definitions of an Amazon Elastic Container Service task.
type AwsEcsTaskDefinitionDetails struct {
	ContainerDefinitions    []AwsEcsTaskDefinitionContainerDefinitionsDetails  `json:"ContainerDefinitions,omitempty"`
	CPU                     *string                                            `json:"Cpu,omitempty"`
	ExecutionRoleArn        *string                                            `json:"ExecutionRoleArn,omitempty"`
	Family                  *string                                            `json:"Family,omitempty"`
	InferenceAccelerators   []AwsEcsTaskDefinitionInferenceAcceleratorsDetails `json:"InferenceAccelerators,omitempty"`
	IpcMode                 *string                                            `json:"IpcMode,omitempty"`
	Memory                  *string                                            `json:"Memory,omitempty"`
	NetworkMode             *string                                            `json:"NetworkMode,omitempty"`
	PidMode                 *string                                            `json:"PidMode,omitempty"`
	PlacementConstraints    []AwsEcsTaskDefinitionPlacementConstraintsDetails  `json:"PlacementConstraints,omitempty"`
	ProxyConfiguration      *AwsEcsTaskDefinitionProxyConfigurationDetails     `json:"ProxyConfiguration,omitempty"`
	RequiresCompatibilities []string                                           `json:"RequiresCompatibilities,omitempty"`
	TaskRoleArn             *string                                            `json:"TaskRoleArn,omitempty"`
	Volumes                 []AwsEcsTaskDefinitionVolumesDetails               `json:"Volumes,omitempty"`
}
