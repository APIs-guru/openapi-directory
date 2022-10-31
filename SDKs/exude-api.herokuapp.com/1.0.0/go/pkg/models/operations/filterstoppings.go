package operations



type FilterStoppingsPathParams struct {
    Type string `pathParam:"style=simple,explode=false,name=type"`
    
}

type FilterStoppingsRequest struct {
    PathParams FilterStoppingsPathParams 
    Request interface{} `request:"mediaType=multipart/form-data"`
    
}

type FilterStoppingsResponse struct {
    ContentType string 
    ExudeResponseBean *interface{} 
    StatusCode int64 
    
}

