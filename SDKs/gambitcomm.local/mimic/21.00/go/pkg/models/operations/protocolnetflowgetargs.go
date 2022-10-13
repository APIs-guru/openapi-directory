package operations

type ProtocolNetflowGetArgsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolNetflowGetArgsRequest struct {
	PathParams ProtocolNetflowGetArgsPathParams
}

type ProtocolNetflowGetArgsResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	ProtocolNetflowGetArgs200ApplicationJSONObject map[string]interface{}
}
