package shared

type AwsEcsTaskDefinitionDetails struct {
	ContainerDefinitions    []AwsEcsTaskDefinitionContainerDefinitionsDetails  `json:"ContainerDefinitions"`
	CPU                     *string                                            `json:"Cpu"`
	ExecutionRoleArn        *string                                            `json:"ExecutionRoleArn"`
	Family                  *string                                            `json:"Family"`
	InferenceAccelerators   []AwsEcsTaskDefinitionInferenceAcceleratorsDetails `json:"InferenceAccelerators"`
	IpcMode                 *string                                            `json:"IpcMode"`
	Memory                  *string                                            `json:"Memory"`
	NetworkMode             *string                                            `json:"NetworkMode"`
	PidMode                 *string                                            `json:"PidMode"`
	PlacementConstraints    []AwsEcsTaskDefinitionPlacementConstraintsDetails  `json:"PlacementConstraints"`
	ProxyConfiguration      *AwsEcsTaskDefinitionProxyConfigurationDetails     `json:"ProxyConfiguration"`
	RequiresCompatibilities []string                                           `json:"RequiresCompatibilities"`
	TaskRoleArn             *string                                            `json:"TaskRoleArn"`
	Volumes                 []AwsEcsTaskDefinitionVolumesDetails               `json:"Volumes"`
}
