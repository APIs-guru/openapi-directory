package operations



type AdultContentDetectionRequestBody struct {
    APIKey string `form:"name=api_key"`
    Text *string `form:"name=text"`
    
}

type AdultContentDetectionRequest struct {
    Request *AdultContentDetectionRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    
}

type AdultContentDetectionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

