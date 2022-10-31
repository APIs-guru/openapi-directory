package operations



type ProtocolIpmiSetConfigPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Argument string `pathParam:"style=simple,explode=false,name=argument"`
    Value string `pathParam:"style=simple,explode=false,name=value"`
    
}

type ProtocolIpmiSetConfigRequest struct {
    PathParams ProtocolIpmiSetConfigPathParams 
    
}

type ProtocolIpmiSetConfigResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolIpmiSetConfig200ApplicationJSONString *string 
    
}

