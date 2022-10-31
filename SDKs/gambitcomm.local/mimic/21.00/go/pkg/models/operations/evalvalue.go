package operations



type EvalValuePathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Instance string `pathParam:"style=simple,explode=false,name=instance"`
    Object string `pathParam:"style=simple,explode=false,name=object"`
    
}

type EvalValueRequest struct {
    PathParams EvalValuePathParams 
    
}

type EvalValueResponse struct {
    ContentType string 
    StatusCode int64 
    EvalValue200ApplicationJSONString *string 
    
}

