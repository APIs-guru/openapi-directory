package operations



type AgentStorePersistsPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Var string `pathParam:"style=simple,explode=false,name=var"`
    
}

type AgentStorePersistsRequest struct {
    PathParams AgentStorePersistsPathParams 
    
}

type AgentStorePersistsResponse struct {
    ContentType string 
    StatusCode int64 
    AgentStorePersists200ApplicationJSONString *string 
    
}

