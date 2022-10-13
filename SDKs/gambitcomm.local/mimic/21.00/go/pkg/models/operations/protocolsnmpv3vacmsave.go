package operations

type ProtocolSnmpv3VacmSavePathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolSnmpv3VacmSaveRequest struct {
	PathParams ProtocolSnmpv3VacmSavePathParams
}

type ProtocolSnmpv3VacmSaveResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	ProtocolSnmpv3VacmSave200ApplicationJSONStrings []string
}
