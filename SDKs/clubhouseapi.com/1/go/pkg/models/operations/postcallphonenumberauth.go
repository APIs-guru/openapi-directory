package operations



type PostCallPhoneNumberAuthRequest struct {
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type PostCallPhoneNumberAuthResponse struct {
    ContentType string 
    StatusCode int64 
    
}

