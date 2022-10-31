package operations



type GetReadCommunityPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type GetReadCommunityRequest struct {
    PathParams GetReadCommunityPathParams 
    
}

type GetReadCommunityResponse struct {
    ContentType string 
    StatusCode int64 
    GetReadCommunity200ApplicationJSONString *string 
    
}

