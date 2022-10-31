package shared

import (
	"time"
)

type CampaignSummary struct {
	CampaignArn         *string    `json:"campaignArn,omitempty"`
	CreationDateTime    *time.Time `json:"creationDateTime,omitempty"`
	FailureReason       *string    `json:"failureReason,omitempty"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
	Name                *string    `json:"name,omitempty"`
	Status              *string    `json:"status,omitempty"`
}
