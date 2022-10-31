package operations



type KeywordExtractionRequestBody struct {
    APIKey string `form:"name=api_key"`
    N *int64 `form:"name=n"`
    Text *string `form:"name=text"`
    
}

type KeywordExtractionRequest struct {
    Request *KeywordExtractionRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    
}

type KeywordExtractionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

