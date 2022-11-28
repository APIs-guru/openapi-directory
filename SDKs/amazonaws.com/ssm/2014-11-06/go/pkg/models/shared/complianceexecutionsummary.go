package shared

import (
	"time"
)

// ComplianceExecutionSummary
// A summary of the call execution that includes an execution ID, the type of execution (for example, <code>Command</code>), and the date/time of the execution using a datetime object that is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'.
type ComplianceExecutionSummary struct {
	ExecutionID   *string   `json:"ExecutionId,omitempty"`
	ExecutionTime time.Time `json:"ExecutionTime"`
	ExecutionType *string   `json:"ExecutionType,omitempty"`
}
