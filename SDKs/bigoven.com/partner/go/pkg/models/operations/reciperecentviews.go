package operations

import (
	"openapi/pkg/models/shared"
)

type RecipeRecentViewsQueryParams struct {
	Pg  *int32 `queryParam:"style=form,explode=true,name=pg"`
	Rpp *int32 `queryParam:"style=form,explode=true,name=rpp"`
}

type RecipeRecentViewsRequest struct {
	QueryParams RecipeRecentViewsQueryParams
}

type RecipeRecentViewsResponse struct {
	BigOvenModelRecipeInfoDateTuple2s []shared.BigOvenModelRecipeInfoDateTuple2
	Body                              []byte
	ContentType                       string
	StatusCode                        int64
}
