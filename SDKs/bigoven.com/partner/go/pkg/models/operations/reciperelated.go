package operations

import (
	"openapi/pkg/models/shared"
)

type RecipeRelatedPathParams struct {
	RecipeID int32 `pathParam:"style=simple,explode=false,name=recipeId"`
}

type RecipeRelatedQueryParams struct {
	Pg  *int32 `queryParam:"style=form,explode=true,name=pg"`
	Rpp *int32 `queryParam:"style=form,explode=true,name=rpp"`
}

type RecipeRelatedRequest struct {
	PathParams  RecipeRelatedPathParams
	QueryParams RecipeRelatedQueryParams
}

type RecipeRelatedResponse struct {
	BigOvenModelApi2RecipeSearchResult *shared.BigOvenModelApi2RecipeSearchResult
	Body                               []byte
	ContentType                        string
	StatusCode                         int64
}
