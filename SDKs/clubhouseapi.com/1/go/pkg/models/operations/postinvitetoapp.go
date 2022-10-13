package operations

type PostInviteToAppRequest struct {
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type PostInviteToAppResponse struct {
	ContentType string
	StatusCode  int64
}
