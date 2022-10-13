package shared

import (
	"time"
)

type DescribeCompilationJobResponse struct {
	CompilationEndTime   *time.Time               `json:"CompilationEndTime"`
	CompilationJobArn    string                   `json:"CompilationJobArn"`
	CompilationJobName   string                   `json:"CompilationJobName"`
	CompilationJobStatus CompilationJobStatusEnum `json:"CompilationJobStatus"`
	CompilationStartTime *time.Time               `json:"CompilationStartTime"`
	CreationTime         time.Time                `json:"CreationTime"`
	FailureReason        string                   `json:"FailureReason"`
	InferenceImage       *string                  `json:"InferenceImage"`
	InputConfig          InputConfig              `json:"InputConfig"`
	LastModifiedTime     time.Time                `json:"LastModifiedTime"`
	ModelArtifacts       ModelArtifacts           `json:"ModelArtifacts"`
	ModelDigests         *ModelDigests            `json:"ModelDigests"`
	OutputConfig         OutputConfig             `json:"OutputConfig"`
	RoleArn              string                   `json:"RoleArn"`
	StoppingCondition    StoppingCondition        `json:"StoppingCondition"`
	VpcConfig            *NeoVpcConfig            `json:"VpcConfig"`
}
