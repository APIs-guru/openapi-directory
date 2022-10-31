package shared

import (
"time")

type DescribePipelineExecutionResponse struct {
    CreatedBy *UserContext `json:"CreatedBy,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    FailureReason *string `json:"FailureReason,omitempty"`
    LastModifiedBy *UserContext `json:"LastModifiedBy,omitempty"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    PipelineArn *string `json:"PipelineArn,omitempty"`
    PipelineExecutionArn *string `json:"PipelineExecutionArn,omitempty"`
    PipelineExecutionDescription *string `json:"PipelineExecutionDescription,omitempty"`
    PipelineExecutionDisplayName *string `json:"PipelineExecutionDisplayName,omitempty"`
    PipelineExecutionStatus *PipelineExecutionStatusEnum `json:"PipelineExecutionStatus,omitempty"`
    PipelineExperimentConfig *PipelineExperimentConfig `json:"PipelineExperimentConfig,omitempty"`
    
}

