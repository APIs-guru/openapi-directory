package shared

import (
	"time"
)

type ComplianceExecutionSummary struct {
	ExecutionID   *string   `json:"ExecutionId,omitempty"`
	ExecutionTime time.Time `json:"ExecutionTime"`
	ExecutionType *string   `json:"ExecutionType,omitempty"`
}
