package operations



type PostCompletePhoneNumberAuthRequest struct {
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type PostCompletePhoneNumberAuthResponse struct {
    ContentType string 
    StatusCode int64 
    
}

