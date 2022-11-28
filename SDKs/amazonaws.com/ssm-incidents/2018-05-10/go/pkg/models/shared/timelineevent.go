package shared

import (
	"time"
)

// TimelineEvent
// A significant event that happened during the incident.
type TimelineEvent struct {
	EventData         string    `json:"eventData"`
	EventID           string    `json:"eventId"`
	EventTime         time.Time `json:"eventTime"`
	EventType         string    `json:"eventType"`
	EventUpdatedTime  time.Time `json:"eventUpdatedTime"`
	IncidentRecordArn string    `json:"incidentRecordArn"`
}
