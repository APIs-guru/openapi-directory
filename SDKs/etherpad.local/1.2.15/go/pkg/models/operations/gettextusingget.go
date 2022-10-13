package operations

type GetTextUsingGetQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
	Rev   *string `queryParam:"style=form,explode=true,name=rev"`
}

type GetTextUsingGetRequest struct {
	QueryParams GetTextUsingGetQueryParams
}

type GetTextUsingGet200ApplicationJSONData struct {
	Text *string `json:"text"`
}

type GetTextUsingGet200ApplicationJSON struct {
	Code    *int64                                 `json:"code"`
	Data    *GetTextUsingGet200ApplicationJSONData `json:"data"`
	Message *string                                `json:"message"`
}

type GetTextUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetTextUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetTextUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetTextUsingGetResponse struct {
	ContentType                             string
	StatusCode                              int64
	GetTextUsingGet200ApplicationJSONObject *GetTextUsingGet200ApplicationJSON
	GetTextUsingGet400ApplicationJSONObject *GetTextUsingGet400ApplicationJSON
	GetTextUsingGet401ApplicationJSONObject *GetTextUsingGet401ApplicationJSON
	GetTextUsingGet500ApplicationJSONObject *GetTextUsingGet500ApplicationJSON
}
