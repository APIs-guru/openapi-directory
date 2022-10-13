package operations

type PostContainersNameOrIDUnpausePathParams struct {
	NameOrID string `pathParam:"style=simple,explode=false,name=name_or_id"`
}

type PostContainersNameOrIDUnpauseHeaders struct {
	XAuthProjectID string `header:"name=X-Auth-Project-Id"`
	XAuthToken     string `header:"name=X-Auth-Token"`
}

type PostContainersNameOrIDUnpauseRequest struct {
	PathParams PostContainersNameOrIDUnpausePathParams
	Headers    PostContainersNameOrIDUnpauseHeaders
}

type PostContainersNameOrIDUnpauseResponse struct {
	ContentType string
	StatusCode  int64
}
