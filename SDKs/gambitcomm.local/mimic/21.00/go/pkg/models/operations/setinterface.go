package operations



type SetInterfacePathParams struct {
    AgentNum int64 `pathParam:"style=simple,explode=false,name=agentNum"`
    Interface string `pathParam:"style=simple,explode=false,name=interface"`
    
}

type SetInterfaceRequest struct {
    PathParams SetInterfacePathParams 
    
}

type SetInterfaceResponse struct {
    ContentType string 
    StatusCode int64 
    SetInterface200ApplicationJSONString *string 
    
}

