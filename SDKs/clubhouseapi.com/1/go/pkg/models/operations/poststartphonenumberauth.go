package operations



type PostStartPhoneNumberAuthRequest struct {
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type PostStartPhoneNumberAuthResponse struct {
    ContentType string 
    StatusCode int64 
    
}

