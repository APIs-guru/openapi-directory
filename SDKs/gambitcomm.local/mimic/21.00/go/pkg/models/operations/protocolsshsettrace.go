package operations



type ProtocolSSHSetTracePathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    EnableOrNot string `pathParam:"style=simple,explode=false,name=enableOrNot"`
    
}

type ProtocolSSHSetTraceRequest struct {
    PathParams ProtocolSSHSetTracePathParams 
    
}

type ProtocolSSHSetTraceResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolSSHSetTrace200ApplicationJSONString *string 
    
}

