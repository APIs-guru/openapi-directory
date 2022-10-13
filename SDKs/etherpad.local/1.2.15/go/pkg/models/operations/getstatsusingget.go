package operations

type GetStatsUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetStatsUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetStatsUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetStatsUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetStatsUsingGetResponse struct {
	ContentType                              string
	StatusCode                               int64
	GetStatsUsingGet200ApplicationJSONObject *GetStatsUsingGet200ApplicationJSON
	GetStatsUsingGet400ApplicationJSONObject *GetStatsUsingGet400ApplicationJSON
	GetStatsUsingGet401ApplicationJSONObject *GetStatsUsingGet401ApplicationJSON
	GetStatsUsingGet500ApplicationJSONObject *GetStatsUsingGet500ApplicationJSON
}
