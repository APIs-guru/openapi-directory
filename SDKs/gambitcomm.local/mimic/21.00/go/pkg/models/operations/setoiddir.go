package operations



type SetOiddirPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Oiddir string `pathParam:"style=simple,explode=false,name=oiddir"`
    
}

type SetOiddirRequest struct {
    PathParams SetOiddirPathParams 
    
}

type SetOiddirResponse struct {
    ContentType string 
    StatusCode int64 
    SetOiddir200ApplicationJSONString *string 
    
}

