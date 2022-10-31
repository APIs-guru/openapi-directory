package operations



type ProtocolSflowSetConfigPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Argument string `pathParam:"style=simple,explode=false,name=argument"`
    Value string `pathParam:"style=simple,explode=false,name=value"`
    
}

type ProtocolSflowSetConfigRequest struct {
    PathParams ProtocolSflowSetConfigPathParams 
    
}

type ProtocolSflowSetConfigResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolSflowSetConfig200ApplicationJSONString *string 
    
}

