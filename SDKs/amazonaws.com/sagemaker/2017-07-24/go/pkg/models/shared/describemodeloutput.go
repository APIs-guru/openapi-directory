package shared

import (
	"time"
)

type DescribeModelOutput struct {
	Containers               []ContainerDefinition     `json:"Containers"`
	CreationTime             time.Time                 `json:"CreationTime"`
	EnableNetworkIsolation   *bool                     `json:"EnableNetworkIsolation"`
	ExecutionRoleArn         string                    `json:"ExecutionRoleArn"`
	InferenceExecutionConfig *InferenceExecutionConfig `json:"InferenceExecutionConfig"`
	ModelArn                 string                    `json:"ModelArn"`
	ModelName                string                    `json:"ModelName"`
	PrimaryContainer         *ContainerDefinition      `json:"PrimaryContainer"`
	VpcConfig                *VpcConfig                `json:"VpcConfig"`
}
