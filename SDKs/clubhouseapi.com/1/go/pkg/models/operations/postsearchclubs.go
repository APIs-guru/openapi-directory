package operations



type PostSearchClubsRequest struct {
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type PostSearchClubsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

