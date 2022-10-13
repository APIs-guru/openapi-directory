package operations

type CreateGroupUsingPost200ApplicationJSONData struct {
	GroupID *string `json:"groupID"`
}

type CreateGroupUsingPost200ApplicationJSON struct {
	Code    *int64                                      `json:"code"`
	Data    *CreateGroupUsingPost200ApplicationJSONData `json:"data"`
	Message *string                                     `json:"message"`
}

type CreateGroupUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateGroupUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateGroupUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateGroupUsingPostResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	CreateGroupUsingPost200ApplicationJSONObject *CreateGroupUsingPost200ApplicationJSON
	CreateGroupUsingPost400ApplicationJSONObject *CreateGroupUsingPost400ApplicationJSON
	CreateGroupUsingPost401ApplicationJSONObject *CreateGroupUsingPost401ApplicationJSON
	CreateGroupUsingPost500ApplicationJSONObject *CreateGroupUsingPost500ApplicationJSON
}
