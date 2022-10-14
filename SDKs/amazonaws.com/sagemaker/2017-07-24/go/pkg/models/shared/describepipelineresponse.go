package shared

import (
	"time"
)

type DescribePipelineResponse struct {
	CreatedBy           *UserContext        `json:"CreatedBy,omitempty"`
	CreationTime        *time.Time          `json:"CreationTime,omitempty"`
	LastModifiedBy      *UserContext        `json:"LastModifiedBy,omitempty"`
	LastModifiedTime    *time.Time          `json:"LastModifiedTime,omitempty"`
	LastRunTime         *time.Time          `json:"LastRunTime,omitempty"`
	PipelineArn         *string             `json:"PipelineArn,omitempty"`
	PipelineDefinition  *string             `json:"PipelineDefinition,omitempty"`
	PipelineDescription *string             `json:"PipelineDescription,omitempty"`
	PipelineDisplayName *string             `json:"PipelineDisplayName,omitempty"`
	PipelineName        *string             `json:"PipelineName,omitempty"`
	PipelineStatus      *PipelineStatusEnum `json:"PipelineStatus,omitempty"`
	RoleArn             *string             `json:"RoleArn,omitempty"`
}
