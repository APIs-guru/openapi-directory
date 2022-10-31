package operations



type ProtocolMqttClientSetWilltopicPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Topic string `pathParam:"style=simple,explode=false,name=topic"`
    
}

type ProtocolMqttClientSetWilltopicRequest struct {
    PathParams ProtocolMqttClientSetWilltopicPathParams 
    
}

type ProtocolMqttClientSetWilltopicResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolMqttClientSetWilltopic200ApplicationJSONInt32Integers []int32 
    
}

