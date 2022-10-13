package shared

import (
	"time"
)

type RecipeSummary struct {
	CreationDateTime    *time.Time `json:"creationDateTime"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime"`
	Name                *string    `json:"name"`
	RecipeArn           *string    `json:"recipeArn"`
	Status              *string    `json:"status"`
}
