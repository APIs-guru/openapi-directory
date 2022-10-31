package operations



type AddIpaliasPathParams struct {
    IP string `pathParam:"style=simple,explode=false,name=IP"`
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Interface string `pathParam:"style=simple,explode=false,name=interface"`
    Mask string `pathParam:"style=simple,explode=false,name=mask"`
    Port int32 `pathParam:"style=simple,explode=false,name=port"`
    
}

type AddIpaliasRequest struct {
    PathParams AddIpaliasPathParams 
    
}

type AddIpaliasResponse struct {
    ContentType string 
    StatusCode int64 
    AddIpalias200ApplicationJSONString *string 
    
}

