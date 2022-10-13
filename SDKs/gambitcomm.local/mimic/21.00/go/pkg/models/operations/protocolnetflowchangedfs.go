package operations

type ProtocolNetflowChangeDfsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
	Interval int32 `pathParam:"style=simple,explode=false,name=interval"`
}

type ProtocolNetflowChangeDfsRequest struct {
	PathParams ProtocolNetflowChangeDfsPathParams
}

type ProtocolNetflowChangeDfsResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	ProtocolNetflowChangeDfs200ApplicationJSONString *string
}
