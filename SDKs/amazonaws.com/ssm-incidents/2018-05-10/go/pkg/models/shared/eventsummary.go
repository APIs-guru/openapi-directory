package shared

import (
	"time"
)

// EventSummary
// Details about a timeline event during an incident.
type EventSummary struct {
	EventID           string    `json:"eventId"`
	EventTime         time.Time `json:"eventTime"`
	EventType         string    `json:"eventType"`
	EventUpdatedTime  time.Time `json:"eventUpdatedTime"`
	IncidentRecordArn string    `json:"incidentRecordArn"`
}
