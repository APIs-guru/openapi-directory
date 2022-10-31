package operations

type PostContainersNameOrIDStopPathParams struct {
	NameOrID string `pathParam:"style=simple,explode=false,name=name_or_id"`
}

type PostContainersNameOrIDStopQueryParams struct {
	T *int64 `queryParam:"style=form,explode=true,name=t"`
}

type PostContainersNameOrIDStopHeaders struct {
	XAuthProjectID string `header:"style=simple,explode=false,name=X-Auth-Project-Id"`
	XAuthToken     string `header:"style=simple,explode=false,name=X-Auth-Token"`
}

type PostContainersNameOrIDStopRequest struct {
	PathParams  PostContainersNameOrIDStopPathParams
	QueryParams PostContainersNameOrIDStopQueryParams
	Headers     PostContainersNameOrIDStopHeaders
}

type PostContainersNameOrIDStopResponse struct {
	ContentType string
	StatusCode  int64
}
