package shared

import (
	"time"
)

type RobotApplicationSummary struct {
	Arn                *string             `json:"arn"`
	LastUpdatedAt      *time.Time          `json:"lastUpdatedAt"`
	Name               *string             `json:"name"`
	RobotSoftwareSuite *RobotSoftwareSuite `json:"robotSoftwareSuite"`
	Version            *string             `json:"version"`
}
