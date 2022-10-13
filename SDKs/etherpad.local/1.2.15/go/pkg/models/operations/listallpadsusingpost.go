package operations

type ListAllPadsUsingPost200ApplicationJSONData struct {
	PadIDs []string `json:"padIDs"`
}

type ListAllPadsUsingPost200ApplicationJSON struct {
	Code    *int64                                      `json:"code"`
	Data    *ListAllPadsUsingPost200ApplicationJSONData `json:"data"`
	Message *string                                     `json:"message"`
}

type ListAllPadsUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListAllPadsUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListAllPadsUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListAllPadsUsingPostResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	ListAllPadsUsingPost200ApplicationJSONObject *ListAllPadsUsingPost200ApplicationJSON
	ListAllPadsUsingPost400ApplicationJSONObject *ListAllPadsUsingPost400ApplicationJSON
	ListAllPadsUsingPost401ApplicationJSONObject *ListAllPadsUsingPost401ApplicationJSON
	ListAllPadsUsingPost500ApplicationJSONObject *ListAllPadsUsingPost500ApplicationJSON
}
