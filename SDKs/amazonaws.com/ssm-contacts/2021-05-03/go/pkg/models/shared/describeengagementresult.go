package shared

import (
"time")

type DescribeEngagementResult struct {
    ContactArn string `json:"ContactArn"`
    Content string `json:"Content"`
    EngagementArn string `json:"EngagementArn"`
    IncidentID *string `json:"IncidentId,omitempty"`
    PublicContent *string `json:"PublicContent,omitempty"`
    PublicSubject *string `json:"PublicSubject,omitempty"`
    Sender string `json:"Sender"`
    StartTime *time.Time `json:"StartTime,omitempty"`
    StopTime *time.Time `json:"StopTime,omitempty"`
    Subject string `json:"Subject"`
    
}

