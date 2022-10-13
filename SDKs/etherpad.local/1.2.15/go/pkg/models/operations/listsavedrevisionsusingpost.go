package operations

type ListSavedRevisionsUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type ListSavedRevisionsUsingPostRequest struct {
	QueryParams ListSavedRevisionsUsingPostQueryParams
}

type ListSavedRevisionsUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListSavedRevisionsUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListSavedRevisionsUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListSavedRevisionsUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListSavedRevisionsUsingPostResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	ListSavedRevisionsUsingPost200ApplicationJSONObject *ListSavedRevisionsUsingPost200ApplicationJSON
	ListSavedRevisionsUsingPost400ApplicationJSONObject *ListSavedRevisionsUsingPost400ApplicationJSON
	ListSavedRevisionsUsingPost401ApplicationJSONObject *ListSavedRevisionsUsingPost401ApplicationJSON
	ListSavedRevisionsUsingPost500ApplicationJSONObject *ListSavedRevisionsUsingPost500ApplicationJSON
}
