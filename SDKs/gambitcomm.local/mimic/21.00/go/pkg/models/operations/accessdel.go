package operations



type AccessDelPathParams struct {
    User string `pathParam:"style=simple,explode=false,name=user"`
    
}

type AccessDelRequest struct {
    PathParams AccessDelPathParams 
    
}

type AccessDelResponse struct {
    ContentType string 
    StatusCode int64 
    AccessDel200ApplicationJSONString *string 
    
}

