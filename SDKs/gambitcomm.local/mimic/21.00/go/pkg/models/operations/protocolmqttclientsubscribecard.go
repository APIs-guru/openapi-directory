package operations



type ProtocolMqttClientSubscribeCardPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ProtocolMqttClientSubscribeCardRequest struct {
    PathParams ProtocolMqttClientSubscribeCardPathParams 
    
}

type ProtocolMqttClientSubscribeCardResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolMqttClientSubscribeCard200ApplicationJSONInt32Integers []int32 
    
}

