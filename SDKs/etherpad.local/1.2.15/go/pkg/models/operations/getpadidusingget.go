package operations

type GetPadIDUsingGetQueryParams struct {
	RoID *string `queryParam:"style=form,explode=true,name=roID"`
}

type GetPadIDUsingGetRequest struct {
	QueryParams GetPadIDUsingGetQueryParams
}

type GetPadIDUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetPadIDUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetPadIDUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetPadIDUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetPadIDUsingGetResponse struct {
	ContentType                              string
	StatusCode                               int64
	GetPadIDUsingGet200ApplicationJSONObject *GetPadIDUsingGet200ApplicationJSON
	GetPadIDUsingGet400ApplicationJSONObject *GetPadIDUsingGet400ApplicationJSON
	GetPadIDUsingGet401ApplicationJSONObject *GetPadIDUsingGet401ApplicationJSON
	GetPadIDUsingGet500ApplicationJSONObject *GetPadIDUsingGet500ApplicationJSON
}
