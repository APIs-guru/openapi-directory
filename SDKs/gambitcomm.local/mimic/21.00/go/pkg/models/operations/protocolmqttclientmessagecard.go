package operations



type ProtocolMqttClientMessageCardPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ProtocolMqttClientMessageCardRequest struct {
    PathParams ProtocolMqttClientMessageCardPathParams 
    
}

type ProtocolMqttClientMessageCardResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolMqttClientMessageCard200ApplicationJSONInt32Integers []int32 
    
}

