package operations

type GetRevisionChangesetUsingGetQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
	Rev   *string `queryParam:"style=form,explode=true,name=rev"`
}

type GetRevisionChangesetUsingGetRequest struct {
	QueryParams GetRevisionChangesetUsingGetQueryParams
}

type GetRevisionChangesetUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetRevisionChangesetUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetRevisionChangesetUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetRevisionChangesetUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetRevisionChangesetUsingGetResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	GetRevisionChangesetUsingGet200ApplicationJSONObject *GetRevisionChangesetUsingGet200ApplicationJSON
	GetRevisionChangesetUsingGet400ApplicationJSONObject *GetRevisionChangesetUsingGet400ApplicationJSON
	GetRevisionChangesetUsingGet401ApplicationJSONObject *GetRevisionChangesetUsingGet401ApplicationJSON
	GetRevisionChangesetUsingGet500ApplicationJSONObject *GetRevisionChangesetUsingGet500ApplicationJSON
}
