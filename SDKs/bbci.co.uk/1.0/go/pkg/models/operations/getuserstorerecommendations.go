package operations

type GetUserStoreRecommendationsQueryParams struct {
	IdentityCookie float64 `queryParam:"style=form,explode=true,name=identity_cookie"`
}

type GetUserStoreRecommendationsRequest struct {
	QueryParams GetUserStoreRecommendationsQueryParams
}

type GetUserStoreRecommendationsResponse struct {
	ContentType string
	StatusCode  int64
	Ibl         *interface{}
}
