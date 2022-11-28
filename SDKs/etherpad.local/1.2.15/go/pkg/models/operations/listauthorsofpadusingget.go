package operations

type ListAuthorsOfPadUsingGetQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type ListAuthorsOfPadUsingGet200ApplicationJSONData struct {
	AuthorIDs []string `json:"authorIDs,omitempty"`
}

type ListAuthorsOfPadUsingGet200ApplicationJSON struct {
	Code    *int64                                          `json:"code,omitempty"`
	Data    *ListAuthorsOfPadUsingGet200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                         `json:"message,omitempty"`
}

type ListAuthorsOfPadUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListAuthorsOfPadUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListAuthorsOfPadUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListAuthorsOfPadUsingGetRequest struct {
	QueryParams ListAuthorsOfPadUsingGetQueryParams
}

type ListAuthorsOfPadUsingGetResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	ListAuthorsOfPadUsingGet200ApplicationJSONObject *ListAuthorsOfPadUsingGet200ApplicationJSON
	ListAuthorsOfPadUsingGet400ApplicationJSONObject *ListAuthorsOfPadUsingGet400ApplicationJSON
	ListAuthorsOfPadUsingGet401ApplicationJSONObject *ListAuthorsOfPadUsingGet401ApplicationJSON
	ListAuthorsOfPadUsingGet500ApplicationJSONObject *ListAuthorsOfPadUsingGet500ApplicationJSON
}
