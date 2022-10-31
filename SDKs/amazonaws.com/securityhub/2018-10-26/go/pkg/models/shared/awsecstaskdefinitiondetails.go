package shared

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
