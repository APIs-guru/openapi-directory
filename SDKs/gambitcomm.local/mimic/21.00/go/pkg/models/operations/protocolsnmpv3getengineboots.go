package operations

type ProtocolSnmpv3GetEnginebootsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolSnmpv3GetEnginebootsRequest struct {
	PathParams ProtocolSnmpv3GetEnginebootsPathParams
}

type ProtocolSnmpv3GetEnginebootsResponse struct {
	ContentType                                                string
	StatusCode                                                 int64
	ProtocolSnmpv3GetEngineboots200ApplicationJSONInt32Integer *int32
}
