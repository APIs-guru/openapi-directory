package operations

type ProtocolSnmpv3AccessClearPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolSnmpv3AccessClearRequest struct {
	PathParams ProtocolSnmpv3AccessClearPathParams
}

type ProtocolSnmpv3AccessClearResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	ProtocolSnmpv3AccessClear200ApplicationJSONString *string
}
