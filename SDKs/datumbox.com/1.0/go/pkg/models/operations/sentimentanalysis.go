package operations



type SentimentAnalysisRequestBody struct {
    APIKey string `form:"name=api_key"`
    Text *string `form:"name=text"`
    
}

type SentimentAnalysisRequest struct {
    Request *SentimentAnalysisRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    
}

type SentimentAnalysisResponse struct {
    ContentType string 
    StatusCode int64 
    
}

