package operations



type SplitOidPathParams struct {
    Oid string `pathParam:"style=simple,explode=false,name=OID"`
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type SplitOidRequest struct {
    PathParams SplitOidPathParams 
    
}

type SplitOidResponse struct {
    ContentType string 
    StatusCode int64 
    SplitOid200ApplicationJSONStrings []string 
    
}

