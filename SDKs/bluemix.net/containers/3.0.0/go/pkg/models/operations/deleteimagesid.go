package operations

type DeleteImagesIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteImagesIDHeaders struct {
	XAuthProjectID string `header:"name=X-Auth-Project-Id"`
	XAuthToken     string `header:"name=X-Auth-Token"`
}

type DeleteImagesIDRequest struct {
	PathParams DeleteImagesIDPathParams
	Headers    DeleteImagesIDHeaders
}

type DeleteImagesIDResponse struct {
	ContentType string
	StatusCode  int64
}
