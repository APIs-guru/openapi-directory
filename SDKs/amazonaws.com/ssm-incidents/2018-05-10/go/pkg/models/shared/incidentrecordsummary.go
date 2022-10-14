package shared

import (
	"time"
)

type IncidentRecordSummary struct {
	Arn                  string                   `json:"arn"`
	CreationTime         time.Time                `json:"creationTime"`
	Impact               int64                    `json:"impact"`
	IncidentRecordSource IncidentRecordSource     `json:"incidentRecordSource"`
	ResolvedTime         *time.Time               `json:"resolvedTime,omitempty"`
	Status               IncidentRecordStatusEnum `json:"status"`
	Title                string                   `json:"title"`
}
