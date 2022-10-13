package operations

import (
	"openapi/pkg/models/shared"
)

type RecipeGetStepsQueryParams struct {
	RecipeID int32  `queryParam:"style=form,explode=true,name=recipeId"`
	StepID   int32  `queryParam:"style=form,explode=true,name=stepId"`
	UserName string `queryParam:"style=form,explode=true,name=userName"`
}

type RecipeGetStepsRequest struct {
	QueryParams RecipeGetStepsQueryParams
}

type RecipeGetStepsResponse struct {
	BigOvenResult *shared.BigOvenResult
	Body          []byte
	ContentType   string
	StatusCode    int64
}
