package operations

type GetRevisionsCountUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type GetRevisionsCountUsingPostRequest struct {
	QueryParams GetRevisionsCountUsingPostQueryParams
}

type GetRevisionsCountUsingPost200ApplicationJSONData struct {
	Revisions *int64 `json:"revisions"`
}

type GetRevisionsCountUsingPost200ApplicationJSON struct {
	Code    *int64                                            `json:"code"`
	Data    *GetRevisionsCountUsingPost200ApplicationJSONData `json:"data"`
	Message *string                                           `json:"message"`
}

type GetRevisionsCountUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetRevisionsCountUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetRevisionsCountUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetRevisionsCountUsingPostResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	GetRevisionsCountUsingPost200ApplicationJSONObject *GetRevisionsCountUsingPost200ApplicationJSON
	GetRevisionsCountUsingPost400ApplicationJSONObject *GetRevisionsCountUsingPost400ApplicationJSON
	GetRevisionsCountUsingPost401ApplicationJSONObject *GetRevisionsCountUsingPost401ApplicationJSON
	GetRevisionsCountUsingPost500ApplicationJSONObject *GetRevisionsCountUsingPost500ApplicationJSON
}
