package operations

type CreateGroupIfNotExistsForUsingGetQueryParams struct {
	GroupMapper *string `queryParam:"style=form,explode=true,name=groupMapper"`
}

type CreateGroupIfNotExistsForUsingGetRequest struct {
	QueryParams CreateGroupIfNotExistsForUsingGetQueryParams
}

type CreateGroupIfNotExistsForUsingGet200ApplicationJSONData struct {
	GroupID *string `json:"groupID"`
}

type CreateGroupIfNotExistsForUsingGet200ApplicationJSON struct {
	Code    *int64                                                   `json:"code"`
	Data    *CreateGroupIfNotExistsForUsingGet200ApplicationJSONData `json:"data"`
	Message *string                                                  `json:"message"`
}

type CreateGroupIfNotExistsForUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateGroupIfNotExistsForUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateGroupIfNotExistsForUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateGroupIfNotExistsForUsingGetResponse struct {
	ContentType                                               string
	StatusCode                                                int64
	CreateGroupIfNotExistsForUsingGet200ApplicationJSONObject *CreateGroupIfNotExistsForUsingGet200ApplicationJSON
	CreateGroupIfNotExistsForUsingGet400ApplicationJSONObject *CreateGroupIfNotExistsForUsingGet400ApplicationJSON
	CreateGroupIfNotExistsForUsingGet401ApplicationJSONObject *CreateGroupIfNotExistsForUsingGet401ApplicationJSON
	CreateGroupIfNotExistsForUsingGet500ApplicationJSONObject *CreateGroupIfNotExistsForUsingGet500ApplicationJSON
}
