package operations



type ProtocolSnmpv3ViewListPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ProtocolSnmpv3ViewListRequest struct {
    PathParams ProtocolSnmpv3ViewListPathParams 
    
}

type ProtocolSnmpv3ViewListResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolSnmpv3ViewList200ApplicationJSONStrings []string 
    
}

