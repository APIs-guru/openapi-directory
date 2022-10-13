package operations

type ListPadsOfAuthorUsingPostQueryParams struct {
	AuthorID *string `queryParam:"style=form,explode=true,name=authorID"`
}

type ListPadsOfAuthorUsingPostRequest struct {
	QueryParams ListPadsOfAuthorUsingPostQueryParams
}

type ListPadsOfAuthorUsingPost200ApplicationJSONData struct {
	PadIDs []string `json:"padIDs"`
}

type ListPadsOfAuthorUsingPost200ApplicationJSON struct {
	Code    *int64                                           `json:"code"`
	Data    *ListPadsOfAuthorUsingPost200ApplicationJSONData `json:"data"`
	Message *string                                          `json:"message"`
}

type ListPadsOfAuthorUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListPadsOfAuthorUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListPadsOfAuthorUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListPadsOfAuthorUsingPostResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	ListPadsOfAuthorUsingPost200ApplicationJSONObject *ListPadsOfAuthorUsingPost200ApplicationJSON
	ListPadsOfAuthorUsingPost400ApplicationJSONObject *ListPadsOfAuthorUsingPost400ApplicationJSON
	ListPadsOfAuthorUsingPost401ApplicationJSONObject *ListPadsOfAuthorUsingPost401ApplicationJSON
	ListPadsOfAuthorUsingPost500ApplicationJSONObject *ListPadsOfAuthorUsingPost500ApplicationJSON
}
