package shared

import (
"time")

type PipelineSummary struct {
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    LastExecutionTime *time.Time `json:"LastExecutionTime,omitempty"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    PipelineArn *string `json:"PipelineArn,omitempty"`
    PipelineDescription *string `json:"PipelineDescription,omitempty"`
    PipelineDisplayName *string `json:"PipelineDisplayName,omitempty"`
    PipelineName *string `json:"PipelineName,omitempty"`
    RoleArn *string `json:"RoleArn,omitempty"`
    
}

