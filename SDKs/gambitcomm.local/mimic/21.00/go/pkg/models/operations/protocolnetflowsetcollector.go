package operations

type ProtocolNetflowSetCollectorPathParams struct {
	AgentNum    int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	CollectorIP string `pathParam:"style=simple,explode=false,name=collectorIP"`
}

type ProtocolNetflowSetCollectorRequest struct {
	PathParams ProtocolNetflowSetCollectorPathParams
}

type ProtocolNetflowSetCollectorResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	ProtocolNetflowSetCollector200ApplicationJSONString *string
}
