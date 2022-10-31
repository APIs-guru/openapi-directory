package operations



type MsetValuePathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type MsetValueRequest struct {
    PathParams MsetValuePathParams 
    Request [][]string `request:"mediaType=application/json"`
    
}

type MsetValueResponse struct {
    ContentType string 
    StatusCode int64 
    MsetValue200ApplicationJSONString *string 
    
}

