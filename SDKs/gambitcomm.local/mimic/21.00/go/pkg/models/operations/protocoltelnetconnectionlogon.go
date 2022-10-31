package operations



type ProtocolTelnetConnectionLogonPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    ConnectionID int32 `pathParam:"style=simple,explode=false,name=connectionID"`
    Password string `pathParam:"style=simple,explode=false,name=password"`
    User string `pathParam:"style=simple,explode=false,name=user"`
    
}

type ProtocolTelnetConnectionLogonRequest struct {
    PathParams ProtocolTelnetConnectionLogonPathParams 
    
}

type ProtocolTelnetConnectionLogonResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolTelnetConnectionLogon200ApplicationJSONStrings []string 
    
}

