package operations



type ProtocolSnmpv3SetConfigPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Parameter string `pathParam:"style=simple,explode=false,name=parameter"`
    Value string `pathParam:"style=simple,explode=false,name=value"`
    
}

type ProtocolSnmpv3SetConfigRequest struct {
    PathParams ProtocolSnmpv3SetConfigPathParams 
    
}

type ProtocolSnmpv3SetConfigResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolSnmpv3SetConfig200ApplicationJSONString *string 
    
}

