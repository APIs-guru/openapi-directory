package operations



type ProtocolWebPortAddPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Port int32 `pathParam:"style=simple,explode=false,name=port"`
    
}

type ProtocolWebPortAddRequest struct {
    PathParams ProtocolWebPortAddPathParams 
    
}

type ProtocolWebPortAddResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolWebPortAdd200ApplicationJSONString *string 
    
}

