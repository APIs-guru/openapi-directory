package operations



type ProtocolTelnetServerGetKeymapPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ProtocolTelnetServerGetKeymapRequest struct {
    PathParams ProtocolTelnetServerGetKeymapPathParams 
    
}

type ProtocolTelnetServerGetKeymapResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolTelnetServerGetKeymap200ApplicationJSONStrings []string 
    
}

