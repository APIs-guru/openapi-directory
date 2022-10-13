package shared

import (
	"time"
)

type WorkflowExecutionInfo struct {
	CancelRequested *bool               `json:"cancelRequested"`
	CloseStatus     *CloseStatusEnum    `json:"closeStatus"`
	CloseTimestamp  *time.Time          `json:"closeTimestamp"`
	Execution       WorkflowExecution   `json:"execution"`
	ExecutionStatus ExecutionStatusEnum `json:"executionStatus"`
	Parent          *WorkflowExecution  `json:"parent"`
	StartTimestamp  time.Time           `json:"startTimestamp"`
	TagList         []string            `json:"tagList"`
	WorkflowType    WorkflowType        `json:"workflowType"`
}
