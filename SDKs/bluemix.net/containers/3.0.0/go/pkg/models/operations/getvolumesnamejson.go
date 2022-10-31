package operations

type GetVolumesNameJSONPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetVolumesNameJSONHeaders struct {
	XAuthProjectID string `header:"style=simple,explode=false,name=X-Auth-Project-Id"`
	XAuthToken     string `header:"style=simple,explode=false,name=X-Auth-Token"`
}

type GetVolumesNameJSONRequest struct {
	PathParams GetVolumesNameJSONPathParams
	Headers    GetVolumesNameJSONHeaders
}

type GetVolumesNameJSONResponse struct {
	ContentType string
	StatusCode  int64
	Volume      *interface{}
}
