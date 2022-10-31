package operations

type PostGetSuggestedInvitesRequest struct {
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type PostGetSuggestedInvitesResponse struct {
	ContentType string
	StatusCode  int64
}
