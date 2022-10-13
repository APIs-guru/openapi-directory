package operations

type LanguageDetectionRequestBody struct {
	APIKey string  `form:"name=api_key"`
	Text   *string `form:"name=text"`
}

type LanguageDetectionRequest struct {
	Request *LanguageDetectionRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type LanguageDetectionResponse struct {
	ContentType string
	StatusCode  int64
}
