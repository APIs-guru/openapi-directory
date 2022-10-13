package operations

type PostInviteFromWaitlistRequest struct {
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type PostInviteFromWaitlistResponse struct {
	ContentType string
	StatusCode  int64
}
