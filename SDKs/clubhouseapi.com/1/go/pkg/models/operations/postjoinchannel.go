package operations

type PostJoinChannelRequest struct {
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type PostJoinChannelResponse struct {
	ContentType string
	StatusCode  int64
}
