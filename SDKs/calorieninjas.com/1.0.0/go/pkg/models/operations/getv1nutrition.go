package operations

type GetV1NutritionQueryParams struct {
	Query string `queryParam:"style=form,explode=true,name=query"`
}

type GetV1NutritionRequest struct {
	QueryParams GetV1NutritionQueryParams
}

type GetV1NutritionResponse struct {
	ContentType string
	StatusCode  int64
}
