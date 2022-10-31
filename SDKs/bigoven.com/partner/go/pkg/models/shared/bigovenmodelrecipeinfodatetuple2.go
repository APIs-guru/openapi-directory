package shared

import (
"time")

type BigOvenModelRecipeInfoDateTuple2 struct {
    Date *time.Time `json:"date,omitempty"`
    RecipeInfo *BigOvenModelApi2RecipeInfox `json:"recipeInfo,omitempty"`
    
}

