package operations



type TextExtractionRequestBody struct {
    APIKey string `form:"name=api_key"`
    Text *string `form:"name=text"`
    
}

type TextExtractionRequest struct {
    Request *TextExtractionRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    
}

type TextExtractionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

