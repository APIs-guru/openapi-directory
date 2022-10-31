package operations

type ProtocolSnmptcpGetArgsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolSnmptcpGetArgsRequest struct {
	PathParams ProtocolSnmptcpGetArgsPathParams
}

type ProtocolSnmptcpGetArgsResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	ProtocolSnmptcpGetArgs200ApplicationJSONObject map[string]interface{}
}
