package shared

import (
	"time"
)

// Campaign
// Describes a deployed solution version, otherwise known as a campaign. For more information on campaigns, see <a>CreateCampaign</a>.
type Campaign struct {
	CampaignArn          *string                `json:"campaignArn,omitempty"`
	CampaignConfig       *CampaignConfig        `json:"campaignConfig,omitempty"`
	CreationDateTime     *time.Time             `json:"creationDateTime,omitempty"`
	FailureReason        *string                `json:"failureReason,omitempty"`
	LastUpdatedDateTime  *time.Time             `json:"lastUpdatedDateTime,omitempty"`
	LatestCampaignUpdate *CampaignUpdateSummary `json:"latestCampaignUpdate,omitempty"`
	MinProvisionedTps    *int64                 `json:"minProvisionedTPS,omitempty"`
	Name                 *string                `json:"name,omitempty"`
	SolutionVersionArn   *string                `json:"solutionVersionArn,omitempty"`
	Status               *string                `json:"status,omitempty"`
}
