package operations



type GetValidatePathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type GetValidateRequest struct {
    PathParams GetValidatePathParams 
    
}

type GetValidateResponse struct {
    ContentType string 
    StatusCode int64 
    GetValidate200ApplicationJSONInt32Integer *int32 
    
}

