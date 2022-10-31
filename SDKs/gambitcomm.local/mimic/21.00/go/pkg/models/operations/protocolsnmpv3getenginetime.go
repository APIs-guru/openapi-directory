package operations



type ProtocolSnmpv3GetEnginetimePathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ProtocolSnmpv3GetEnginetimeRequest struct {
    PathParams ProtocolSnmpv3GetEnginetimePathParams 
    
}

type ProtocolSnmpv3GetEnginetimeResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolSnmpv3GetEnginetime200ApplicationJSONInt32Integer *int32 
    
}

