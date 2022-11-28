package shared

import (
	"time"
)

// ExecutionListItem
// Contains details about an execution.
type ExecutionListItem struct {
	ExecutionArn    string              `json:"executionArn"`
	Name            string              `json:"name"`
	StartDate       time.Time           `json:"startDate"`
	StateMachineArn string              `json:"stateMachineArn"`
	Status          ExecutionStatusEnum `json:"status"`
	StopDate        *time.Time          `json:"stopDate,omitempty"`
}
