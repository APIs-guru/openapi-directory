package operations

type PostMeRequest struct {
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type PostMeResponse struct {
	ContentType string
	StatusCode  int64
}
