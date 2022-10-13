package operations

type AppendTextUsingGetQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
	Text  *string `queryParam:"style=form,explode=true,name=text"`
}

type AppendTextUsingGetRequest struct {
	QueryParams AppendTextUsingGetQueryParams
}

type AppendTextUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type AppendTextUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type AppendTextUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type AppendTextUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type AppendTextUsingGetResponse struct {
	ContentType                                string
	StatusCode                                 int64
	AppendTextUsingGet200ApplicationJSONObject *AppendTextUsingGet200ApplicationJSON
	AppendTextUsingGet400ApplicationJSONObject *AppendTextUsingGet400ApplicationJSON
	AppendTextUsingGet401ApplicationJSONObject *AppendTextUsingGet401ApplicationJSON
	AppendTextUsingGet500ApplicationJSONObject *AppendTextUsingGet500ApplicationJSON
}
