package operations



type ProtocolSnmpv3GetEngineidPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ProtocolSnmpv3GetEngineidRequest struct {
    PathParams ProtocolSnmpv3GetEngineidPathParams 
    
}

type ProtocolSnmpv3GetEngineidResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolSnmpv3GetEngineid200ApplicationJSONString *string 
    
}

