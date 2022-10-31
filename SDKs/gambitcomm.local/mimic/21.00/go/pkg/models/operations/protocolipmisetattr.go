package operations



type ProtocolIpmiSetAttrPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Attr string `pathParam:"style=simple,explode=false,name=attr"`
    Value string `pathParam:"style=simple,explode=false,name=value"`
    
}

type ProtocolIpmiSetAttrRequest struct {
    PathParams ProtocolIpmiSetAttrPathParams 
    
}

type ProtocolIpmiSetAttrResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolIpmiSetAttr200ApplicationJSONString *string 
    
}

