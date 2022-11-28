package operations

type GetRevisionsCountUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type GetRevisionsCountUsingPost200ApplicationJSONData struct {
	Revisions *int64 `json:"revisions,omitempty"`
}

type GetRevisionsCountUsingPost200ApplicationJSON struct {
	Code    *int64                                            `json:"code,omitempty"`
	Data    *GetRevisionsCountUsingPost200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                           `json:"message,omitempty"`
}

type GetRevisionsCountUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetRevisionsCountUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetRevisionsCountUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetRevisionsCountUsingPostRequest struct {
	QueryParams GetRevisionsCountUsingPostQueryParams
}

type GetRevisionsCountUsingPostResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	GetRevisionsCountUsingPost200ApplicationJSONObject *GetRevisionsCountUsingPost200ApplicationJSON
	GetRevisionsCountUsingPost400ApplicationJSONObject *GetRevisionsCountUsingPost400ApplicationJSON
	GetRevisionsCountUsingPost401ApplicationJSONObject *GetRevisionsCountUsingPost401ApplicationJSON
	GetRevisionsCountUsingPost500ApplicationJSONObject *GetRevisionsCountUsingPost500ApplicationJSON
}
