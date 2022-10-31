package operations



type ProtocolIpmiSetTracePathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    EnableOrNot string `pathParam:"style=simple,explode=false,name=enableOrNot"`
    
}

type ProtocolIpmiSetTraceRequest struct {
    PathParams ProtocolIpmiSetTracePathParams 
    
}

type ProtocolIpmiSetTraceResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolIpmiSetTrace200ApplicationJSONString *string 
    
}

