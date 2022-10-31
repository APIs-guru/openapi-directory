package operations



type EducationalDetectionRequestBody struct {
    APIKey string `form:"name=api_key"`
    Text *string `form:"name=text"`
    
}

type EducationalDetectionRequest struct {
    Request *EducationalDetectionRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    
}

type EducationalDetectionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

