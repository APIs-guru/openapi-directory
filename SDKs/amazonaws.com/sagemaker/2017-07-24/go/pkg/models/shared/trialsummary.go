package shared

import (
	"time"
)

// TrialSummary
// A summary of the properties of a trial. To get the complete set of properties, call the <a>DescribeTrial</a> API and provide the <code>TrialName</code>.
type TrialSummary struct {
	CreationTime     *time.Time   `json:"CreationTime,omitempty"`
	DisplayName      *string      `json:"DisplayName,omitempty"`
	LastModifiedTime *time.Time   `json:"LastModifiedTime,omitempty"`
	TrialArn         *string      `json:"TrialArn,omitempty"`
	TrialName        *string      `json:"TrialName,omitempty"`
	TrialSource      *TrialSource `json:"TrialSource,omitempty"`
}
