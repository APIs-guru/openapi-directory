package operations



type SetValuePathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Instance string `pathParam:"style=simple,explode=false,name=instance"`
    Object string `pathParam:"style=simple,explode=false,name=object"`
    Variable string `pathParam:"style=simple,explode=false,name=variable"`
    
}

type SetValueRequest struct {
    PathParams SetValuePathParams 
    Request *string `request:"mediaType=application/json"`
    
}

type SetValueResponse struct {
    ContentType string 
    StatusCode int64 
    SetValue200ApplicationJSONString *string 
    
}

