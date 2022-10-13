package operations

type GetSessionInfoUsingPostQueryParams struct {
	SessionID *string `queryParam:"style=form,explode=true,name=sessionID"`
}

type GetSessionInfoUsingPostRequest struct {
	QueryParams GetSessionInfoUsingPostQueryParams
}

type GetSessionInfoUsingPost200ApplicationJSONDataInfo struct {
	AuthorID   *string `json:"authorID"`
	GroupID    *string `json:"groupID"`
	ID         *string `json:"id"`
	ValidUntil *int64  `json:"validUntil"`
}

type GetSessionInfoUsingPost200ApplicationJSONData struct {
	Info *GetSessionInfoUsingPost200ApplicationJSONDataInfo `json:"info"`
}

type GetSessionInfoUsingPost200ApplicationJSON struct {
	Code    *int64                                         `json:"code"`
	Data    *GetSessionInfoUsingPost200ApplicationJSONData `json:"data"`
	Message *string                                        `json:"message"`
}

type GetSessionInfoUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetSessionInfoUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetSessionInfoUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetSessionInfoUsingPostResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	GetSessionInfoUsingPost200ApplicationJSONObject *GetSessionInfoUsingPost200ApplicationJSON
	GetSessionInfoUsingPost400ApplicationJSONObject *GetSessionInfoUsingPost400ApplicationJSON
	GetSessionInfoUsingPost401ApplicationJSONObject *GetSessionInfoUsingPost401ApplicationJSON
	GetSessionInfoUsingPost500ApplicationJSONObject *GetSessionInfoUsingPost500ApplicationJSON
}
