package operations



type ProtocolTftpSessionGetParameterPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Parameter string `pathParam:"style=simple,explode=false,name=parameter"`
    SessionID string `pathParam:"style=simple,explode=false,name=sessionID"`
    
}

type ProtocolTftpSessionGetParameterRequest struct {
    PathParams ProtocolTftpSessionGetParameterPathParams 
    
}

type ProtocolTftpSessionGetParameterResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolTftpSessionGetParameter200ApplicationJSONString *string 
    
}

