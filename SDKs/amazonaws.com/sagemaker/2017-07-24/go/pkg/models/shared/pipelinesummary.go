package shared

import (
	"time"
)

type PipelineSummary struct {
	CreationTime        *time.Time `json:"CreationTime"`
	LastExecutionTime   *time.Time `json:"LastExecutionTime"`
	LastModifiedTime    *time.Time `json:"LastModifiedTime"`
	PipelineArn         *string    `json:"PipelineArn"`
	PipelineDescription *string    `json:"PipelineDescription"`
	PipelineDisplayName *string    `json:"PipelineDisplayName"`
	PipelineName        *string    `json:"PipelineName"`
	RoleArn             *string    `json:"RoleArn"`
}
