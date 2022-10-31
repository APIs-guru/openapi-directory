package operations



type GetVariablesPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Instance string `pathParam:"style=simple,explode=false,name=instance"`
    Object string `pathParam:"style=simple,explode=false,name=object"`
    
}

type GetVariablesRequest struct {
    PathParams GetVariablesPathParams 
    
}

type GetVariablesResponse struct {
    ContentType string 
    StatusCode int64 
    GetVariables200ApplicationJSONStrings []string 
    
}

