package operations



type PostRecordActionTrailsRequest struct {
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type PostRecordActionTrailsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

