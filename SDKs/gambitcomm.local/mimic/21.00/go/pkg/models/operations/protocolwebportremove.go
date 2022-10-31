package operations



type ProtocolWebPortRemovePathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Port int32 `pathParam:"style=simple,explode=false,name=port"`
    
}

type ProtocolWebPortRemoveRequest struct {
    PathParams ProtocolWebPortRemovePathParams 
    
}

type ProtocolWebPortRemoveResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolWebPortRemove200ApplicationJSONString *string 
    
}

