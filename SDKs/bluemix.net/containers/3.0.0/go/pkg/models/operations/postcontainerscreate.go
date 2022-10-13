package operations

type PostContainersCreateQueryParams struct {
	Name *string `queryParam:"style=form,explode=true,name=name"`
}

type PostContainersCreateHeaders struct {
	XAuthProjectID string `header:"name=X-Auth-Project-Id"`
	XAuthToken     string `header:"name=X-Auth-Token"`
}

type PostContainersCreateRequest struct {
	QueryParams PostContainersCreateQueryParams
	Headers     PostContainersCreateHeaders
	Request     interface{} `request:"mediaType=application/json"`
}

type PostContainersCreateResponse struct {
	ContainerID *interface{}
	ContentType string
	StatusCode  int64
}
