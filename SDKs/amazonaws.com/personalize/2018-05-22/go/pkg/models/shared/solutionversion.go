package shared

import (
	"time"
)

// SolutionVersion
// An object that provides information about a specific version of a <a>Solution</a>.
type SolutionVersion struct {
	CreationDateTime    *time.Time        `json:"creationDateTime,omitempty"`
	DatasetGroupArn     *string           `json:"datasetGroupArn,omitempty"`
	EventType           *string           `json:"eventType,omitempty"`
	FailureReason       *string           `json:"failureReason,omitempty"`
	LastUpdatedDateTime *time.Time        `json:"lastUpdatedDateTime,omitempty"`
	PerformAutoMl       *bool             `json:"performAutoML,omitempty"`
	PerformHpo          *bool             `json:"performHPO,omitempty"`
	RecipeArn           *string           `json:"recipeArn,omitempty"`
	SolutionArn         *string           `json:"solutionArn,omitempty"`
	SolutionConfig      *SolutionConfig   `json:"solutionConfig,omitempty"`
	SolutionVersionArn  *string           `json:"solutionVersionArn,omitempty"`
	Status              *string           `json:"status,omitempty"`
	TrainingHours       *float64          `json:"trainingHours,omitempty"`
	TrainingMode        *TrainingModeEnum `json:"trainingMode,omitempty"`
	TunedHpoParams      *TunedHpoParams   `json:"tunedHPOParams,omitempty"`
}
