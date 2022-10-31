package operations

type SubjectivityAnalysisRequestBody struct {
	APIKey string  `form:"name=api_key"`
	Text   *string `form:"name=text"`
}

type SubjectivityAnalysisRequest struct {
	Request *SubjectivityAnalysisRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type SubjectivityAnalysisResponse struct {
	ContentType string
	StatusCode  int64
}
