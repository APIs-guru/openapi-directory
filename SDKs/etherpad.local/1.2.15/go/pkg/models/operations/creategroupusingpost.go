package operations

type CreateGroupUsingPost200ApplicationJSONData struct {
	GroupID *string `json:"groupID,omitempty"`
}

type CreateGroupUsingPost200ApplicationJSON struct {
	Code    *int64                                      `json:"code,omitempty"`
	Data    *CreateGroupUsingPost200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                     `json:"message,omitempty"`
}

type CreateGroupUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateGroupUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateGroupUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateGroupUsingPostResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	CreateGroupUsingPost200ApplicationJSONObject *CreateGroupUsingPost200ApplicationJSON
	CreateGroupUsingPost400ApplicationJSONObject *CreateGroupUsingPost400ApplicationJSON
	CreateGroupUsingPost401ApplicationJSONObject *CreateGroupUsingPost401ApplicationJSON
	CreateGroupUsingPost500ApplicationJSONObject *CreateGroupUsingPost500ApplicationJSON
}
