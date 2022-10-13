package operations

type ListAllGroupsUsingPost200ApplicationJSONData struct {
	GroupIDs []string `json:"groupIDs"`
}

type ListAllGroupsUsingPost200ApplicationJSON struct {
	Code    *int64                                        `json:"code"`
	Data    *ListAllGroupsUsingPost200ApplicationJSONData `json:"data"`
	Message *string                                       `json:"message"`
}

type ListAllGroupsUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListAllGroupsUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListAllGroupsUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListAllGroupsUsingPostResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	ListAllGroupsUsingPost200ApplicationJSONObject *ListAllGroupsUsingPost200ApplicationJSON
	ListAllGroupsUsingPost400ApplicationJSONObject *ListAllGroupsUsingPost400ApplicationJSON
	ListAllGroupsUsingPost401ApplicationJSONObject *ListAllGroupsUsingPost401ApplicationJSON
	ListAllGroupsUsingPost500ApplicationJSONObject *ListAllGroupsUsingPost500ApplicationJSON
}
