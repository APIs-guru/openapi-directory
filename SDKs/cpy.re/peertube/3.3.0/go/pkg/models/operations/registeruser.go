package operations

type RegisterUserRequest struct {
	Request interface{} `request:"mediaType=application/json"`
}

type RegisterUserResponse struct {
	ContentType string
	StatusCode  int64
}
