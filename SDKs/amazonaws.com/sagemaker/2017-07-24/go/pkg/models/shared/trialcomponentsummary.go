package shared

import (
	"time"
)

// TrialComponentSummary
// A summary of the properties of a trial component. To get all the properties, call the <a>DescribeTrialComponent</a> API and provide the <code>TrialComponentName</code>.
type TrialComponentSummary struct {
	CreatedBy            *UserContext          `json:"CreatedBy,omitempty"`
	CreationTime         *time.Time            `json:"CreationTime,omitempty"`
	DisplayName          *string               `json:"DisplayName,omitempty"`
	EndTime              *time.Time            `json:"EndTime,omitempty"`
	LastModifiedBy       *UserContext          `json:"LastModifiedBy,omitempty"`
	LastModifiedTime     *time.Time            `json:"LastModifiedTime,omitempty"`
	StartTime            *time.Time            `json:"StartTime,omitempty"`
	Status               *TrialComponentStatus `json:"Status,omitempty"`
	TrialComponentArn    *string               `json:"TrialComponentArn,omitempty"`
	TrialComponentName   *string               `json:"TrialComponentName,omitempty"`
	TrialComponentSource *TrialComponentSource `json:"TrialComponentSource,omitempty"`
}
