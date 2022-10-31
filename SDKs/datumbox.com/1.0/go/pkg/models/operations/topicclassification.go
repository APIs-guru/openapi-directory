package operations

type TopicClassificationRequestBody struct {
	APIKey string  `form:"name=api_key"`
	Text   *string `form:"name=text"`
}

type TopicClassificationRequest struct {
	Request *TopicClassificationRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type TopicClassificationResponse struct {
	ContentType string
	StatusCode  int64
}
