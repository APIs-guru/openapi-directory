package operations



type PostRequestRequest struct {
    Request interface{} `request:"mediaType=application/json"`
    
}

type PostRequestResponse struct {
    AllResponseTypesExample *interface{} 
    ContentType string 
    StatusCode int64 
    
}

