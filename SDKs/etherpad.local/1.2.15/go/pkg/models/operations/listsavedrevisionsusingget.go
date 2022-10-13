package operations

type ListSavedRevisionsUsingGetQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type ListSavedRevisionsUsingGetRequest struct {
	QueryParams ListSavedRevisionsUsingGetQueryParams
}

type ListSavedRevisionsUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListSavedRevisionsUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListSavedRevisionsUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListSavedRevisionsUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListSavedRevisionsUsingGetResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	ListSavedRevisionsUsingGet200ApplicationJSONObject *ListSavedRevisionsUsingGet200ApplicationJSON
	ListSavedRevisionsUsingGet400ApplicationJSONObject *ListSavedRevisionsUsingGet400ApplicationJSON
	ListSavedRevisionsUsingGet401ApplicationJSONObject *ListSavedRevisionsUsingGet401ApplicationJSON
	ListSavedRevisionsUsingGet500ApplicationJSONObject *ListSavedRevisionsUsingGet500ApplicationJSON
}
