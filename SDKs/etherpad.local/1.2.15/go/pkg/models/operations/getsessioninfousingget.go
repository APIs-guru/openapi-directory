package operations

type GetSessionInfoUsingGetQueryParams struct {
	SessionID *string `queryParam:"style=form,explode=true,name=sessionID"`
}

type GetSessionInfoUsingGetRequest struct {
	QueryParams GetSessionInfoUsingGetQueryParams
}

type GetSessionInfoUsingGet200ApplicationJSONDataInfo struct {
	AuthorID   *string `json:"authorID"`
	GroupID    *string `json:"groupID"`
	ID         *string `json:"id"`
	ValidUntil *int64  `json:"validUntil"`
}

type GetSessionInfoUsingGet200ApplicationJSONData struct {
	Info *GetSessionInfoUsingGet200ApplicationJSONDataInfo `json:"info"`
}

type GetSessionInfoUsingGet200ApplicationJSON struct {
	Code    *int64                                        `json:"code"`
	Data    *GetSessionInfoUsingGet200ApplicationJSONData `json:"data"`
	Message *string                                       `json:"message"`
}

type GetSessionInfoUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetSessionInfoUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetSessionInfoUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetSessionInfoUsingGetResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetSessionInfoUsingGet200ApplicationJSONObject *GetSessionInfoUsingGet200ApplicationJSON
	GetSessionInfoUsingGet400ApplicationJSONObject *GetSessionInfoUsingGet400ApplicationJSON
	GetSessionInfoUsingGet401ApplicationJSONObject *GetSessionInfoUsingGet401ApplicationJSON
	GetSessionInfoUsingGet500ApplicationJSONObject *GetSessionInfoUsingGet500ApplicationJSON
}
