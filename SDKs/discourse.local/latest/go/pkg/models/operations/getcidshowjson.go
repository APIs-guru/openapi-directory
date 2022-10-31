package operations



type GetCIDShowJSONPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetCIDShowJSONRequest struct {
    PathParams GetCIDShowJSONPathParams 
    
}

type GetCIDShowJSONResponse struct {
    ContentType string 
    GetCIDShowJSON200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

