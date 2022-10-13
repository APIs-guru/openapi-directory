package shared

import (
	"time"
)

type TrialSummary struct {
	CreationTime     *time.Time   `json:"CreationTime"`
	DisplayName      *string      `json:"DisplayName"`
	LastModifiedTime *time.Time   `json:"LastModifiedTime"`
	TrialArn         *string      `json:"TrialArn"`
	TrialName        *string      `json:"TrialName"`
	TrialSource      *TrialSource `json:"TrialSource"`
}
