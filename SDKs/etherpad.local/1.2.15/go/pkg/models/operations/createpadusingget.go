package operations

type CreatePadUsingGetQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
	Text  *string `queryParam:"style=form,explode=true,name=text"`
}

type CreatePadUsingGetRequest struct {
	QueryParams CreatePadUsingGetQueryParams
}

type CreatePadUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreatePadUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreatePadUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreatePadUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreatePadUsingGetResponse struct {
	ContentType                               string
	StatusCode                                int64
	CreatePadUsingGet200ApplicationJSONObject *CreatePadUsingGet200ApplicationJSON
	CreatePadUsingGet400ApplicationJSONObject *CreatePadUsingGet400ApplicationJSON
	CreatePadUsingGet401ApplicationJSONObject *CreatePadUsingGet401ApplicationJSON
	CreatePadUsingGet500ApplicationJSONObject *CreatePadUsingGet500ApplicationJSON
}
