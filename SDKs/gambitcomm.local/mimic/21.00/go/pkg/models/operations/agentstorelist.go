package operations



type AgentStoreListPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type AgentStoreListRequest struct {
    PathParams AgentStoreListPathParams 
    
}

type AgentStoreListResponse struct {
    ContentType string 
    StatusCode int64 
    AgentStoreList200ApplicationJSONStrings []string 
    
}

