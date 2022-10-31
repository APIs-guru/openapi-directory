package operations



type GenderDetectionRequestBody struct {
    APIKey string `form:"name=api_key"`
    Text *string `form:"name=text"`
    
}

type GenderDetectionRequest struct {
    Request *GenderDetectionRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    
}

type GenderDetectionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

