package operations



type GetObjectsPathParams struct {
    Oid string `pathParam:"style=simple,explode=false,name=OID"`
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type GetObjectsRequest struct {
    PathParams GetObjectsPathParams 
    
}

type GetObjectsResponse struct {
    ContentType string 
    StatusCode int64 
    GetObjects200ApplicationJSONStrings []string 
    
}

