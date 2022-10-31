package operations



type GetPrivdirPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type GetPrivdirRequest struct {
    PathParams GetPrivdirPathParams 
    
}

type GetPrivdirResponse struct {
    ContentType string 
    StatusCode int64 
    GetPrivdir200ApplicationJSONString *string 
    
}

