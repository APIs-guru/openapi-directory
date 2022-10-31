package operations

type ProtocolSSHIpaliasDisablePathParams struct {
	AgentNum  int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Ipaddress string `pathParam:"style=simple,explode=false,name=ipaddress"`
	Port      int32  `pathParam:"style=simple,explode=false,name=port"`
}

type ProtocolSSHIpaliasDisableRequest struct {
	PathParams ProtocolSSHIpaliasDisablePathParams
}

type ProtocolSSHIpaliasDisableResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	ProtocolSSHIpaliasDisable200ApplicationJSONString *string
}
