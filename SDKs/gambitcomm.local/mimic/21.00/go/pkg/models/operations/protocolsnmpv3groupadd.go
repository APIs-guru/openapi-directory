package operations



type ProtocolSnmpv3GroupAddPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    GroupName string `pathParam:"style=simple,explode=false,name=groupName"`
    SecurityModel string `pathParam:"style=simple,explode=false,name=securityModel"`
    SecurityName string `pathParam:"style=simple,explode=false,name=securityName"`
    
}

type ProtocolSnmpv3GroupAddRequest struct {
    PathParams ProtocolSnmpv3GroupAddPathParams 
    
}

type ProtocolSnmpv3GroupAddResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolSnmpv3GroupAdd200ApplicationJSONString *string 
    
}

