package operations

type ProtocolSnmptcpIpaliasDisablePathParams struct {
	AgentNum  int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Ipaddress string `pathParam:"style=simple,explode=false,name=ipaddress"`
	Port      int32  `pathParam:"style=simple,explode=false,name=port"`
}

type ProtocolSnmptcpIpaliasDisableRequest struct {
	PathParams ProtocolSnmptcpIpaliasDisablePathParams
}

type ProtocolSnmptcpIpaliasDisableResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	ProtocolSnmptcpIpaliasDisable200ApplicationJSONString *string
}
