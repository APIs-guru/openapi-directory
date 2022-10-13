package operations

type CreateSessionUsingPostQueryParams struct {
	AuthorID   *string `queryParam:"style=form,explode=true,name=authorID"`
	GroupID    *string `queryParam:"style=form,explode=true,name=groupID"`
	ValidUntil *string `queryParam:"style=form,explode=true,name=validUntil"`
}

type CreateSessionUsingPostRequest struct {
	QueryParams CreateSessionUsingPostQueryParams
}

type CreateSessionUsingPost200ApplicationJSONData struct {
	SessionID *string `json:"sessionID"`
}

type CreateSessionUsingPost200ApplicationJSON struct {
	Code    *int64                                        `json:"code"`
	Data    *CreateSessionUsingPost200ApplicationJSONData `json:"data"`
	Message *string                                       `json:"message"`
}

type CreateSessionUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateSessionUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateSessionUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateSessionUsingPostResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	CreateSessionUsingPost200ApplicationJSONObject *CreateSessionUsingPost200ApplicationJSON
	CreateSessionUsingPost400ApplicationJSONObject *CreateSessionUsingPost400ApplicationJSON
	CreateSessionUsingPost401ApplicationJSONObject *CreateSessionUsingPost401ApplicationJSON
	CreateSessionUsingPost500ApplicationJSONObject *CreateSessionUsingPost500ApplicationJSON
}
