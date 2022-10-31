package operations



type ProtocolSyslogGetAttrPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Attr string `pathParam:"style=simple,explode=false,name=attr"`
    
}

type ProtocolSyslogGetAttrRequest struct {
    PathParams ProtocolSyslogGetAttrPathParams 
    
}

type ProtocolSyslogGetAttrResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolSyslogGetAttr200ApplicationJSONString *string 
    
}

