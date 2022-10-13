package operations

type ImagesUploadRecipeImagePathParams struct {
	RecipeID string `pathParam:"style=simple,explode=false,name=recipeId"`
}

type ImagesUploadRecipeImageQueryParams struct {
	Caption *string  `queryParam:"style=form,explode=true,name=caption"`
	Lat     *float64 `queryParam:"style=form,explode=true,name=lat"`
	Lng     *float64 `queryParam:"style=form,explode=true,name=lng"`
}

type ImagesUploadRecipeImageRequest struct {
	PathParams  ImagesUploadRecipeImagePathParams
	QueryParams ImagesUploadRecipeImageQueryParams
}

type ImagesUploadRecipeImageResponse struct {
	Body         []byte
	ContentType  string
	StatusCode   int64
	SystemObject map[string]interface{}
}
