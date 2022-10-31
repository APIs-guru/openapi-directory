package operations



type ResumePathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ResumeRequest struct {
    PathParams ResumePathParams 
    
}

type ResumeResponse struct {
    ContentType string 
    StatusCode int64 
    Resume200ApplicationJSONString *string 
    
}

