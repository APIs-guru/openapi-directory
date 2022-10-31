package operations

type GetSavedRevisionsCountUsingGetQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type GetSavedRevisionsCountUsingGetRequest struct {
	QueryParams GetSavedRevisionsCountUsingGetQueryParams
}

type GetSavedRevisionsCountUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetSavedRevisionsCountUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetSavedRevisionsCountUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetSavedRevisionsCountUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetSavedRevisionsCountUsingGetResponse struct {
	ContentType                                            string
	StatusCode                                             int64
	GetSavedRevisionsCountUsingGet200ApplicationJSONObject *GetSavedRevisionsCountUsingGet200ApplicationJSON
	GetSavedRevisionsCountUsingGet400ApplicationJSONObject *GetSavedRevisionsCountUsingGet400ApplicationJSON
	GetSavedRevisionsCountUsingGet401ApplicationJSONObject *GetSavedRevisionsCountUsingGet401ApplicationJSON
	GetSavedRevisionsCountUsingGet500ApplicationJSONObject *GetSavedRevisionsCountUsingGet500ApplicationJSON
}
