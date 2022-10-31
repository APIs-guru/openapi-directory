package operations

type ProtocolSnmpv3UserListPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolSnmpv3UserListRequest struct {
	PathParams ProtocolSnmpv3UserListPathParams
}

type ProtocolSnmpv3UserListResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	ProtocolSnmpv3UserList200ApplicationJSONStrings []string
}
