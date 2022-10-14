package operations

type DeletePadUsingGetQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type DeletePadUsingGetRequest struct {
	QueryParams DeletePadUsingGetQueryParams
}

type DeletePadUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeletePadUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeletePadUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeletePadUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeletePadUsingGetResponse struct {
	ContentType                               string
	StatusCode                                int64
	DeletePadUsingGet200ApplicationJSONObject *DeletePadUsingGet200ApplicationJSON
	DeletePadUsingGet400ApplicationJSONObject *DeletePadUsingGet400ApplicationJSON
	DeletePadUsingGet401ApplicationJSONObject *DeletePadUsingGet401ApplicationJSON
	DeletePadUsingGet500ApplicationJSONObject *DeletePadUsingGet500ApplicationJSON
}
