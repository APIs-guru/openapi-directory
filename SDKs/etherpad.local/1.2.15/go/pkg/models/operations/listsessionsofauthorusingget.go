package operations

type ListSessionsOfAuthorUsingGetQueryParams struct {
	AuthorID *string `queryParam:"style=form,explode=true,name=authorID"`
}

type ListSessionsOfAuthorUsingGetRequest struct {
	QueryParams ListSessionsOfAuthorUsingGetQueryParams
}

type ListSessionsOfAuthorUsingGet200ApplicationJSONDataSessions struct {
	AuthorID   *string `json:"authorID"`
	GroupID    *string `json:"groupID"`
	ID         *string `json:"id"`
	ValidUntil *int64  `json:"validUntil"`
}

type ListSessionsOfAuthorUsingGet200ApplicationJSONData struct {
	Sessions []ListSessionsOfAuthorUsingGet200ApplicationJSONDataSessions `json:"sessions"`
}

type ListSessionsOfAuthorUsingGet200ApplicationJSON struct {
	Code    *int64                                              `json:"code"`
	Data    *ListSessionsOfAuthorUsingGet200ApplicationJSONData `json:"data"`
	Message *string                                             `json:"message"`
}

type ListSessionsOfAuthorUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListSessionsOfAuthorUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListSessionsOfAuthorUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListSessionsOfAuthorUsingGetResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	ListSessionsOfAuthorUsingGet200ApplicationJSONObject *ListSessionsOfAuthorUsingGet200ApplicationJSON
	ListSessionsOfAuthorUsingGet400ApplicationJSONObject *ListSessionsOfAuthorUsingGet400ApplicationJSON
	ListSessionsOfAuthorUsingGet401ApplicationJSONObject *ListSessionsOfAuthorUsingGet401ApplicationJSON
	ListSessionsOfAuthorUsingGet500ApplicationJSONObject *ListSessionsOfAuthorUsingGet500ApplicationJSON
}
