package operations



type ProtocolTftpSessionSetParameterPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Parameter string `pathParam:"style=simple,explode=false,name=parameter"`
    SessionID string `pathParam:"style=simple,explode=false,name=sessionID"`
    Value string `pathParam:"style=simple,explode=false,name=value"`
    
}

type ProtocolTftpSessionSetParameterRequest struct {
    PathParams ProtocolTftpSessionSetParameterPathParams 
    
}

type ProtocolTftpSessionSetParameterResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolTftpSessionSetParameter200ApplicationJSONString *string 
    
}

