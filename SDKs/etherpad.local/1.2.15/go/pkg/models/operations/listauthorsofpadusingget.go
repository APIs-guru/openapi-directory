package operations

type ListAuthorsOfPadUsingGetQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type ListAuthorsOfPadUsingGetRequest struct {
	QueryParams ListAuthorsOfPadUsingGetQueryParams
}

type ListAuthorsOfPadUsingGet200ApplicationJSONData struct {
	AuthorIDs []string `json:"authorIDs"`
}

type ListAuthorsOfPadUsingGet200ApplicationJSON struct {
	Code    *int64                                          `json:"code"`
	Data    *ListAuthorsOfPadUsingGet200ApplicationJSONData `json:"data"`
	Message *string                                         `json:"message"`
}

type ListAuthorsOfPadUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListAuthorsOfPadUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListAuthorsOfPadUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListAuthorsOfPadUsingGetResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	ListAuthorsOfPadUsingGet200ApplicationJSONObject *ListAuthorsOfPadUsingGet200ApplicationJSON
	ListAuthorsOfPadUsingGet400ApplicationJSONObject *ListAuthorsOfPadUsingGet400ApplicationJSON
	ListAuthorsOfPadUsingGet401ApplicationJSONObject *ListAuthorsOfPadUsingGet401ApplicationJSON
	ListAuthorsOfPadUsingGet500ApplicationJSONObject *ListAuthorsOfPadUsingGet500ApplicationJSON
}
