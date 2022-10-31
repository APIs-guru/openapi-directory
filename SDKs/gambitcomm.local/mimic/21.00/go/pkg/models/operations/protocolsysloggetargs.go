package operations



type ProtocolSyslogGetArgsPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ProtocolSyslogGetArgsRequest struct {
    PathParams ProtocolSyslogGetArgsPathParams 
    
}

type ProtocolSyslogGetArgsResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolSyslogGetArgs200ApplicationJSONObject map[string]interface{} 
    
}

