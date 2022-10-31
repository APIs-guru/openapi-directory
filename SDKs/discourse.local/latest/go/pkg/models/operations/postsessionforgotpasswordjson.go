package operations



type PostSessionForgotPasswordJSONRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PostSessionForgotPasswordJSONResponse struct {
    ContentType string 
    PostSessionForgotPasswordJSON200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

