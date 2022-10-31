package operations

import (
	"openapi/pkg/models/shared"
)

type RecipeAutoCompleteMyRecipesQueryParams struct {
	Limit int32  `queryParam:"style=form,explode=true,name=limit"`
	Query string `queryParam:"style=form,explode=true,name=query"`
}

type RecipeAutoCompleteMyRecipesRequest struct {
	QueryParams RecipeAutoCompleteMyRecipesQueryParams
}

type RecipeAutoCompleteMyRecipesResponse struct {
	BigOvenModelRecipeInfoTinies []shared.BigOvenModelRecipeInfoTiny
	Body                         []byte
	ContentType                  string
	StatusCode                   int64
}
