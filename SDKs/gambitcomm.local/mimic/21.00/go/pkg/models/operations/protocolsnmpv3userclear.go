package operations

type ProtocolSnmpv3UserClearPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolSnmpv3UserClearRequest struct {
	PathParams ProtocolSnmpv3UserClearPathParams
}

type ProtocolSnmpv3UserClearResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	ProtocolSnmpv3UserClear200ApplicationJSONString *string
}
