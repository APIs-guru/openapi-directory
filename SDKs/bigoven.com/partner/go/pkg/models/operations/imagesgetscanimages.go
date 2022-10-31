package operations

import (
	"openapi/pkg/models/shared"
)

type ImagesGetScanImagesPathParams struct {
	RecipeID int32 `pathParam:"style=simple,explode=false,name=recipeId"`
}

type ImagesGetScanImagesRequest struct {
	PathParams ImagesGetScanImagesPathParams
}

type ImagesGetScanImagesResponse struct {
	BigOvenModelAPIImages []shared.BigOvenModelAPIImage
	Body                  []byte
	ContentType           string
	StatusCode            int64
}
