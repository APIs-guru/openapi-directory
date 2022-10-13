package shared

import (
	"time"
)

type Campaign struct {
	CampaignArn          *string                `json:"campaignArn"`
	CampaignConfig       *CampaignConfig        `json:"campaignConfig"`
	CreationDateTime     *time.Time             `json:"creationDateTime"`
	FailureReason        *string                `json:"failureReason"`
	LastUpdatedDateTime  *time.Time             `json:"lastUpdatedDateTime"`
	LatestCampaignUpdate *CampaignUpdateSummary `json:"latestCampaignUpdate"`
	MinProvisionedTps    *int64                 `json:"minProvisionedTPS"`
	Name                 *string                `json:"name"`
	SolutionVersionArn   *string                `json:"solutionVersionArn"`
	Status               *string                `json:"status"`
}
