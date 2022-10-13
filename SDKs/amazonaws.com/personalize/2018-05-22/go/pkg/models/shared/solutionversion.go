package shared

import (
	"time"
)

type SolutionVersion struct {
	CreationDateTime    *time.Time        `json:"creationDateTime"`
	DatasetGroupArn     *string           `json:"datasetGroupArn"`
	EventType           *string           `json:"eventType"`
	FailureReason       *string           `json:"failureReason"`
	LastUpdatedDateTime *time.Time        `json:"lastUpdatedDateTime"`
	PerformAutoMl       *bool             `json:"performAutoML"`
	PerformHpo          *bool             `json:"performHPO"`
	RecipeArn           *string           `json:"recipeArn"`
	SolutionArn         *string           `json:"solutionArn"`
	SolutionConfig      *SolutionConfig   `json:"solutionConfig"`
	SolutionVersionArn  *string           `json:"solutionVersionArn"`
	Status              *string           `json:"status"`
	TrainingHours       *float64          `json:"trainingHours"`
	TrainingMode        *TrainingModeEnum `json:"trainingMode"`
	TunedHpoParams      *TunedHpoParams   `json:"tunedHPOParams"`
}
