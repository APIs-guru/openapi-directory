package operations

type GetSavedRevisionsCountUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type GetSavedRevisionsCountUsingPostRequest struct {
	QueryParams GetSavedRevisionsCountUsingPostQueryParams
}

type GetSavedRevisionsCountUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetSavedRevisionsCountUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetSavedRevisionsCountUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetSavedRevisionsCountUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetSavedRevisionsCountUsingPostResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	GetSavedRevisionsCountUsingPost200ApplicationJSONObject *GetSavedRevisionsCountUsingPost200ApplicationJSON
	GetSavedRevisionsCountUsingPost400ApplicationJSONObject *GetSavedRevisionsCountUsingPost400ApplicationJSON
	GetSavedRevisionsCountUsingPost401ApplicationJSONObject *GetSavedRevisionsCountUsingPost401ApplicationJSON
	GetSavedRevisionsCountUsingPost500ApplicationJSONObject *GetSavedRevisionsCountUsingPost500ApplicationJSON
}
