package operations



type ProtocolMqttClientMessageGetPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Attr string `pathParam:"style=simple,explode=false,name=attr"`
    MsgNum int32 `pathParam:"style=simple,explode=false,name=msgNum"`
    
}

type ProtocolMqttClientMessageGetRequest struct {
    PathParams ProtocolMqttClientMessageGetPathParams 
    
}

type ProtocolMqttClientMessageGetResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolMqttClientMessageGet200ApplicationJSONStrings []string 
    
}

