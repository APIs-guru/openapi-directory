package operations



type ProtocolMqttClientSetWillqosPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Qos string `pathParam:"style=simple,explode=false,name=qos"`
    
}

type ProtocolMqttClientSetWillqosRequest struct {
    PathParams ProtocolMqttClientSetWillqosPathParams 
    
}

type ProtocolMqttClientSetWillqosResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolMqttClientSetWillqos200ApplicationJSONInt32Integers []int32 
    
}

