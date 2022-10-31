package operations



type AgentStoreGetPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Var string `pathParam:"style=simple,explode=false,name=var"`
    
}

type AgentStoreGetRequest struct {
    PathParams AgentStoreGetPathParams 
    
}

type AgentStoreGetResponse struct {
    ContentType string 
    StatusCode int64 
    AgentStoreGet200ApplicationJSONString *string 
    
}

