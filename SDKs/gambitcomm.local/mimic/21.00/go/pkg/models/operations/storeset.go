package operations



type StoreSetPathParams struct {
    Persist int32 `pathParam:"style=simple,explode=false,name=persist"`
    Var string `pathParam:"style=simple,explode=false,name=var"`
    
}

type StoreSetRequest struct {
    PathParams StoreSetPathParams 
    Request *string `request:"mediaType=application/json"`
    
}

type StoreSetResponse struct {
    ContentType string 
    StatusCode int64 
    StoreSet200ApplicationJSONString *string 
    
}

