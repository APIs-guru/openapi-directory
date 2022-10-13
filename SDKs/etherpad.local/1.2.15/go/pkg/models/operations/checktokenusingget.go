package operations

type CheckTokenUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CheckTokenUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CheckTokenUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CheckTokenUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CheckTokenUsingGetResponse struct {
	ContentType                                string
	StatusCode                                 int64
	CheckTokenUsingGet200ApplicationJSONObject *CheckTokenUsingGet200ApplicationJSON
	CheckTokenUsingGet400ApplicationJSONObject *CheckTokenUsingGet400ApplicationJSON
	CheckTokenUsingGet401ApplicationJSONObject *CheckTokenUsingGet401ApplicationJSON
	CheckTokenUsingGet500ApplicationJSONObject *CheckTokenUsingGet500ApplicationJSON
}
