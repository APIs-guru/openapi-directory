package shared

import (
	"time"
)

type ActionSummary struct {
	ActionArn        *string           `json:"ActionArn"`
	ActionName       *string           `json:"ActionName"`
	ActionType       *string           `json:"ActionType"`
	CreationTime     *time.Time        `json:"CreationTime"`
	LastModifiedTime *time.Time        `json:"LastModifiedTime"`
	Source           *ActionSource     `json:"Source"`
	Status           *ActionStatusEnum `json:"Status"`
}
