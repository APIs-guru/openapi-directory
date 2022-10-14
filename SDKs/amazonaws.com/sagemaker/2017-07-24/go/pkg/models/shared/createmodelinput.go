package shared

type CreateModelInput struct {
	Containers               []ContainerDefinition     `json:"Containers,omitempty"`
	EnableNetworkIsolation   *bool                     `json:"EnableNetworkIsolation,omitempty"`
	ExecutionRoleArn         string                    `json:"ExecutionRoleArn"`
	InferenceExecutionConfig *InferenceExecutionConfig `json:"InferenceExecutionConfig,omitempty"`
	ModelName                string                    `json:"ModelName"`
	PrimaryContainer         *ContainerDefinition      `json:"PrimaryContainer,omitempty"`
	Tags                     []Tag                     `json:"Tags,omitempty"`
	VpcConfig                *VpcConfig                `json:"VpcConfig,omitempty"`
}
