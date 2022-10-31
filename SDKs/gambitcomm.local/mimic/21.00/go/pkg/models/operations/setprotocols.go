package operations



type SetProtocolsPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type SetProtocolsRequest struct {
    PathParams SetProtocolsPathParams 
    Request []string `request:"mediaType=application/json"`
    
}

type SetProtocolsResponse struct {
    ContentType string 
    StatusCode int64 
    SetProtocols200ApplicationJSONStringIntegers []int64 
    
}

