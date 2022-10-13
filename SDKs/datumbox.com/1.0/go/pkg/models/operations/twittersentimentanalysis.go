package operations

type TwitterSentimentAnalysisRequestBody struct {
	APIKey string  `form:"name=api_key"`
	Text   *string `form:"name=text"`
}

type TwitterSentimentAnalysisRequest struct {
	Request *TwitterSentimentAnalysisRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type TwitterSentimentAnalysisResponse struct {
	ContentType string
	StatusCode  int64
}
