package operations



type SetStatePathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Object string `pathParam:"style=simple,explode=false,name=object"`
    State int32 `pathParam:"style=simple,explode=false,name=state"`
    
}

type SetStateRequest struct {
    PathParams SetStatePathParams 
    
}

type SetStateResponse struct {
    ContentType string 
    StatusCode int64 
    SetState200ApplicationJSONString *string 
    
}

