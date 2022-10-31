package operations

type PingUserHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type PingUserRequest struct {
	Headers PingUserHeaders
}

type PingUserResponse struct {
	Body                       []byte
	ContentType                string
	StatusCode                 int64
	PingUser200TextPlainString *string
}
