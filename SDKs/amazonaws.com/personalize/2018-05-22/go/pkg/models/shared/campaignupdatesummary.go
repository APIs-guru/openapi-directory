package shared

import (
	"time"
)

type CampaignUpdateSummary struct {
	CampaignConfig      *CampaignConfig `json:"campaignConfig"`
	CreationDateTime    *time.Time      `json:"creationDateTime"`
	FailureReason       *string         `json:"failureReason"`
	LastUpdatedDateTime *time.Time      `json:"lastUpdatedDateTime"`
	MinProvisionedTps   *int64          `json:"minProvisionedTPS"`
	SolutionVersionArn  *string         `json:"solutionVersionArn"`
	Status              *string         `json:"status"`
}
