package shared

import (
	"time"
)

type Recipe struct {
	AlgorithmArn             *string    `json:"algorithmArn"`
	CreationDateTime         *time.Time `json:"creationDateTime"`
	Description              *string    `json:"description"`
	FeatureTransformationArn *string    `json:"featureTransformationArn"`
	LastUpdatedDateTime      *time.Time `json:"lastUpdatedDateTime"`
	Name                     *string    `json:"name"`
	RecipeArn                *string    `json:"recipeArn"`
	RecipeType               *string    `json:"recipeType"`
	Status                   *string    `json:"status"`
}
