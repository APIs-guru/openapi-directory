package shared

import (
	"time"
)

type EventSummary struct {
	EventID           string    `json:"eventId"`
	EventTime         time.Time `json:"eventTime"`
	EventType         string    `json:"eventType"`
	EventUpdatedTime  time.Time `json:"eventUpdatedTime"`
	IncidentRecordArn string    `json:"incidentRecordArn"`
}
