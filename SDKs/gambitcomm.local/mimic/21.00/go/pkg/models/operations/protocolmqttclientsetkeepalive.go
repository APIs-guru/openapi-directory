package operations



type ProtocolMqttClientSetKeepalivePathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    AliveTime int32 `pathParam:"style=simple,explode=false,name=aliveTime"`
    
}

type ProtocolMqttClientSetKeepaliveRequest struct {
    PathParams ProtocolMqttClientSetKeepalivePathParams 
    
}

type ProtocolMqttClientSetKeepaliveResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolMqttClientSetKeepalive200ApplicationJSONInt32Integers []int32 
    
}

