package operations



type StoreExistsPathParams struct {
    Var string `pathParam:"style=simple,explode=false,name=var"`
    
}

type StoreExistsRequest struct {
    PathParams StoreExistsPathParams 
    
}

type StoreExistsResponse struct {
    ContentType string 
    StatusCode int64 
    StoreExists200ApplicationJSONString *string 
    
}

