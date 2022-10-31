package operations



type PostCategoriesJSONRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PostCategoriesJSONResponse struct {
    ContentType string 
    PostCategoriesJSON200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

