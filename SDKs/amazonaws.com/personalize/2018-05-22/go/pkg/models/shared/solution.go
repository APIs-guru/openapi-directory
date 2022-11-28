package shared

import (
	"time"
)

// Solution
// An object that provides information about a solution. A solution is a trained model that can be deployed as a campaign.
type Solution struct {
	AutoMlResult          *AutoMlResult           `json:"autoMLResult,omitempty"`
	CreationDateTime      *time.Time              `json:"creationDateTime,omitempty"`
	DatasetGroupArn       *string                 `json:"datasetGroupArn,omitempty"`
	EventType             *string                 `json:"eventType,omitempty"`
	LastUpdatedDateTime   *time.Time              `json:"lastUpdatedDateTime,omitempty"`
	LatestSolutionVersion *SolutionVersionSummary `json:"latestSolutionVersion,omitempty"`
	Name                  *string                 `json:"name,omitempty"`
	PerformAutoMl         *bool                   `json:"performAutoML,omitempty"`
	PerformHpo            *bool                   `json:"performHPO,omitempty"`
	RecipeArn             *string                 `json:"recipeArn,omitempty"`
	SolutionArn           *string                 `json:"solutionArn,omitempty"`
	SolutionConfig        *SolutionConfig         `json:"solutionConfig,omitempty"`
	Status                *string                 `json:"status,omitempty"`
}
