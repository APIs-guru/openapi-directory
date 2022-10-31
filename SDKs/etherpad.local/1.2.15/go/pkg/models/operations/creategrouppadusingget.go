package operations

type CreateGroupPadUsingGetQueryParams struct {
	GroupID *string `queryParam:"style=form,explode=true,name=groupID"`
	PadName *string `queryParam:"style=form,explode=true,name=padName"`
	Text    *string `queryParam:"style=form,explode=true,name=text"`
}

type CreateGroupPadUsingGetRequest struct {
	QueryParams CreateGroupPadUsingGetQueryParams
}

type CreateGroupPadUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateGroupPadUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateGroupPadUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateGroupPadUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateGroupPadUsingGetResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	CreateGroupPadUsingGet200ApplicationJSONObject *CreateGroupPadUsingGet200ApplicationJSON
	CreateGroupPadUsingGet400ApplicationJSONObject *CreateGroupPadUsingGet400ApplicationJSON
	CreateGroupPadUsingGet401ApplicationJSONObject *CreateGroupPadUsingGet401ApplicationJSON
	CreateGroupPadUsingGet500ApplicationJSONObject *CreateGroupPadUsingGet500ApplicationJSON
}
