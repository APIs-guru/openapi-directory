package operations

type CheckTokenUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CheckTokenUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CheckTokenUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CheckTokenUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CheckTokenUsingGetResponse struct {
	ContentType                                string
	StatusCode                                 int64
	CheckTokenUsingGet200ApplicationJSONObject *CheckTokenUsingGet200ApplicationJSON
	CheckTokenUsingGet400ApplicationJSONObject *CheckTokenUsingGet400ApplicationJSON
	CheckTokenUsingGet401ApplicationJSONObject *CheckTokenUsingGet401ApplicationJSON
	CheckTokenUsingGet500ApplicationJSONObject *CheckTokenUsingGet500ApplicationJSON
}
