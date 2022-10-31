package operations



type AccessAddPathParams struct {
    Agents string `pathParam:"style=simple,explode=false,name=agents"`
    Mask string `pathParam:"style=simple,explode=false,name=mask"`
    User string `pathParam:"style=simple,explode=false,name=user"`
    
}

type AccessAddRequest struct {
    PathParams AccessAddPathParams 
    
}

type AccessAddResponse struct {
    ContentType string 
    StatusCode int64 
    AccessAdd200ApplicationJSONString *string 
    
}

