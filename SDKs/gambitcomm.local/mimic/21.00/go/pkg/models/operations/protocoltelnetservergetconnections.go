package operations

type ProtocolTelnetServerGetConnectionsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolTelnetServerGetConnectionsRequest struct {
	PathParams ProtocolTelnetServerGetConnectionsPathParams
}

type ProtocolTelnetServerGetConnectionsResponse struct {
	ContentType                                                       string
	StatusCode                                                        int64
	ProtocolTelnetServerGetConnections200ApplicationJSONInt32Integers []int32
}
