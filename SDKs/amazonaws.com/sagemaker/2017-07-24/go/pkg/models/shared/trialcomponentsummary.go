package shared

import (
	"time"
)

type TrialComponentSummary struct {
	CreatedBy            *UserContext          `json:"CreatedBy"`
	CreationTime         *time.Time            `json:"CreationTime"`
	DisplayName          *string               `json:"DisplayName"`
	EndTime              *time.Time            `json:"EndTime"`
	LastModifiedBy       *UserContext          `json:"LastModifiedBy"`
	LastModifiedTime     *time.Time            `json:"LastModifiedTime"`
	StartTime            *time.Time            `json:"StartTime"`
	Status               *TrialComponentStatus `json:"Status"`
	TrialComponentArn    *string               `json:"TrialComponentArn"`
	TrialComponentName   *string               `json:"TrialComponentName"`
	TrialComponentSource *TrialComponentSource `json:"TrialComponentSource"`
}
