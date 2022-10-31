package operations



type SetWriteCommunityPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Write string `pathParam:"style=simple,explode=false,name=write"`
    
}

type SetWriteCommunityRequest struct {
    PathParams SetWriteCommunityPathParams 
    
}

type SetWriteCommunityResponse struct {
    ContentType string 
    StatusCode int64 
    SetWriteCommunity200ApplicationJSONString *string 
    
}

