package operations



type SetOwnerPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    
}

type SetOwnerRequest struct {
    PathParams SetOwnerPathParams 
    
}

type SetOwnerResponse struct {
    ContentType string 
    StatusCode int64 
    SetOwner200ApplicationJSONString *string 
    
}

