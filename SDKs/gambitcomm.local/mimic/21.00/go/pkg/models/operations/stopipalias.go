package operations



type StopIpaliasPathParams struct {
    IP string `pathParam:"style=simple,explode=false,name=IP"`
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Port int32 `pathParam:"style=simple,explode=false,name=port"`
    
}

type StopIpaliasRequest struct {
    PathParams StopIpaliasPathParams 
    
}

type StopIpaliasResponse struct {
    ContentType string 
    StatusCode int64 
    StopIpalias200ApplicationJSONString *string 
    
}

