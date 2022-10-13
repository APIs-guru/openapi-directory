package shared

import (
	"time"
)

type BigOvenModelRecipeInfoDateTuple2 struct {
	Date       *time.Time                   `json:"date"`
	RecipeInfo *BigOvenModelApi2RecipeInfox `json:"recipeInfo"`
}
