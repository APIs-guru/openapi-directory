package operations



type ProtocolIpmiGetAttrPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Attr string `pathParam:"style=simple,explode=false,name=attr"`
    
}

type ProtocolIpmiGetAttrRequest struct {
    PathParams ProtocolIpmiGetAttrPathParams 
    
}

type ProtocolIpmiGetAttrResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolIpmiGetAttr200ApplicationJSONString *string 
    
}

