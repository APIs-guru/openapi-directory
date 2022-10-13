package operations

type SpamDetectionRequestBody struct {
	APIKey string  `form:"name=api_key"`
	Text   *string `form:"name=text"`
}

type SpamDetectionRequest struct {
	Request *SpamDetectionRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type SpamDetectionResponse struct {
	ContentType string
	StatusCode  int64
}
