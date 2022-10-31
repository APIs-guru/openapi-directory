package operations

import (
	"openapi/pkg/models/shared"
)

type ImagesGetPathParams struct {
	RecipeID int32 `pathParam:"style=simple,explode=false,name=recipeId"`
}

type ImagesGetRequest struct {
	PathParams ImagesGetPathParams
}

type ImagesGetResponse struct {
	BigOvenModelAPIImages []shared.BigOvenModelAPIImage
	Body                  []byte
	ContentType           string
	StatusCode            int64
}
