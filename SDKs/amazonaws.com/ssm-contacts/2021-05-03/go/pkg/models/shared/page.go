package shared

import (
	"time"
)

type Page struct {
	ContactArn    string     `json:"ContactArn"`
	DeliveryTime  *time.Time `json:"DeliveryTime,omitempty"`
	EngagementArn string     `json:"EngagementArn"`
	IncidentID    *string    `json:"IncidentId,omitempty"`
	PageArn       string     `json:"PageArn"`
	ReadTime      *time.Time `json:"ReadTime,omitempty"`
	Sender        string     `json:"Sender"`
	SentTime      *time.Time `json:"SentTime,omitempty"`
}
