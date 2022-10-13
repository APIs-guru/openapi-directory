package shared

import (
	"time"
)

type Engagement struct {
	ContactArn    string     `json:"ContactArn"`
	EngagementArn string     `json:"EngagementArn"`
	IncidentID    *string    `json:"IncidentId"`
	Sender        string     `json:"Sender"`
	StartTime     *time.Time `json:"StartTime"`
	StopTime      *time.Time `json:"StopTime"`
}
