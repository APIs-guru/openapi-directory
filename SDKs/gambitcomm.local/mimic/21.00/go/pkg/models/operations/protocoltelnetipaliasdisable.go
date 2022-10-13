package operations

type ProtocolTelnetIpaliasDisablePathParams struct {
	AgentNum  int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Ipaddress string `pathParam:"style=simple,explode=false,name=ipaddress"`
	Port      int32  `pathParam:"style=simple,explode=false,name=port"`
}

type ProtocolTelnetIpaliasDisableRequest struct {
	PathParams ProtocolTelnetIpaliasDisablePathParams
}

type ProtocolTelnetIpaliasDisableResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	ProtocolTelnetIpaliasDisable200ApplicationJSONString *string
}
