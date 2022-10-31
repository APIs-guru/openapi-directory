package operations

type PostUpdateNotificationsRequest struct {
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type PostUpdateNotificationsResponse struct {
	ContentType string
	StatusCode  int64
}
