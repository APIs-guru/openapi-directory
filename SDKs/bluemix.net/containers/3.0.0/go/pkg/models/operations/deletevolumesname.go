package operations

type DeleteVolumesNamePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type DeleteVolumesNameHeaders struct {
	XAuthProjectID string `header:"name=X-Auth-Project-Id"`
	XAuthToken     string `header:"name=X-Auth-Token"`
}

type DeleteVolumesNameRequest struct {
	PathParams DeleteVolumesNamePathParams
	Headers    DeleteVolumesNameHeaders
}

type DeleteVolumesNameResponse struct {
	ContentType string
	StatusCode  int64
}
