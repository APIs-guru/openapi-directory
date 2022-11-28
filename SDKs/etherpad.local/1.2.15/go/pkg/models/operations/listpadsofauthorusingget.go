package operations

type ListPadsOfAuthorUsingGetQueryParams struct {
	AuthorID *string `queryParam:"style=form,explode=true,name=authorID"`
}

type ListPadsOfAuthorUsingGet200ApplicationJSONData struct {
	PadIDs []string `json:"padIDs,omitempty"`
}

type ListPadsOfAuthorUsingGet200ApplicationJSON struct {
	Code    *int64                                          `json:"code,omitempty"`
	Data    *ListPadsOfAuthorUsingGet200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                         `json:"message,omitempty"`
}

type ListPadsOfAuthorUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListPadsOfAuthorUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListPadsOfAuthorUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListPadsOfAuthorUsingGetRequest struct {
	QueryParams ListPadsOfAuthorUsingGetQueryParams
}

type ListPadsOfAuthorUsingGetResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	ListPadsOfAuthorUsingGet200ApplicationJSONObject *ListPadsOfAuthorUsingGet200ApplicationJSON
	ListPadsOfAuthorUsingGet400ApplicationJSONObject *ListPadsOfAuthorUsingGet400ApplicationJSON
	ListPadsOfAuthorUsingGet401ApplicationJSONObject *ListPadsOfAuthorUsingGet401ApplicationJSON
	ListPadsOfAuthorUsingGet500ApplicationJSONObject *ListPadsOfAuthorUsingGet500ApplicationJSON
}
