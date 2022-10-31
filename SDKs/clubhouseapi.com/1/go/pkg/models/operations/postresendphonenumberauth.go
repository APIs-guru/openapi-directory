package operations



type PostResendPhoneNumberAuthRequest struct {
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type PostResendPhoneNumberAuthResponse struct {
    ContentType string 
    StatusCode int64 
    
}

