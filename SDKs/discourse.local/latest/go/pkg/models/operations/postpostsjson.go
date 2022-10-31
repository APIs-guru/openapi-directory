package operations



type PostPostsJSONRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PostPostsJSONResponse struct {
    ContentType string 
    PostPostsJSON200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

