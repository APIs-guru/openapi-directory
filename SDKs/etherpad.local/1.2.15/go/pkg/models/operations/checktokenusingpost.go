package operations

type CheckTokenUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CheckTokenUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CheckTokenUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CheckTokenUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CheckTokenUsingPostResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	CheckTokenUsingPost200ApplicationJSONObject *CheckTokenUsingPost200ApplicationJSON
	CheckTokenUsingPost400ApplicationJSONObject *CheckTokenUsingPost400ApplicationJSON
	CheckTokenUsingPost401ApplicationJSONObject *CheckTokenUsingPost401ApplicationJSON
	CheckTokenUsingPost500ApplicationJSONObject *CheckTokenUsingPost500ApplicationJSON
}
