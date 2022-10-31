package operations



type ProtocolSnmpv3GroupClearPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ProtocolSnmpv3GroupClearRequest struct {
    PathParams ProtocolSnmpv3GroupClearPathParams 
    
}

type ProtocolSnmpv3GroupClearResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolSnmpv3GroupClear200ApplicationJSONString *string 
    
}

