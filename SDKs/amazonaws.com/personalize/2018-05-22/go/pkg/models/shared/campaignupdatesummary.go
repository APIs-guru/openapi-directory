package shared

import (
	"time"
)

type CampaignUpdateSummary struct {
	CampaignConfig      *CampaignConfig `json:"campaignConfig,omitempty"`
	CreationDateTime    *time.Time      `json:"creationDateTime,omitempty"`
	FailureReason       *string         `json:"failureReason,omitempty"`
	LastUpdatedDateTime *time.Time      `json:"lastUpdatedDateTime,omitempty"`
	MinProvisionedTps   *int64          `json:"minProvisionedTPS,omitempty"`
	SolutionVersionArn  *string         `json:"solutionVersionArn,omitempty"`
	Status              *string         `json:"status,omitempty"`
}
