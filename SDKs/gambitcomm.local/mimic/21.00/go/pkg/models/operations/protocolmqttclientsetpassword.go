package operations



type ProtocolMqttClientSetPasswordPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Password string `pathParam:"style=simple,explode=false,name=password"`
    
}

type ProtocolMqttClientSetPasswordRequest struct {
    PathParams ProtocolMqttClientSetPasswordPathParams 
    
}

type ProtocolMqttClientSetPasswordResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolMqttClientSetPassword200ApplicationJSONInt32Integers []int32 
    
}

