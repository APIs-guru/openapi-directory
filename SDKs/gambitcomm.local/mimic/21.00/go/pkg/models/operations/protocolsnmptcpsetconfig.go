package operations



type ProtocolSnmptcpSetConfigPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Argument string `pathParam:"style=simple,explode=false,name=argument"`
    Value string `pathParam:"style=simple,explode=false,name=value"`
    
}

type ProtocolSnmptcpSetConfigRequest struct {
    PathParams ProtocolSnmptcpSetConfigPathParams 
    
}

type ProtocolSnmptcpSetConfigResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolSnmptcpSetConfig200ApplicationJSONString *string 
    
}

