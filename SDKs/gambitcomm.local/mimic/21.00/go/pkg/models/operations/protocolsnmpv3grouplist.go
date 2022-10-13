package operations

type ProtocolSnmpv3GroupListPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolSnmpv3GroupListRequest struct {
	PathParams ProtocolSnmpv3GroupListPathParams
}

type ProtocolSnmpv3GroupListResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	ProtocolSnmpv3GroupList200ApplicationJSONStrings []string
}
