package operations

import (
	"openapi/pkg/models/shared"
)

type RecipeAutoCompleteAllRecipesQueryParams struct {
	Limit int32  `queryParam:"style=form,explode=true,name=limit"`
	Query string `queryParam:"style=form,explode=true,name=query"`
}

type RecipeAutoCompleteAllRecipesRequest struct {
	QueryParams RecipeAutoCompleteAllRecipesQueryParams
}

type RecipeAutoCompleteAllRecipesResponse struct {
	BigOvenModelRecipeInfoTinies []shared.BigOvenModelRecipeInfoTiny
	Body                         []byte
	ContentType                  string
	StatusCode                   int64
}
