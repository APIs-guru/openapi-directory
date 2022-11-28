package shared

import (
	"time"
)

// DeliverabilityTestReport
// An object that contains metadata related to a predictive inbox placement test.
type DeliverabilityTestReport struct {
	CreateDate               *time.Time                    `json:"CreateDate,omitempty"`
	DeliverabilityTestStatus *DeliverabilityTestStatusEnum `json:"DeliverabilityTestStatus,omitempty"`
	FromEmailAddress         *string                       `json:"FromEmailAddress,omitempty"`
	ReportID                 *string                       `json:"ReportId,omitempty"`
	ReportName               *string                       `json:"ReportName,omitempty"`
	Subject                  *string                       `json:"Subject,omitempty"`
}
