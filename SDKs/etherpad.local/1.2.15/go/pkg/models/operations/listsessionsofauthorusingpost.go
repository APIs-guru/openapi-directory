package operations

type ListSessionsOfAuthorUsingPostQueryParams struct {
	AuthorID *string `queryParam:"style=form,explode=true,name=authorID"`
}

type ListSessionsOfAuthorUsingPostRequest struct {
	QueryParams ListSessionsOfAuthorUsingPostQueryParams
}

type ListSessionsOfAuthorUsingPost200ApplicationJSONDataSessions struct {
	AuthorID   *string `json:"authorID"`
	GroupID    *string `json:"groupID"`
	ID         *string `json:"id"`
	ValidUntil *int64  `json:"validUntil"`
}

type ListSessionsOfAuthorUsingPost200ApplicationJSONData struct {
	Sessions []ListSessionsOfAuthorUsingPost200ApplicationJSONDataSessions `json:"sessions"`
}

type ListSessionsOfAuthorUsingPost200ApplicationJSON struct {
	Code    *int64                                               `json:"code"`
	Data    *ListSessionsOfAuthorUsingPost200ApplicationJSONData `json:"data"`
	Message *string                                              `json:"message"`
}

type ListSessionsOfAuthorUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListSessionsOfAuthorUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListSessionsOfAuthorUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListSessionsOfAuthorUsingPostResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	ListSessionsOfAuthorUsingPost200ApplicationJSONObject *ListSessionsOfAuthorUsingPost200ApplicationJSON
	ListSessionsOfAuthorUsingPost400ApplicationJSONObject *ListSessionsOfAuthorUsingPost400ApplicationJSON
	ListSessionsOfAuthorUsingPost401ApplicationJSONObject *ListSessionsOfAuthorUsingPost401ApplicationJSON
	ListSessionsOfAuthorUsingPost500ApplicationJSONObject *ListSessionsOfAuthorUsingPost500ApplicationJSON
}
