package operations

type GetReadOnlyIDUsingGetQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type GetReadOnlyIDUsingGetRequest struct {
	QueryParams GetReadOnlyIDUsingGetQueryParams
}

type GetReadOnlyIDUsingGet200ApplicationJSONData struct {
	ReadOnlyID *string `json:"readOnlyID"`
}

type GetReadOnlyIDUsingGet200ApplicationJSON struct {
	Code    *int64                                       `json:"code"`
	Data    *GetReadOnlyIDUsingGet200ApplicationJSONData `json:"data"`
	Message *string                                      `json:"message"`
}

type GetReadOnlyIDUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetReadOnlyIDUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetReadOnlyIDUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetReadOnlyIDUsingGetResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	GetReadOnlyIDUsingGet200ApplicationJSONObject *GetReadOnlyIDUsingGet200ApplicationJSON
	GetReadOnlyIDUsingGet400ApplicationJSONObject *GetReadOnlyIDUsingGet400ApplicationJSON
	GetReadOnlyIDUsingGet401ApplicationJSONObject *GetReadOnlyIDUsingGet401ApplicationJSON
	GetReadOnlyIDUsingGet500ApplicationJSONObject *GetReadOnlyIDUsingGet500ApplicationJSON
}
