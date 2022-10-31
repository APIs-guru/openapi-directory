package operations



type StoreLreplacePathParams struct {
    Index int32 `pathParam:"style=simple,explode=false,name=index"`
    Var string `pathParam:"style=simple,explode=false,name=var"`
    
}

type StoreLreplaceRequest struct {
    PathParams StoreLreplacePathParams 
    Request *string `request:"mediaType=application/json"`
    
}

type StoreLreplaceResponse struct {
    ContentType string 
    StatusCode int64 
    StoreLreplace200ApplicationJSONString *string 
    
}

