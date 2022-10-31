package operations



type StoreUnsetPathParams struct {
    Var string `pathParam:"style=simple,explode=false,name=var"`
    
}

type StoreUnsetRequest struct {
    PathParams StoreUnsetPathParams 
    
}

type StoreUnsetResponse struct {
    ContentType string 
    StatusCode int64 
    StoreUnset200ApplicationJSONString *string 
    
}

