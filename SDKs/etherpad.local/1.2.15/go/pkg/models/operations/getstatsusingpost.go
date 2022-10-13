package operations

type GetStatsUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetStatsUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetStatsUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetStatsUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetStatsUsingPostResponse struct {
	ContentType                               string
	StatusCode                                int64
	GetStatsUsingPost200ApplicationJSONObject *GetStatsUsingPost200ApplicationJSON
	GetStatsUsingPost400ApplicationJSONObject *GetStatsUsingPost400ApplicationJSON
	GetStatsUsingPost401ApplicationJSONObject *GetStatsUsingPost401ApplicationJSON
	GetStatsUsingPost500ApplicationJSONObject *GetStatsUsingPost500ApplicationJSON
}
