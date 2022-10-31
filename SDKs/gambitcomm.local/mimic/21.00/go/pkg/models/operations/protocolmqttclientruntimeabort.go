package operations



type ProtocolMqttClientRuntimeAbortPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ProtocolMqttClientRuntimeAbortRequest struct {
    PathParams ProtocolMqttClientRuntimeAbortPathParams 
    
}

type ProtocolMqttClientRuntimeAbortResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolMqttClientRuntimeAbort200ApplicationJSONStrings []string 
    
}

