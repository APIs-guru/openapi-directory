package shared

import (
	"time"
)

type PipelineExecutionSummary struct {
	PipelineExecutionArn         *string                      `json:"PipelineExecutionArn"`
	PipelineExecutionDescription *string                      `json:"PipelineExecutionDescription"`
	PipelineExecutionDisplayName *string                      `json:"PipelineExecutionDisplayName"`
	PipelineExecutionStatus      *PipelineExecutionStatusEnum `json:"PipelineExecutionStatus"`
	StartTime                    *time.Time                   `json:"StartTime"`
}
