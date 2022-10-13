package shared

type CreateModelInput struct {
	Containers               []ContainerDefinition     `json:"Containers"`
	EnableNetworkIsolation   *bool                     `json:"EnableNetworkIsolation"`
	ExecutionRoleArn         string                    `json:"ExecutionRoleArn"`
	InferenceExecutionConfig *InferenceExecutionConfig `json:"InferenceExecutionConfig"`
	ModelName                string                    `json:"ModelName"`
	PrimaryContainer         *ContainerDefinition      `json:"PrimaryContainer"`
	Tags                     []Tag                     `json:"Tags"`
	VpcConfig                *VpcConfig                `json:"VpcConfig"`
}
