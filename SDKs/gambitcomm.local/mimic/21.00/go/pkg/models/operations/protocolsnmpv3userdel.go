package operations

type ProtocolSnmpv3UserDelPathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	UserName string `pathParam:"style=simple,explode=false,name=userName"`
}

type ProtocolSnmpv3UserDelRequest struct {
	PathParams ProtocolSnmpv3UserDelPathParams
}

type ProtocolSnmpv3UserDelResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	ProtocolSnmpv3UserDel200ApplicationJSONString *string
}
