package operations

type PostContainersNameOrIDStartPathParams struct {
	NameOrID string `pathParam:"style=simple,explode=false,name=name_or_id"`
}

type PostContainersNameOrIDStartHeaders struct {
	XAuthProjectID string `header:"style=simple,explode=false,name=X-Auth-Project-Id"`
	XAuthToken     string `header:"style=simple,explode=false,name=X-Auth-Token"`
}

type PostContainersNameOrIDStartRequest struct {
	PathParams PostContainersNameOrIDStartPathParams
	Headers    PostContainersNameOrIDStartHeaders
}

type PostContainersNameOrIDStartResponse struct {
	ContentType string
	StatusCode  int64
}
