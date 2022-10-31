package operations



type ShowtimeSearchallReadPathParams struct {
    Param string `pathParam:"style=simple,explode=false,name=param"`
    
}

type ShowtimeSearchallReadRequest struct {
    PathParams ShowtimeSearchallReadPathParams 
    
}

type ShowtimeSearchallReadResponse struct {
    ContentType string 
    StatusCode int64 
    
}

