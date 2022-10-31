package operations

type ProtocolWebPortExistsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
	Port     int32 `pathParam:"style=simple,explode=false,name=port"`
}

type ProtocolWebPortExistsRequest struct {
	PathParams ProtocolWebPortExistsPathParams
}

type ProtocolWebPortExistsResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	ProtocolWebPortExists200ApplicationJSONStrings []string
}
