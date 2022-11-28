package shared

import (
	"time"
)

// Recipe
// Provides information about a recipe. Each recipe provides an algorithm that Amazon Personalize uses in model training when you use the <a>CreateSolution</a> operation.
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
