package operations

type CreateGroupUsingGet200ApplicationJSONData struct {
	GroupID *string `json:"groupID"`
}

type CreateGroupUsingGet200ApplicationJSON struct {
	Code    *int64                                     `json:"code"`
	Data    *CreateGroupUsingGet200ApplicationJSONData `json:"data"`
	Message *string                                    `json:"message"`
}

type CreateGroupUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateGroupUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateGroupUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateGroupUsingGetResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	CreateGroupUsingGet200ApplicationJSONObject *CreateGroupUsingGet200ApplicationJSON
	CreateGroupUsingGet400ApplicationJSONObject *CreateGroupUsingGet400ApplicationJSON
	CreateGroupUsingGet401ApplicationJSONObject *CreateGroupUsingGet401ApplicationJSON
	CreateGroupUsingGet500ApplicationJSONObject *CreateGroupUsingGet500ApplicationJSON
}
