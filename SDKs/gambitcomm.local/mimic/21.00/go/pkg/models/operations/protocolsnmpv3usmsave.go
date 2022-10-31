package operations

type ProtocolSnmpv3UsmSavePathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolSnmpv3UsmSaveRequest struct {
	PathParams ProtocolSnmpv3UsmSavePathParams
}

type ProtocolSnmpv3UsmSaveResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	ProtocolSnmpv3UsmSave200ApplicationJSONStrings []string
}
