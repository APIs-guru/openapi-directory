package operations

type GetChatHistoryUsingGetQueryParams struct {
	End   *string `queryParam:"style=form,explode=true,name=end"`
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
	Start *string `queryParam:"style=form,explode=true,name=start"`
}

type GetChatHistoryUsingGetRequest struct {
	QueryParams GetChatHistoryUsingGetQueryParams
}

type GetChatHistoryUsingGet200ApplicationJSONDataMessages struct {
	Text     *string `json:"text"`
	Time     *int64  `json:"time"`
	UserID   *string `json:"userId"`
	UserName *string `json:"userName"`
}

type GetChatHistoryUsingGet200ApplicationJSONData struct {
	Messages []GetChatHistoryUsingGet200ApplicationJSONDataMessages `json:"messages"`
}

type GetChatHistoryUsingGet200ApplicationJSON struct {
	Code    *int64                                        `json:"code"`
	Data    *GetChatHistoryUsingGet200ApplicationJSONData `json:"data"`
	Message *string                                       `json:"message"`
}

type GetChatHistoryUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetChatHistoryUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetChatHistoryUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetChatHistoryUsingGetResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetChatHistoryUsingGet200ApplicationJSONObject *GetChatHistoryUsingGet200ApplicationJSON
	GetChatHistoryUsingGet400ApplicationJSONObject *GetChatHistoryUsingGet400ApplicationJSON
	GetChatHistoryUsingGet401ApplicationJSONObject *GetChatHistoryUsingGet401ApplicationJSON
	GetChatHistoryUsingGet500ApplicationJSONObject *GetChatHistoryUsingGet500ApplicationJSON
}
