package shared

import (
	"time"
)

type AttackSummary struct {
	AttackID      *string                   `json:"AttackId"`
	AttackVectors []AttackVectorDescription `json:"AttackVectors"`
	EndTime       *time.Time                `json:"EndTime"`
	ResourceArn   *string                   `json:"ResourceArn"`
	StartTime     *time.Time                `json:"StartTime"`
}
