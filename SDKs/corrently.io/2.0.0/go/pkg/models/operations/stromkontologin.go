package operations

type StromkontoLoginRequestBody struct {
	Email *string `json:"email"`
}

type StromkontoLoginRequest struct {
	Request StromkontoLoginRequestBody `request:"mediaType=application/json"`
}

type StromkontoLogin200ApplicationJSONStatusEnum string

const (
	StromkontoLogin200ApplicationJSONStatusEnumRegistered   StromkontoLogin200ApplicationJSONStatusEnum = "registered"
	StromkontoLogin200ApplicationJSONStatusEnumUnregistered StromkontoLogin200ApplicationJSONStatusEnum = "unregistered"
)

type StromkontoLogin200ApplicationJSON struct {
	Status *StromkontoLogin200ApplicationJSONStatusEnum `json:"status"`
}

type StromkontoLoginResponse struct {
	ContentType                             string
	StatusCode                              int64
	StromkontoLogin200ApplicationJSONObject *StromkontoLogin200ApplicationJSON
}
