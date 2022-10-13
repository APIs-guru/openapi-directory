package shared

import (
	"time"
)

type CampaignSummary struct {
	CampaignArn         *string    `json:"campaignArn"`
	CreationDateTime    *time.Time `json:"creationDateTime"`
	FailureReason       *string    `json:"failureReason"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime"`
	Name                *string    `json:"name"`
	Status              *string    `json:"status"`
}
