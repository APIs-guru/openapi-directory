package operations



type PostAdminBadgesJSONRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PostAdminBadgesJSONResponse struct {
    ContentType string 
    PostAdminBadgesJSON200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

