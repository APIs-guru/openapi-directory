package operations

type ListSessionsOfGroupUsingGetQueryParams struct {
	GroupID *string `queryParam:"style=form,explode=true,name=groupID"`
}

type ListSessionsOfGroupUsingGetRequest struct {
	QueryParams ListSessionsOfGroupUsingGetQueryParams
}

type ListSessionsOfGroupUsingGet200ApplicationJSONDataSessions struct {
	AuthorID   *string `json:"authorID"`
	GroupID    *string `json:"groupID"`
	ID         *string `json:"id"`
	ValidUntil *int64  `json:"validUntil"`
}

type ListSessionsOfGroupUsingGet200ApplicationJSONData struct {
	Sessions []ListSessionsOfGroupUsingGet200ApplicationJSONDataSessions `json:"sessions"`
}

type ListSessionsOfGroupUsingGet200ApplicationJSON struct {
	Code    *int64                                             `json:"code"`
	Data    *ListSessionsOfGroupUsingGet200ApplicationJSONData `json:"data"`
	Message *string                                            `json:"message"`
}

type ListSessionsOfGroupUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListSessionsOfGroupUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListSessionsOfGroupUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListSessionsOfGroupUsingGetResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	ListSessionsOfGroupUsingGet200ApplicationJSONObject *ListSessionsOfGroupUsingGet200ApplicationJSON
	ListSessionsOfGroupUsingGet400ApplicationJSONObject *ListSessionsOfGroupUsingGet400ApplicationJSON
	ListSessionsOfGroupUsingGet401ApplicationJSONObject *ListSessionsOfGroupUsingGet401ApplicationJSON
	ListSessionsOfGroupUsingGet500ApplicationJSONObject *ListSessionsOfGroupUsingGet500ApplicationJSON
}
