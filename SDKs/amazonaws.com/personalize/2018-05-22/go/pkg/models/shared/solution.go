package shared

import (
	"time"
)

type Solution struct {
	AutoMlResult          *AutoMlResult           `json:"autoMLResult"`
	CreationDateTime      *time.Time              `json:"creationDateTime"`
	DatasetGroupArn       *string                 `json:"datasetGroupArn"`
	EventType             *string                 `json:"eventType"`
	LastUpdatedDateTime   *time.Time              `json:"lastUpdatedDateTime"`
	LatestSolutionVersion *SolutionVersionSummary `json:"latestSolutionVersion"`
	Name                  *string                 `json:"name"`
	PerformAutoMl         *bool                   `json:"performAutoML"`
	PerformHpo            *bool                   `json:"performHPO"`
	RecipeArn             *string                 `json:"recipeArn"`
	SolutionArn           *string                 `json:"solutionArn"`
	SolutionConfig        *SolutionConfig         `json:"solutionConfig"`
	Status                *string                 `json:"status"`
}
