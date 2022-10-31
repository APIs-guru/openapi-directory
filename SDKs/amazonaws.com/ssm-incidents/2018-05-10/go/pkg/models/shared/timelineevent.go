package shared

import (
"time")

type TimelineEvent struct {
    EventData string `json:"eventData"`
    EventID string `json:"eventId"`
    EventTime time.Time `json:"eventTime"`
    EventType string `json:"eventType"`
    EventUpdatedTime time.Time `json:"eventUpdatedTime"`
    IncidentRecordArn string `json:"incidentRecordArn"`
    
}

