package operations



type ProtocolSnmpv3UsmSaveasPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Filename string `pathParam:"style=simple,explode=false,name=filename"`
    
}

type ProtocolSnmpv3UsmSaveasRequest struct {
    PathParams ProtocolSnmpv3UsmSaveasPathParams 
    
}

type ProtocolSnmpv3UsmSaveasResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolSnmpv3UsmSaveas200ApplicationJSONStrings []string 
    
}

