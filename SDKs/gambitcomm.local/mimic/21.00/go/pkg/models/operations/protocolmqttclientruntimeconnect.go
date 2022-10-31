package operations



type ProtocolMqttClientRuntimeConnectPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ProtocolMqttClientRuntimeConnectRequest struct {
    PathParams ProtocolMqttClientRuntimeConnectPathParams 
    
}

type ProtocolMqttClientRuntimeConnectResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolMqttClientRuntimeConnect200ApplicationJSONStrings []string 
    
}

