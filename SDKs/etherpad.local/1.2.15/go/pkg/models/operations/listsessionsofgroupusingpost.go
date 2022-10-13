package operations

type ListSessionsOfGroupUsingPostQueryParams struct {
	GroupID *string `queryParam:"style=form,explode=true,name=groupID"`
}

type ListSessionsOfGroupUsingPostRequest struct {
	QueryParams ListSessionsOfGroupUsingPostQueryParams
}

type ListSessionsOfGroupUsingPost200ApplicationJSONDataSessions struct {
	AuthorID   *string `json:"authorID"`
	GroupID    *string `json:"groupID"`
	ID         *string `json:"id"`
	ValidUntil *int64  `json:"validUntil"`
}

type ListSessionsOfGroupUsingPost200ApplicationJSONData struct {
	Sessions []ListSessionsOfGroupUsingPost200ApplicationJSONDataSessions `json:"sessions"`
}

type ListSessionsOfGroupUsingPost200ApplicationJSON struct {
	Code    *int64                                              `json:"code"`
	Data    *ListSessionsOfGroupUsingPost200ApplicationJSONData `json:"data"`
	Message *string                                             `json:"message"`
}

type ListSessionsOfGroupUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListSessionsOfGroupUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListSessionsOfGroupUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type ListSessionsOfGroupUsingPostResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	ListSessionsOfGroupUsingPost200ApplicationJSONObject *ListSessionsOfGroupUsingPost200ApplicationJSON
	ListSessionsOfGroupUsingPost400ApplicationJSONObject *ListSessionsOfGroupUsingPost400ApplicationJSON
	ListSessionsOfGroupUsingPost401ApplicationJSONObject *ListSessionsOfGroupUsingPost401ApplicationJSON
	ListSessionsOfGroupUsingPost500ApplicationJSONObject *ListSessionsOfGroupUsingPost500ApplicationJSON
}
