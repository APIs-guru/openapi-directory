package operations

type ProtocolSnmpv3AccessAddPathParams struct {
	AgentNum      int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	ContextMatch  string `pathParam:"style=simple,explode=false,name=contextMatch"`
	GroupName     string `pathParam:"style=simple,explode=false,name=groupName"`
	NotifyView    string `pathParam:"style=simple,explode=false,name=notifyView"`
	Prefix        string `pathParam:"style=simple,explode=false,name=prefix"`
	ReadView      string `pathParam:"style=simple,explode=false,name=readView"`
	SecurityLevel string `pathParam:"style=simple,explode=false,name=securityLevel"`
	SecurityModel string `pathParam:"style=simple,explode=false,name=securityModel"`
	WriteView     string `pathParam:"style=simple,explode=false,name=writeView"`
}

type ProtocolSnmpv3AccessAddRequest struct {
	PathParams ProtocolSnmpv3AccessAddPathParams
}

type ProtocolSnmpv3AccessAddResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	ProtocolSnmpv3AccessAdd200ApplicationJSONString *string
}
