package operations



type ProtocolNetflowChangeAttrPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Attr string `pathParam:"style=simple,explode=false,name=attr"`
    FieldNum int32 `pathParam:"style=simple,explode=false,name=field-num"`
    FlowsetUID int32 `pathParam:"style=simple,explode=false,name=flowset-uid"`
    Value string `pathParam:"style=simple,explode=false,name=value"`
    
}

type ProtocolNetflowChangeAttrRequest struct {
    PathParams ProtocolNetflowChangeAttrPathParams 
    
}

type ProtocolNetflowChangeAttrResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolNetflowChangeAttr200ApplicationJSONString *string 
    
}

