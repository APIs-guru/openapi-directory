package operations

import (
	"openapi/pkg/models/shared"
)

type RecipeGetStepNumberQueryParams struct {
	RecipeID int32  `queryParam:"style=form,explode=true,name=recipeId"`
	UserName string `queryParam:"style=form,explode=true,name=userName"`
}

type RecipeGetStepNumberRequest struct {
	QueryParams RecipeGetStepNumberQueryParams
}

type RecipeGetStepNumberResponse struct {
	Api2Result  *shared.Api2Result
	Body        []byte
	ContentType string
	StatusCode  int64
}
