package operations

type PostGetSuggestedFollowsFriendsOnlyRequest struct {
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type PostGetSuggestedFollowsFriendsOnlyResponse struct {
	ContentType string
	StatusCode  int64
}
