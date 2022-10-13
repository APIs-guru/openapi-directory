package operations

type PostVolumesNamePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type PostVolumesNameHeaders struct {
	XAuthProjectID string `header:"name=X-Auth-Project-Id"`
	XAuthToken     string `header:"name=X-Auth-Token"`
}

type PostVolumesNameRequest struct {
	PathParams PostVolumesNamePathParams
	Headers    PostVolumesNameHeaders
	Request    interface{} `request:"mediaType=application/json"`
}

type PostVolumesNameResponse struct {
	ContentType string
	StatusCode  int64
	Volume      *interface{}
}
