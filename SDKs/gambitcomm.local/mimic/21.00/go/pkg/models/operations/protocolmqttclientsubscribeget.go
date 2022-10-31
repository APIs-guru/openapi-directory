package operations



type ProtocolMqttClientSubscribeGetPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Attr string `pathParam:"style=simple,explode=false,name=attr"`
    SubNum int32 `pathParam:"style=simple,explode=false,name=subNum"`
    
}

type ProtocolMqttClientSubscribeGetRequest struct {
    PathParams ProtocolMqttClientSubscribeGetPathParams 
    
}

type ProtocolMqttClientSubscribeGetResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolMqttClientSubscribeGet200ApplicationJSONStrings []string 
    
}

