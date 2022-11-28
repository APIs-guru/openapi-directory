package operations

type ListSessionsOfAuthorUsingPostQueryParams struct {
	AuthorID *string `queryParam:"style=form,explode=true,name=authorID"`
}

type ListSessionsOfAuthorUsingPost200ApplicationJSONDataSessions struct {
	AuthorID   *string `json:"authorID,omitempty"`
	GroupID    *string `json:"groupID,omitempty"`
	ID         *string `json:"id,omitempty"`
	ValidUntil *int64  `json:"validUntil,omitempty"`
}

type ListSessionsOfAuthorUsingPost200ApplicationJSONData struct {
	Sessions []ListSessionsOfAuthorUsingPost200ApplicationJSONDataSessions `json:"sessions,omitempty"`
}

type ListSessionsOfAuthorUsingPost200ApplicationJSON struct {
	Code    *int64                                               `json:"code,omitempty"`
	Data    *ListSessionsOfAuthorUsingPost200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                              `json:"message,omitempty"`
}

type ListSessionsOfAuthorUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListSessionsOfAuthorUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListSessionsOfAuthorUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListSessionsOfAuthorUsingPostRequest struct {
	QueryParams ListSessionsOfAuthorUsingPostQueryParams
}

type ListSessionsOfAuthorUsingPostResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	ListSessionsOfAuthorUsingPost200ApplicationJSONObject *ListSessionsOfAuthorUsingPost200ApplicationJSON
	ListSessionsOfAuthorUsingPost400ApplicationJSONObject *ListSessionsOfAuthorUsingPost400ApplicationJSON
	ListSessionsOfAuthorUsingPost401ApplicationJSONObject *ListSessionsOfAuthorUsingPost401ApplicationJSON
	ListSessionsOfAuthorUsingPost500ApplicationJSONObject *ListSessionsOfAuthorUsingPost500ApplicationJSON
}
