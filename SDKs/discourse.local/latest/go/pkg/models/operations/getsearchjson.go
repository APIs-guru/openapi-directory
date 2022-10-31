package operations



type GetSearchJSONRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    
}

type GetSearchJSONResponse struct {
    ContentType string 
    GetSearchJSON200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

