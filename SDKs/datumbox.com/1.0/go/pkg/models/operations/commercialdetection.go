package operations

type CommercialDetectionRequestBody struct {
	APIKey string  `form:"name=api_key"`
	Text   *string `form:"name=text"`
}

type CommercialDetectionRequest struct {
	Request *CommercialDetectionRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type CommercialDetectionResponse struct {
	ContentType string
	StatusCode  int64
}
