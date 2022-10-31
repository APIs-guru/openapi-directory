package operations

type ProtocolSnmpv3ViewDelPathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	ViewName string `pathParam:"style=simple,explode=false,name=viewName"`
}

type ProtocolSnmpv3ViewDelRequest struct {
	PathParams ProtocolSnmpv3ViewDelPathParams
}

type ProtocolSnmpv3ViewDelResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	ProtocolSnmpv3ViewDel200ApplicationJSONString *string
}
