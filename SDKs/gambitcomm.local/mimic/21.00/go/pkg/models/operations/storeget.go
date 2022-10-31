package operations



type StoreGetPathParams struct {
    Var string `pathParam:"style=simple,explode=false,name=var"`
    
}

type StoreGetRequest struct {
    PathParams StoreGetPathParams 
    
}

type StoreGetResponse struct {
    ContentType string 
    StatusCode int64 
    StoreGet200ApplicationJSONString *string 
    
}

