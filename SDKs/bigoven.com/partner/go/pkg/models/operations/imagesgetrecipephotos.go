package operations

import (
	"openapi/pkg/models/shared"
)

type ImagesGetRecipePhotosPathParams struct {
	RecipeID int32 `pathParam:"style=simple,explode=false,name=recipeId"`
}

type ImagesGetRecipePhotosQueryParams struct {
	Pg  *int32 `queryParam:"style=form,explode=true,name=pg"`
	Rpp *int32 `queryParam:"style=form,explode=true,name=rpp"`
}

type ImagesGetRecipePhotosRequest struct {
	PathParams  ImagesGetRecipePhotosPathParams
	QueryParams ImagesGetRecipePhotosQueryParams
}

type ImagesGetRecipePhotosResponse struct {
	Api2ControllersWebAPIImagesControllerRecipePhotosResponse *shared.Api2ControllersWebAPIImagesControllerRecipePhotosResponse
	Body                                                      []byte
	ContentType                                               string
	StatusCode                                                int64
}
