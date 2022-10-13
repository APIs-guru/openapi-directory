package operations

type ProtocolSSHIpaliasIsenabledPathParams struct {
	AgentNum  int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Ipaddress string `pathParam:"style=simple,explode=false,name=ipaddress"`
	Port      int32  `pathParam:"style=simple,explode=false,name=port"`
}

type ProtocolSSHIpaliasIsenabledRequest struct {
	PathParams ProtocolSSHIpaliasIsenabledPathParams
}

type ProtocolSSHIpaliasIsenabledResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	ProtocolSSHIpaliasIsenabled200ApplicationJSONString *string
}
