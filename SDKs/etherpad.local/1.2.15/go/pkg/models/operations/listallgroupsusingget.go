package operations

type ListAllGroupsUsingGet200ApplicationJSONData struct {
	GroupIDs []string `json:"groupIDs"`
}

type ListAllGroupsUsingGet200ApplicationJSON struct {
	Code    *int64                                       `json:"code"`
	Data    *ListAllGroupsUsingGet200ApplicationJSONData `json:"data"`
	Message *string                                      `json:"message"`
}

type ListAllGroupsUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListAllGroupsUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListAllGroupsUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListAllGroupsUsingGetResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	ListAllGroupsUsingGet200ApplicationJSONObject *ListAllGroupsUsingGet200ApplicationJSON
	ListAllGroupsUsingGet400ApplicationJSONObject *ListAllGroupsUsingGet400ApplicationJSON
	ListAllGroupsUsingGet401ApplicationJSONObject *ListAllGroupsUsingGet401ApplicationJSON
	ListAllGroupsUsingGet500ApplicationJSONObject *ListAllGroupsUsingGet500ApplicationJSON
}
