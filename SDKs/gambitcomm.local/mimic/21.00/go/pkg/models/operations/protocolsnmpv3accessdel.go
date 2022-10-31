package operations

type ProtocolSnmpv3AccessDelPathParams struct {
	AccessName string `pathParam:"style=simple,explode=false,name=accessName"`
	AgentNum   int32  `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolSnmpv3AccessDelRequest struct {
	PathParams ProtocolSnmpv3AccessDelPathParams
}

type ProtocolSnmpv3AccessDelResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	ProtocolSnmpv3AccessDel200ApplicationJSONString *string
}
