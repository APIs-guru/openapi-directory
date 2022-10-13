package shared

import (
	"time"
)

type DeliverabilityTestReport struct {
	CreateDate               *time.Time                    `json:"CreateDate"`
	DeliverabilityTestStatus *DeliverabilityTestStatusEnum `json:"DeliverabilityTestStatus"`
	FromEmailAddress         *string                       `json:"FromEmailAddress"`
	ReportID                 *string                       `json:"ReportId"`
	ReportName               *string                       `json:"ReportName"`
	Subject                  *string                       `json:"Subject"`
}
