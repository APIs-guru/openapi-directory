package operations



type ProtocolSnmpv3GetContextEngineidPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ProtocolSnmpv3GetContextEngineidRequest struct {
    PathParams ProtocolSnmpv3GetContextEngineidPathParams 
    
}

type ProtocolSnmpv3GetContextEngineidResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolSnmpv3GetContextEngineid200ApplicationJSONString *string 
    
}

