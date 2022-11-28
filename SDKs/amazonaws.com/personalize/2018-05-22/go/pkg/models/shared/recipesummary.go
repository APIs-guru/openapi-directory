package shared

import (
	"time"
)

// RecipeSummary
// Provides a summary of the properties of a recipe. For a complete listing, call the <a>DescribeRecipe</a> API.
type RecipeSummary struct {
	CreationDateTime    *time.Time `json:"creationDateTime,omitempty"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
	Name                *string    `json:"name,omitempty"`
	RecipeArn           *string    `json:"recipeArn,omitempty"`
	Status              *string    `json:"status,omitempty"`
}
