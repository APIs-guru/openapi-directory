package operations



type ProtocolMqttSetConfigPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Argument string `pathParam:"style=simple,explode=false,name=argument"`
    Value string `pathParam:"style=simple,explode=false,name=value"`
    
}

type ProtocolMqttSetConfigRequest struct {
    PathParams ProtocolMqttSetConfigPathParams 
    
}

type ProtocolMqttSetConfigResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolMqttSetConfig200ApplicationJSONString *string 
    
}

