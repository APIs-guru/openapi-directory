package operations

type ProtocolTelnetIpaliasEnablePathParams struct {
	AgentNum  int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Ipaddress string `pathParam:"style=simple,explode=false,name=ipaddress"`
	Port      int32  `pathParam:"style=simple,explode=false,name=port"`
}

type ProtocolTelnetIpaliasEnableRequest struct {
	PathParams ProtocolTelnetIpaliasEnablePathParams
}

type ProtocolTelnetIpaliasEnableResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	ProtocolTelnetIpaliasEnable200ApplicationJSONString *string
}
