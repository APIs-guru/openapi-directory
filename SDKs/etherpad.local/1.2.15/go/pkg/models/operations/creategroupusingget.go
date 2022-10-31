package operations

type CreateGroupUsingGet200ApplicationJSONData struct {
	GroupID *string `json:"groupID,omitempty"`
}

type CreateGroupUsingGet200ApplicationJSON struct {
	Code    *int64                                     `json:"code,omitempty"`
	Data    *CreateGroupUsingGet200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                    `json:"message,omitempty"`
}

type CreateGroupUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateGroupUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateGroupUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateGroupUsingGetResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	CreateGroupUsingGet200ApplicationJSONObject *CreateGroupUsingGet200ApplicationJSON
	CreateGroupUsingGet400ApplicationJSONObject *CreateGroupUsingGet400ApplicationJSON
	CreateGroupUsingGet401ApplicationJSONObject *CreateGroupUsingGet401ApplicationJSON
	CreateGroupUsingGet500ApplicationJSONObject *CreateGroupUsingGet500ApplicationJSON
}
