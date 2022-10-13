package operations

type ProtocolSnmpv3AccessListPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolSnmpv3AccessListRequest struct {
	PathParams ProtocolSnmpv3AccessListPathParams
}

type ProtocolSnmpv3AccessListResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	ProtocolSnmpv3AccessList200ApplicationJSONStrings []string
}
