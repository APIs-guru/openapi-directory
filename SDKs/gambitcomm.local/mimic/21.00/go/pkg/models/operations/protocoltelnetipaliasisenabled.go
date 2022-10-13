package operations

type ProtocolTelnetIpaliasIsenabledPathParams struct {
	AgentNum  int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Ipaddress string `pathParam:"style=simple,explode=false,name=ipaddress"`
	Port      int32  `pathParam:"style=simple,explode=false,name=port"`
}

type ProtocolTelnetIpaliasIsenabledRequest struct {
	PathParams ProtocolTelnetIpaliasIsenabledPathParams
}

type ProtocolTelnetIpaliasIsenabledResponse struct {
	ContentType                                            string
	StatusCode                                             int64
	ProtocolTelnetIpaliasIsenabled200ApplicationJSONString *string
}
