package operations



type StorePersistsPathParams struct {
    Var string `pathParam:"style=simple,explode=false,name=var"`
    
}

type StorePersistsRequest struct {
    PathParams StorePersistsPathParams 
    
}

type StorePersistsResponse struct {
    ContentType string 
    StatusCode int64 
    StorePersists200ApplicationJSONString *string 
    
}

