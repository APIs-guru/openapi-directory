package operations

type ListAuthorsOfPadUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type ListAuthorsOfPadUsingPostRequest struct {
	QueryParams ListAuthorsOfPadUsingPostQueryParams
}

type ListAuthorsOfPadUsingPost200ApplicationJSONData struct {
	AuthorIDs []string `json:"authorIDs,omitempty"`
}

type ListAuthorsOfPadUsingPost200ApplicationJSON struct {
	Code    *int64                                           `json:"code,omitempty"`
	Data    *ListAuthorsOfPadUsingPost200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                          `json:"message,omitempty"`
}

type ListAuthorsOfPadUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListAuthorsOfPadUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListAuthorsOfPadUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListAuthorsOfPadUsingPostResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	ListAuthorsOfPadUsingPost200ApplicationJSONObject *ListAuthorsOfPadUsingPost200ApplicationJSON
	ListAuthorsOfPadUsingPost400ApplicationJSONObject *ListAuthorsOfPadUsingPost400ApplicationJSON
	ListAuthorsOfPadUsingPost401ApplicationJSONObject *ListAuthorsOfPadUsingPost401ApplicationJSON
	ListAuthorsOfPadUsingPost500ApplicationJSONObject *ListAuthorsOfPadUsingPost500ApplicationJSON
}
