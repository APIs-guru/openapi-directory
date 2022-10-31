package operations



type TrapConfigDelPathParams struct {
    IP string `pathParam:"style=simple,explode=false,name=IP"`
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Port int32 `pathParam:"style=simple,explode=false,name=port"`
    
}

type TrapConfigDelRequest struct {
    PathParams TrapConfigDelPathParams 
    
}

type TrapConfigDelResponse struct {
    ContentType string 
    StatusCode int64 
    TrapConfigDel200ApplicationJSONString *string 
    
}

