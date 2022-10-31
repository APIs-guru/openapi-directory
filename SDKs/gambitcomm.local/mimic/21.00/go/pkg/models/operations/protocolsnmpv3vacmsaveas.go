package operations



type ProtocolSnmpv3VacmSaveasPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Filename string `pathParam:"style=simple,explode=false,name=filename"`
    
}

type ProtocolSnmpv3VacmSaveasRequest struct {
    PathParams ProtocolSnmpv3VacmSaveasPathParams 
    
}

type ProtocolSnmpv3VacmSaveasResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolSnmpv3VacmSaveas200ApplicationJSONStrings []string 
    
}

