package operations

type PostUploadsJSONRequest struct {
	Request *interface{} `request:"mediaType=multipart/form-data"`
}

type PostUploadsJSONResponse struct {
	ContentType                          string
	PostUploadsJSON200ApplicationJSONAny *interface{}
	StatusCode                           int64
}
