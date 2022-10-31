package operations



type ProtocolTelnetServerGetUserdbPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ProtocolTelnetServerGetUserdbRequest struct {
    PathParams ProtocolTelnetServerGetUserdbPathParams 
    
}

type ProtocolTelnetServerGetUserdbResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolTelnetServerGetUserdb200ApplicationJSONStrings []string 
    
}

