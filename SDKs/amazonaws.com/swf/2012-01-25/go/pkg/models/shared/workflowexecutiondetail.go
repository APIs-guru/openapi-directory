package shared

import (
	"time"
)

// WorkflowExecutionDetail
// Contains details about a workflow execution.
type WorkflowExecutionDetail struct {
	ExecutionConfiguration      WorkflowExecutionConfiguration `json:"executionConfiguration"`
	ExecutionInfo               WorkflowExecutionInfo          `json:"executionInfo"`
	LatestActivityTaskTimestamp *time.Time                     `json:"latestActivityTaskTimestamp,omitempty"`
	LatestExecutionContext      *string                        `json:"latestExecutionContext,omitempty"`
	OpenCounts                  WorkflowExecutionOpenCounts    `json:"openCounts"`
}
