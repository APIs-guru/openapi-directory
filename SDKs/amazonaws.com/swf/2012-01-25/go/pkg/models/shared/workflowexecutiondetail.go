package shared

import (
	"time"
)

type WorkflowExecutionDetail struct {
	ExecutionConfiguration      WorkflowExecutionConfiguration `json:"executionConfiguration"`
	ExecutionInfo               WorkflowExecutionInfo          `json:"executionInfo"`
	LatestActivityTaskTimestamp *time.Time                     `json:"latestActivityTaskTimestamp"`
	LatestExecutionContext      *string                        `json:"latestExecutionContext"`
	OpenCounts                  WorkflowExecutionOpenCounts    `json:"openCounts"`
}
