package operations



type GetInterfacePathParams struct {
    AgentNum int64 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type GetInterfaceRequest struct {
    PathParams GetInterfacePathParams 
    
}

type GetInterfaceResponse struct {
    ContentType string 
    StatusCode int64 
    GetInterface200ApplicationJSONString *string 
    
}

