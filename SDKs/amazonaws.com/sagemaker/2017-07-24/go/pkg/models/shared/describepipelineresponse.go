package shared

import (
	"time"
)

type DescribePipelineResponse struct {
	CreatedBy           *UserContext        `json:"CreatedBy"`
	CreationTime        *time.Time          `json:"CreationTime"`
	LastModifiedBy      *UserContext        `json:"LastModifiedBy"`
	LastModifiedTime    *time.Time          `json:"LastModifiedTime"`
	LastRunTime         *time.Time          `json:"LastRunTime"`
	PipelineArn         *string             `json:"PipelineArn"`
	PipelineDefinition  *string             `json:"PipelineDefinition"`
	PipelineDescription *string             `json:"PipelineDescription"`
	PipelineDisplayName *string             `json:"PipelineDisplayName"`
	PipelineName        *string             `json:"PipelineName"`
	PipelineStatus      *PipelineStatusEnum `json:"PipelineStatus"`
	RoleArn             *string             `json:"RoleArn"`
}
