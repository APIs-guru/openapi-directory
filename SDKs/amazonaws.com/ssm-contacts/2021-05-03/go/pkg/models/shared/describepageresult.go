package shared

import (
	"time"
)

type DescribePageResult struct {
	ContactArn    string     `json:"ContactArn"`
	Content       string     `json:"Content"`
	DeliveryTime  *time.Time `json:"DeliveryTime"`
	EngagementArn string     `json:"EngagementArn"`
	IncidentID    *string    `json:"IncidentId"`
	PageArn       string     `json:"PageArn"`
	PublicContent *string    `json:"PublicContent"`
	PublicSubject *string    `json:"PublicSubject"`
	ReadTime      *time.Time `json:"ReadTime"`
	Sender        string     `json:"Sender"`
	SentTime      *time.Time `json:"SentTime"`
	Subject       string     `json:"Subject"`
}
