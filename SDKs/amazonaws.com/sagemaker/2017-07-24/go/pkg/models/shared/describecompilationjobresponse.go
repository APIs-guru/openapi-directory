package shared

import (
"time")

type DescribeCompilationJobResponse struct {
    CompilationEndTime *time.Time `json:"CompilationEndTime,omitempty"`
    CompilationJobArn string `json:"CompilationJobArn"`
    CompilationJobName string `json:"CompilationJobName"`
    CompilationJobStatus CompilationJobStatusEnum `json:"CompilationJobStatus"`
    CompilationStartTime *time.Time `json:"CompilationStartTime,omitempty"`
    CreationTime time.Time `json:"CreationTime"`
    FailureReason string `json:"FailureReason"`
    InferenceImage *string `json:"InferenceImage,omitempty"`
    InputConfig InputConfig `json:"InputConfig"`
    LastModifiedTime time.Time `json:"LastModifiedTime"`
    ModelArtifacts ModelArtifacts `json:"ModelArtifacts"`
    ModelDigests *ModelDigests `json:"ModelDigests,omitempty"`
    OutputConfig OutputConfig `json:"OutputConfig"`
    RoleArn string `json:"RoleArn"`
    StoppingCondition StoppingCondition `json:"StoppingCondition"`
    VpcConfig *NeoVpcConfig `json:"VpcConfig,omitempty"`
    
}

