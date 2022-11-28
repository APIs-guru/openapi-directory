package shared

import (
	"time"
)

// AttackSummary
// Summarizes all DDoS attacks for a specified time period.
type AttackSummary struct {
	AttackID      *string                   `json:"AttackId,omitempty"`
	AttackVectors []AttackVectorDescription `json:"AttackVectors,omitempty"`
	EndTime       *time.Time                `json:"EndTime,omitempty"`
	ResourceArn   *string                   `json:"ResourceArn,omitempty"`
	StartTime     *time.Time                `json:"StartTime,omitempty"`
}
