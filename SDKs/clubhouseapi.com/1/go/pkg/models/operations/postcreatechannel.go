package operations

type PostCreateChannelRequest struct {
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type PostCreateChannelResponse struct {
	ContentType string
	StatusCode  int64
}
