package operations

type ListAllPadsUsingGet200ApplicationJSONData struct {
	PadIDs []string `json:"padIDs"`
}

type ListAllPadsUsingGet200ApplicationJSON struct {
	Code    *int64                                     `json:"code"`
	Data    *ListAllPadsUsingGet200ApplicationJSONData `json:"data"`
	Message *string                                    `json:"message"`
}

type ListAllPadsUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListAllPadsUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListAllPadsUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListAllPadsUsingGetResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	ListAllPadsUsingGet200ApplicationJSONObject *ListAllPadsUsingGet200ApplicationJSON
	ListAllPadsUsingGet400ApplicationJSONObject *ListAllPadsUsingGet400ApplicationJSON
	ListAllPadsUsingGet401ApplicationJSONObject *ListAllPadsUsingGet401ApplicationJSON
	ListAllPadsUsingGet500ApplicationJSONObject *ListAllPadsUsingGet500ApplicationJSON
}
