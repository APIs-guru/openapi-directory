package shared

import (
	"time"
)

type StartExecutionOutput struct {
	ExecutionArn string    `json:"executionArn"`
	StartDate    time.Time `json:"startDate"`
}
