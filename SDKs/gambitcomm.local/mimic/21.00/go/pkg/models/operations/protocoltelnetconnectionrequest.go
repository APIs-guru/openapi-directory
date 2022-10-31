package operations

type ProtocolTelnetConnectionRequestPathParams struct {
	AgentNum     int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Command      string `pathParam:"style=simple,explode=false,name=command"`
	ConnectionID int32  `pathParam:"style=simple,explode=false,name=connectionID"`
}

type ProtocolTelnetConnectionRequestRequest struct {
	PathParams ProtocolTelnetConnectionRequestPathParams
}

type ProtocolTelnetConnectionRequestResponse struct {
	ContentType                                              string
	StatusCode                                               int64
	ProtocolTelnetConnectionRequest200ApplicationJSONStrings []string
}
