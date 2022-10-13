package operations

type PingUserHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type PingUserRequest struct {
	Headers PingUserHeaders
}

type PingUserResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
