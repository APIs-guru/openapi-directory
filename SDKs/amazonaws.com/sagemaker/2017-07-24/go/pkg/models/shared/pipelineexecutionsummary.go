package shared

import (
	"time"
)

// PipelineExecutionSummary
// A pipeline execution summary.
type PipelineExecutionSummary struct {
	PipelineExecutionArn         *string                      `json:"PipelineExecutionArn,omitempty"`
	PipelineExecutionDescription *string                      `json:"PipelineExecutionDescription,omitempty"`
	PipelineExecutionDisplayName *string                      `json:"PipelineExecutionDisplayName,omitempty"`
	PipelineExecutionStatus      *PipelineExecutionStatusEnum `json:"PipelineExecutionStatus,omitempty"`
	StartTime                    *time.Time                   `json:"StartTime,omitempty"`
}
