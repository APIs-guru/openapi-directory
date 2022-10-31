package operations



type ProtocolSyslogSetAttrPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Attr string `pathParam:"style=simple,explode=false,name=attr"`
    Value string `pathParam:"style=simple,explode=false,name=value"`
    
}

type ProtocolSyslogSetAttrRequest struct {
    PathParams ProtocolSyslogSetAttrPathParams 
    
}

type ProtocolSyslogSetAttrResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolSyslogSetAttr200ApplicationJSONString *string 
    
}

