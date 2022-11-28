package shared

import (
	"time"
)

// IncidentRecordSummary
// Details describing an incident record.
type IncidentRecordSummary struct {
	Arn                  string                   `json:"arn"`
	CreationTime         time.Time                `json:"creationTime"`
	Impact               int64                    `json:"impact"`
	IncidentRecordSource IncidentRecordSource     `json:"incidentRecordSource"`
	ResolvedTime         *time.Time               `json:"resolvedTime,omitempty"`
	Status               IncidentRecordStatusEnum `json:"status"`
	Title                string                   `json:"title"`
}
