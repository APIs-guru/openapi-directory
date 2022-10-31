package operations



type LogsDisablePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type LogsDisableRequest struct {
    PathParams LogsDisablePathParams 
    
}

type LogsDisableResponse struct {
    ContentType string 
    StatusCode int64 
    
}

