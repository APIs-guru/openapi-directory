package shared

import (
	"time"
)

type Engagement struct {
	ContactArn    string     `json:"ContactArn"`
	EngagementArn string     `json:"EngagementArn"`
	IncidentID    *string    `json:"IncidentId,omitempty"`
	Sender        string     `json:"Sender"`
	StartTime     *time.Time `json:"StartTime,omitempty"`
	StopTime      *time.Time `json:"StopTime,omitempty"`
}
