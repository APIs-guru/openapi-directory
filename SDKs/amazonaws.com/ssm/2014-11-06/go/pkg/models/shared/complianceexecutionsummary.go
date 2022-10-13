package shared

import (
	"time"
)

type ComplianceExecutionSummary struct {
	ExecutionID   *string   `json:"ExecutionId"`
	ExecutionTime time.Time `json:"ExecutionTime"`
	ExecutionType *string   `json:"ExecutionType"`
}
