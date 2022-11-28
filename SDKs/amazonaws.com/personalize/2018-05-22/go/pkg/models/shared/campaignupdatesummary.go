package shared

import (
	"time"
)

// CampaignUpdateSummary
// Provides a summary of the properties of a campaign update. For a complete listing, call the <a>DescribeCampaign</a> API.
type CampaignUpdateSummary struct {
	CampaignConfig      *CampaignConfig `json:"campaignConfig,omitempty"`
	CreationDateTime    *time.Time      `json:"creationDateTime,omitempty"`
	FailureReason       *string         `json:"failureReason,omitempty"`
	LastUpdatedDateTime *time.Time      `json:"lastUpdatedDateTime,omitempty"`
	MinProvisionedTps   *int64          `json:"minProvisionedTPS,omitempty"`
	SolutionVersionArn  *string         `json:"solutionVersionArn,omitempty"`
	Status              *string         `json:"status,omitempty"`
}
