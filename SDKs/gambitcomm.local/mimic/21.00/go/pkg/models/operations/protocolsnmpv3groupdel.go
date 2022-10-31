package operations

type ProtocolSnmpv3GroupDelPathParams struct {
	AgentNum  int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	GroupName string `pathParam:"style=simple,explode=false,name=groupName"`
}

type ProtocolSnmpv3GroupDelRequest struct {
	PathParams ProtocolSnmpv3GroupDelPathParams
}

type ProtocolSnmpv3GroupDelResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	ProtocolSnmpv3GroupDel200ApplicationJSONString *string
}
