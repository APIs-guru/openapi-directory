package operations

type PostGetClubRequest struct {
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type PostGetClubResponse struct {
	ContentType string
	StatusCode  int64
}
