package shared

import (
"time")

type DeliverabilityTestReport struct {
    CreateDate *time.Time `json:"CreateDate,omitempty"`
    DeliverabilityTestStatus *DeliverabilityTestStatusEnum `json:"DeliverabilityTestStatus,omitempty"`
    FromEmailAddress *string `json:"FromEmailAddress,omitempty"`
    ReportID *string `json:"ReportId,omitempty"`
    ReportName *string `json:"ReportName,omitempty"`
    Subject *string `json:"Subject,omitempty"`
    
}

