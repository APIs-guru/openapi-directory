package shared

import (
	"time"
)

type DescribeModelOutput struct {
	Containers               []ContainerDefinition     `json:"Containers,omitempty"`
	CreationTime             time.Time                 `json:"CreationTime"`
	EnableNetworkIsolation   *bool                     `json:"EnableNetworkIsolation,omitempty"`
	ExecutionRoleArn         string                    `json:"ExecutionRoleArn"`
	InferenceExecutionConfig *InferenceExecutionConfig `json:"InferenceExecutionConfig,omitempty"`
	ModelArn                 string                    `json:"ModelArn"`
	ModelName                string                    `json:"ModelName"`
	PrimaryContainer         *ContainerDefinition      `json:"PrimaryContainer,omitempty"`
	VpcConfig                *VpcConfig                `json:"VpcConfig,omitempty"`
}
