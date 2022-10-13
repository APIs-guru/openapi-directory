package shared

import (
	"time"
)

type ExperimentParentLink struct {
	Href *string `json:"href"`
	Type *string `json:"type"`
}

type ExperimentVariations struct {
	Name   *string  `json:"name"`
	Status *string  `json:"status"`
	URL    *string  `json:"url"`
	Weight *float64 `json:"weight"`
	Won    *bool    `json:"won"`
}

type Experiment struct {
	AccountID                      *string                `json:"accountId"`
	Created                        *time.Time             `json:"created"`
	Description                    *string                `json:"description"`
	EditableInGaUI                 *bool                  `json:"editableInGaUi"`
	EndTime                        *time.Time             `json:"endTime"`
	EqualWeighting                 *bool                  `json:"equalWeighting"`
	ID                             *string                `json:"id"`
	InternalWebPropertyID          *string                `json:"internalWebPropertyId"`
	Kind                           *string                `json:"kind"`
	MinimumExperimentLengthInDays  *int32                 `json:"minimumExperimentLengthInDays"`
	Name                           *string                `json:"name"`
	ObjectiveMetric                *string                `json:"objectiveMetric"`
	OptimizationType               *string                `json:"optimizationType"`
	ParentLink                     *ExperimentParentLink  `json:"parentLink"`
	ProfileID                      *string                `json:"profileId"`
	ReasonExperimentEnded          *string                `json:"reasonExperimentEnded"`
	RewriteVariationUrlsAsOriginal *bool                  `json:"rewriteVariationUrlsAsOriginal"`
	SelfLink                       *string                `json:"selfLink"`
	ServingFramework               *string                `json:"servingFramework"`
	Snippet                        *string                `json:"snippet"`
	StartTime                      *time.Time             `json:"startTime"`
	Status                         *string                `json:"status"`
	TrafficCoverage                *float64               `json:"trafficCoverage"`
	Updated                        *time.Time             `json:"updated"`
	Variations                     []ExperimentVariations `json:"variations"`
	WebPropertyID                  *string                `json:"webPropertyId"`
	WinnerConfidenceLevel          *float64               `json:"winnerConfidenceLevel"`
	WinnerFound                    *bool                  `json:"winnerFound"`
}
