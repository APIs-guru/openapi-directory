package operations

type ProtocolCoapSetConfigPathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Argument string `pathParam:"style=simple,explode=false,name=argument"`
	Value    string `pathParam:"style=simple,explode=false,name=value"`
}

type ProtocolCoapSetConfigRequest struct {
	PathParams ProtocolCoapSetConfigPathParams
}

type ProtocolCoapSetConfigResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	ProtocolCoapSetConfig200ApplicationJSONString *string
}
