package operations



type GetOwnerPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type GetOwnerRequest struct {
    PathParams GetOwnerPathParams 
    
}

type GetOwnerResponse struct {
    ContentType string 
    StatusCode int64 
    GetOwner200ApplicationJSONString *string 
    
}

