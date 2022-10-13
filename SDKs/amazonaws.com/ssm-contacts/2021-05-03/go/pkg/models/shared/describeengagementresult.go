package shared

import (
	"time"
)

type DescribeEngagementResult struct {
	ContactArn    string     `json:"ContactArn"`
	Content       string     `json:"Content"`
	EngagementArn string     `json:"EngagementArn"`
	IncidentID    *string    `json:"IncidentId"`
	PublicContent *string    `json:"PublicContent"`
	PublicSubject *string    `json:"PublicSubject"`
	Sender        string     `json:"Sender"`
	StartTime     *time.Time `json:"StartTime"`
	StopTime      *time.Time `json:"StopTime"`
	Subject       string     `json:"Subject"`
}
