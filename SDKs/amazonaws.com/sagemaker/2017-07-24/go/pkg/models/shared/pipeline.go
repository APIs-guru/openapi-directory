package shared

import (
	"time"
)

type Pipeline struct {
	CreatedBy           *UserContext        `json:"CreatedBy"`
	CreationTime        *time.Time          `json:"CreationTime"`
	LastModifiedBy      *UserContext        `json:"LastModifiedBy"`
	LastModifiedTime    *time.Time          `json:"LastModifiedTime"`
	LastRunTime         *time.Time          `json:"LastRunTime"`
	PipelineArn         *string             `json:"PipelineArn"`
	PipelineDescription *string             `json:"PipelineDescription"`
	PipelineDisplayName *string             `json:"PipelineDisplayName"`
	PipelineName        *string             `json:"PipelineName"`
	PipelineStatus      *PipelineStatusEnum `json:"PipelineStatus"`
	RoleArn             *string             `json:"RoleArn"`
	Tags                []Tag               `json:"Tags"`
}
