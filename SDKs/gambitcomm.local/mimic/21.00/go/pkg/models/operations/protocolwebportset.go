package operations



type ProtocolWebPortSetPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Port int32 `pathParam:"style=simple,explode=false,name=port"`
    Protocol string `pathParam:"style=simple,explode=false,name=protocol"`
    Version string `pathParam:"style=simple,explode=false,name=version"`
    
}

type ProtocolWebPortSetRequest struct {
    PathParams ProtocolWebPortSetPathParams 
    
}

type ProtocolWebPortSetResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolWebPortSet200ApplicationJSONString *string 
    
}

