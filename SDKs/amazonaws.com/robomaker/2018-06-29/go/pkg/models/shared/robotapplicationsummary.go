package shared

import (
	"time"
)

// RobotApplicationSummary
// Summary information for a robot application.
type RobotApplicationSummary struct {
	Arn                *string             `json:"arn,omitempty"`
	LastUpdatedAt      *time.Time          `json:"lastUpdatedAt,omitempty"`
	Name               *string             `json:"name,omitempty"`
	RobotSoftwareSuite *RobotSoftwareSuite `json:"robotSoftwareSuite,omitempty"`
	Version            *string             `json:"version,omitempty"`
}
