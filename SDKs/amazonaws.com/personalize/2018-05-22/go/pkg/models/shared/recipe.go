package shared

import (
	"time"
)

type Recipe struct {
	AlgorithmArn             *string    `json:"algorithmArn,omitempty"`
	CreationDateTime         *time.Time `json:"creationDateTime,omitempty"`
	Description              *string    `json:"description,omitempty"`
	FeatureTransformationArn *string    `json:"featureTransformationArn,omitempty"`
	LastUpdatedDateTime      *time.Time `json:"lastUpdatedDateTime,omitempty"`
	Name                     *string    `json:"name,omitempty"`
	RecipeArn                *string    `json:"recipeArn,omitempty"`
	RecipeType               *string    `json:"recipeType,omitempty"`
	Status                   *string    `json:"status,omitempty"`
}
