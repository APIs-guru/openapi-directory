package operations

type PostContainersNameOrIDPausePathParams struct {
	NameOrID string `pathParam:"style=simple,explode=false,name=name_or_id"`
}

type PostContainersNameOrIDPauseHeaders struct {
	XAuthProjectID string `header:"name=X-Auth-Project-Id"`
	XAuthToken     string `header:"name=X-Auth-Token"`
}

type PostContainersNameOrIDPauseRequest struct {
	PathParams PostContainersNameOrIDPausePathParams
	Headers    PostContainersNameOrIDPauseHeaders
}

type PostContainersNameOrIDPauseResponse struct {
	ContentType string
	StatusCode  int64
}
