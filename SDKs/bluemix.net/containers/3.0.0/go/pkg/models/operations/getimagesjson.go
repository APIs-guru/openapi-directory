package operations

type GetImagesJSONHeaders struct {
	XAuthProjectID string `header:"name=X-Auth-Project-Id"`
	XAuthToken     string `header:"name=X-Auth-Token"`
}

type GetImagesJSONRequest struct {
	Headers GetImagesJSONHeaders
}

type GetImagesJSONResponse struct {
	ContentType string
	ImageInfo   *interface{}
	StatusCode  int64
}
