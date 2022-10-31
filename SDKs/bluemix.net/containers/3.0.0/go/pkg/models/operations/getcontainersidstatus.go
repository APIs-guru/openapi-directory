package operations

type GetContainersIDStatusPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetContainersIDStatusHeaders struct {
	XAuthProjectID string `header:"style=simple,explode=false,name=X-Auth-Project-Id"`
	XAuthToken     string `header:"style=simple,explode=false,name=X-Auth-Token"`
}

type GetContainersIDStatusRequest struct {
	PathParams GetContainersIDStatusPathParams
	Headers    GetContainersIDStatusHeaders
}

type GetContainersIDStatusResponse struct {
	ContentType        string
	StatusCode         int64
	GetContainerStatus *interface{}
}
