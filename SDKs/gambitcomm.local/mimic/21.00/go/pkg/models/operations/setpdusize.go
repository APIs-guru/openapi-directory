package operations



type SetPdusizePathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Pdusize int32 `pathParam:"style=simple,explode=false,name=pdusize"`
    
}

type SetPdusizeRequest struct {
    PathParams SetPdusizePathParams 
    
}

type SetPdusizeResponse struct {
    ContentType string 
    StatusCode int64 
    SetPdusize200ApplicationJSONInt32Integer *int32 
    
}

