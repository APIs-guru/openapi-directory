package operations

type DocumentSimilarityRequestBody struct {
	APIKey   string  `form:"name=api_key"`
	Copy     *string `form:"name=copy"`
	Original *string `form:"name=original"`
}

type DocumentSimilarityRequest struct {
	Request *DocumentSimilarityRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type DocumentSimilarityResponse struct {
	ContentType string
	StatusCode  int64
}
