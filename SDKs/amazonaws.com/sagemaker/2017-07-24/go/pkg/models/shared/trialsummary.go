package shared

import (
	"time"
)

type TrialSummary struct {
	CreationTime     *time.Time   `json:"CreationTime,omitempty"`
	DisplayName      *string      `json:"DisplayName,omitempty"`
	LastModifiedTime *time.Time   `json:"LastModifiedTime,omitempty"`
	TrialArn         *string      `json:"TrialArn,omitempty"`
	TrialName        *string      `json:"TrialName,omitempty"`
	TrialSource      *TrialSource `json:"TrialSource,omitempty"`
}
