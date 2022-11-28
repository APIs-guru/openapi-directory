package operations

type ListSessionsOfGroupUsingPostQueryParams struct {
	GroupID *string `queryParam:"style=form,explode=true,name=groupID"`
}

type ListSessionsOfGroupUsingPost200ApplicationJSONDataSessions struct {
	AuthorID   *string `json:"authorID,omitempty"`
	GroupID    *string `json:"groupID,omitempty"`
	ID         *string `json:"id,omitempty"`
	ValidUntil *int64  `json:"validUntil,omitempty"`
}

type ListSessionsOfGroupUsingPost200ApplicationJSONData struct {
	Sessions []ListSessionsOfGroupUsingPost200ApplicationJSONDataSessions `json:"sessions,omitempty"`
}

type ListSessionsOfGroupUsingPost200ApplicationJSON struct {
	Code    *int64                                              `json:"code,omitempty"`
	Data    *ListSessionsOfGroupUsingPost200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                             `json:"message,omitempty"`
}

type ListSessionsOfGroupUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListSessionsOfGroupUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListSessionsOfGroupUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListSessionsOfGroupUsingPostRequest struct {
	QueryParams ListSessionsOfGroupUsingPostQueryParams
}

type ListSessionsOfGroupUsingPostResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	ListSessionsOfGroupUsingPost200ApplicationJSONObject *ListSessionsOfGroupUsingPost200ApplicationJSON
	ListSessionsOfGroupUsingPost400ApplicationJSONObject *ListSessionsOfGroupUsingPost400ApplicationJSON
	ListSessionsOfGroupUsingPost401ApplicationJSONObject *ListSessionsOfGroupUsingPost401ApplicationJSON
	ListSessionsOfGroupUsingPost500ApplicationJSONObject *ListSessionsOfGroupUsingPost500ApplicationJSON
}
