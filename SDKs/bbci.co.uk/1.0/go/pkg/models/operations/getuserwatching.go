package operations

type GetUserWatchingQueryParams struct {
	IdentityCookie float64 `queryParam:"style=form,explode=true,name=identity_cookie"`
}

type GetUserWatchingRequest struct {
	QueryParams GetUserWatchingQueryParams
}

type GetUserWatchingResponse struct {
	ContentType string
	StatusCode  int64
	Ibl         *interface{}
}
