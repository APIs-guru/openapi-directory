package operations

type GetVolumesJSONHeaders struct {
	XAuthProjectID string `header:"style=simple,explode=false,name=X-Auth-Project-Id"`
	XAuthToken     string `header:"style=simple,explode=false,name=X-Auth-Token"`
}

type GetVolumesJSONRequest struct {
	Headers GetVolumesJSONHeaders
}

type GetVolumesJSONResponse struct {
	ContentType string
	StatusCode  int64
	Volumes     []interface{}
}
