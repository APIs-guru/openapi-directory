package shared

import (
"time")

type DescribePageResult struct {
    ContactArn string `json:"ContactArn"`
    Content string `json:"Content"`
    DeliveryTime *time.Time `json:"DeliveryTime,omitempty"`
    EngagementArn string `json:"EngagementArn"`
    IncidentID *string `json:"IncidentId,omitempty"`
    PageArn string `json:"PageArn"`
    PublicContent *string `json:"PublicContent,omitempty"`
    PublicSubject *string `json:"PublicSubject,omitempty"`
    ReadTime *time.Time `json:"ReadTime,omitempty"`
    Sender string `json:"Sender"`
    SentTime *time.Time `json:"SentTime,omitempty"`
    Subject string `json:"Subject"`
    
}

