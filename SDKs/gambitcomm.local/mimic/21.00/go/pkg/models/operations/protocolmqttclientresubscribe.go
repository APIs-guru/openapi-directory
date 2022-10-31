package operations



type ProtocolMqttClientResubscribePathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    SubNum int32 `pathParam:"style=simple,explode=false,name=subNum"`
    
}

type ProtocolMqttClientResubscribeRequest struct {
    PathParams ProtocolMqttClientResubscribePathParams 
    
}

type ProtocolMqttClientResubscribeResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolMqttClientResubscribe200ApplicationJSONString *string 
    
}

