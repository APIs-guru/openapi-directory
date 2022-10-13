package operations

type GetRevisionsCountUsingGetQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type GetRevisionsCountUsingGetRequest struct {
	QueryParams GetRevisionsCountUsingGetQueryParams
}

type GetRevisionsCountUsingGet200ApplicationJSONData struct {
	Revisions *int64 `json:"revisions"`
}

type GetRevisionsCountUsingGet200ApplicationJSON struct {
	Code    *int64                                           `json:"code"`
	Data    *GetRevisionsCountUsingGet200ApplicationJSONData `json:"data"`
	Message *string                                          `json:"message"`
}

type GetRevisionsCountUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetRevisionsCountUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetRevisionsCountUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetRevisionsCountUsingGetResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	GetRevisionsCountUsingGet200ApplicationJSONObject *GetRevisionsCountUsingGet200ApplicationJSON
	GetRevisionsCountUsingGet400ApplicationJSONObject *GetRevisionsCountUsingGet400ApplicationJSON
	GetRevisionsCountUsingGet401ApplicationJSONObject *GetRevisionsCountUsingGet401ApplicationJSON
	GetRevisionsCountUsingGet500ApplicationJSONObject *GetRevisionsCountUsingGet500ApplicationJSON
}
