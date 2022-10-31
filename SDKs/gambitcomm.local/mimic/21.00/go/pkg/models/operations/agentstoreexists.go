package operations



type AgentStoreExistsPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Var string `pathParam:"style=simple,explode=false,name=var"`
    
}

type AgentStoreExistsRequest struct {
    PathParams AgentStoreExistsPathParams 
    
}

type AgentStoreExistsResponse struct {
    ContentType string 
    StatusCode int64 
    AgentStoreExists200ApplicationJSONString *string 
    
}

