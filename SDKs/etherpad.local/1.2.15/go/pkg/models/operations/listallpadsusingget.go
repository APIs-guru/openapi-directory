package operations

type ListAllPadsUsingGet200ApplicationJSONData struct {
	PadIDs []string `json:"padIDs,omitempty"`
}

type ListAllPadsUsingGet200ApplicationJSON struct {
	Code    *int64                                     `json:"code,omitempty"`
	Data    *ListAllPadsUsingGet200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                    `json:"message,omitempty"`
}

type ListAllPadsUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListAllPadsUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListAllPadsUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListAllPadsUsingGetResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	ListAllPadsUsingGet200ApplicationJSONObject *ListAllPadsUsingGet200ApplicationJSON
	ListAllPadsUsingGet400ApplicationJSONObject *ListAllPadsUsingGet400ApplicationJSON
	ListAllPadsUsingGet401ApplicationJSONObject *ListAllPadsUsingGet401ApplicationJSON
	ListAllPadsUsingGet500ApplicationJSONObject *ListAllPadsUsingGet500ApplicationJSON
}
