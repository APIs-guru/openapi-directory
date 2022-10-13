package shared

import (
	"time"
)

type ExecutionListItem struct {
	ExecutionArn    string              `json:"executionArn"`
	Name            string              `json:"name"`
	StartDate       time.Time           `json:"startDate"`
	StateMachineArn string              `json:"stateMachineArn"`
	Status          ExecutionStatusEnum `json:"status"`
	StopDate        *time.Time          `json:"stopDate"`
}
