package operations



type ProtocolMqttClientGetProtstatePathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ProtocolMqttClientGetProtstateRequest struct {
    PathParams ProtocolMqttClientGetProtstatePathParams 
    
}

type ProtocolMqttClientGetProtstateResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolMqttClientGetProtstate200ApplicationJSONInt32Integers []int32 
    
}

