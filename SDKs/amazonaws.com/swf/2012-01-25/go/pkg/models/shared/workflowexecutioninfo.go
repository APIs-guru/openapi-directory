package shared

import (
"time")

type WorkflowExecutionInfo struct {
    CancelRequested *bool `json:"cancelRequested,omitempty"`
    CloseStatus *CloseStatusEnum `json:"closeStatus,omitempty"`
    CloseTimestamp *time.Time `json:"closeTimestamp,omitempty"`
    Execution WorkflowExecution `json:"execution"`
    ExecutionStatus ExecutionStatusEnum `json:"executionStatus"`
    Parent *WorkflowExecution `json:"parent,omitempty"`
    StartTimestamp time.Time `json:"startTimestamp"`
    TagList []string `json:"tagList,omitempty"`
    WorkflowType WorkflowType `json:"workflowType"`
    
}

