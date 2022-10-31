package operations

type PatchChargeStationVariablePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatchChargeStationVariableRequestBodyVariableEnum string

const (
	PatchChargeStationVariableRequestBodyVariableEnumMeterValueSampleInterval        PatchChargeStationVariableRequestBodyVariableEnum = "MeterValueSampleInterval"
	PatchChargeStationVariableRequestBodyVariableEnumHeartbeatInterval               PatchChargeStationVariableRequestBodyVariableEnum = "HeartbeatInterval"
	PatchChargeStationVariableRequestBodyVariableEnumConnectionTimeOut               PatchChargeStationVariableRequestBodyVariableEnum = "ConnectionTimeOut"
	PatchChargeStationVariableRequestBodyVariableEnumWebSocketPingInterval           PatchChargeStationVariableRequestBodyVariableEnum = "WebSocketPingInterval"
	PatchChargeStationVariableRequestBodyVariableEnumTransactionMessageRetryInterval PatchChargeStationVariableRequestBodyVariableEnum = "TransactionMessageRetryInterval"
	PatchChargeStationVariableRequestBodyVariableEnumTransactionMessageAttempts      PatchChargeStationVariableRequestBodyVariableEnum = "TransactionMessageAttempts"
)

type PatchChargeStationVariableRequestBody struct {
	Value    *string                                            `json:"value,omitempty"`
	Variable *PatchChargeStationVariableRequestBodyVariableEnum `json:"variable,omitempty"`
}

type PatchChargeStationVariableRequest struct {
	PathParams PatchChargeStationVariablePathParams
	Request    PatchChargeStationVariableRequestBody `request:"mediaType=application/json"`
}

type PatchChargeStationVariable201ApplicationJSON struct {
	Message *string                `json:"message,omitempty"`
	Ok      *bool                  `json:"ok,omitempty"`
	Result  map[string]interface{} `json:"result,omitempty"`
}

type PatchChargeStationVariableResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	PatchChargeStationVariable201ApplicationJSONObject *PatchChargeStationVariable201ApplicationJSON
}
