package operations



type ProtocolMqttClientSetWillmsgPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Msg string `pathParam:"style=simple,explode=false,name=msg"`
    
}

type ProtocolMqttClientSetWillmsgRequest struct {
    PathParams ProtocolMqttClientSetWillmsgPathParams 
    
}

type ProtocolMqttClientSetWillmsgResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolMqttClientSetWillmsg200ApplicationJSONInt32Integers []int32 
    
}

