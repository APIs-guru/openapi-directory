package operations

type ProtocolSnmpv3ViewClearPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolSnmpv3ViewClearRequest struct {
	PathParams ProtocolSnmpv3ViewClearPathParams
}

type ProtocolSnmpv3ViewClearResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	ProtocolSnmpv3ViewClear200ApplicationJSONString *string
}
