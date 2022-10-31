package operations



type PostAdminBackupsJSONRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PostAdminBackupsJSONResponse struct {
    ContentType string 
    PostAdminBackupsJSON200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

