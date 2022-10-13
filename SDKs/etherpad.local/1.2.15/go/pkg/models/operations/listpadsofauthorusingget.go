package operations

type ListPadsOfAuthorUsingGetQueryParams struct {
	AuthorID *string `queryParam:"style=form,explode=true,name=authorID"`
}

type ListPadsOfAuthorUsingGetRequest struct {
	QueryParams ListPadsOfAuthorUsingGetQueryParams
}

type ListPadsOfAuthorUsingGet200ApplicationJSONData struct {
	PadIDs []string `json:"padIDs"`
}

type ListPadsOfAuthorUsingGet200ApplicationJSON struct {
	Code    *int64                                          `json:"code"`
	Data    *ListPadsOfAuthorUsingGet200ApplicationJSONData `json:"data"`
	Message *string                                         `json:"message"`
}

type ListPadsOfAuthorUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListPadsOfAuthorUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListPadsOfAuthorUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListPadsOfAuthorUsingGetResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	ListPadsOfAuthorUsingGet200ApplicationJSONObject *ListPadsOfAuthorUsingGet200ApplicationJSON
	ListPadsOfAuthorUsingGet400ApplicationJSONObject *ListPadsOfAuthorUsingGet400ApplicationJSON
	ListPadsOfAuthorUsingGet401ApplicationJSONObject *ListPadsOfAuthorUsingGet401ApplicationJSON
	ListPadsOfAuthorUsingGet500ApplicationJSONObject *ListPadsOfAuthorUsingGet500ApplicationJSON
}
