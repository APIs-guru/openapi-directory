package operations

type GetProtocolsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type GetProtocolsRequest struct {
	PathParams GetProtocolsPathParams
}

type GetProtocolsResponse struct {
	ContentType                           string
	StatusCode                            int64
	GetProtocols200ApplicationJSONStrings []string
}
