package operations

type ProtocolTelnetConnectionSignalPathParams struct {
	AgentNum     int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	ConnectionID int32  `pathParam:"style=simple,explode=false,name=connectionID"`
	SignalName   string `pathParam:"style=simple,explode=false,name=signalName"`
}

type ProtocolTelnetConnectionSignalRequest struct {
	PathParams ProtocolTelnetConnectionSignalPathParams
}

type ProtocolTelnetConnectionSignalResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	ProtocolTelnetConnectionSignal200ApplicationJSONStrings []string
}
