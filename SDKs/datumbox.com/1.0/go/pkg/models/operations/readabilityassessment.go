package operations



type ReadabilityAssessmentRequestBody struct {
    APIKey string `form:"name=api_key"`
    Text *string `form:"name=text"`
    
}

type ReadabilityAssessmentRequest struct {
    Request *ReadabilityAssessmentRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    
}

type ReadabilityAssessmentResponse struct {
    ContentType string 
    StatusCode int64 
    
}

