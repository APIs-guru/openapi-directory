package shared

import (
	"time"
)

type Page struct {
	ContactArn    string     `json:"ContactArn"`
	DeliveryTime  *time.Time `json:"DeliveryTime"`
	EngagementArn string     `json:"EngagementArn"`
	IncidentID    *string    `json:"IncidentId"`
	PageArn       string     `json:"PageArn"`
	ReadTime      *time.Time `json:"ReadTime"`
	Sender        string     `json:"Sender"`
	SentTime      *time.Time `json:"SentTime"`
}
