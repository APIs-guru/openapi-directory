package operations



type ProtocolGetConfigPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Prot string `pathParam:"style=simple,explode=false,name=prot"`
    
}

type ProtocolGetConfigRequest struct {
    PathParams ProtocolGetConfigPathParams 
    
}

type ProtocolGetConfigResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolGetConfig200ApplicationJSONObject map[string]interface{} 
    
}

