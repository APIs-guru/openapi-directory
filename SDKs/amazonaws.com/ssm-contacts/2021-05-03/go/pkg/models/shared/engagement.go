package shared

import (
	"time"
)

// Engagement
// Incident Manager reaching out to a contact or escalation plan to engage contact during an incident.
type Engagement struct {
	ContactArn    string     `json:"ContactArn"`
	EngagementArn string     `json:"EngagementArn"`
	IncidentID    *string    `json:"IncidentId,omitempty"`
	Sender        string     `json:"Sender"`
	StartTime     *time.Time `json:"StartTime,omitempty"`
	StopTime      *time.Time `json:"StopTime,omitempty"`
}
