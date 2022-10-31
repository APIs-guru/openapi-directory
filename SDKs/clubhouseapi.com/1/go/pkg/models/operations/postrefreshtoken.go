package operations

type PostRefreshTokenRequest struct {
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type PostRefreshTokenResponse struct {
	ContentType string
	StatusCode  int64
}
