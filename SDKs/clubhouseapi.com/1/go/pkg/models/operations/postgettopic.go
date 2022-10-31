package operations

type PostGetTopicRequest struct {
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type PostGetTopicResponse struct {
	ContentType string
	StatusCode  int64
}
