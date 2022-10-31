package operations



type AddPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Instance string `pathParam:"style=simple,explode=false,name=instance"`
    Object string `pathParam:"style=simple,explode=false,name=object"`
    
}

type AddRequest struct {
    PathParams AddPathParams 
    
}

type AddResponse struct {
    ContentType string 
    StatusCode int64 
    Add200ApplicationJSONString *string 
    
}

