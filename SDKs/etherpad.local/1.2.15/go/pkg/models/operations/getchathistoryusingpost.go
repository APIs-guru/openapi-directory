package operations

type GetChatHistoryUsingPostQueryParams struct {
	End   *string `queryParam:"style=form,explode=true,name=end"`
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
	Start *string `queryParam:"style=form,explode=true,name=start"`
}

type GetChatHistoryUsingPostRequest struct {
	QueryParams GetChatHistoryUsingPostQueryParams
}

type GetChatHistoryUsingPost200ApplicationJSONDataMessages struct {
	Text     *string `json:"text"`
	Time     *int64  `json:"time"`
	UserID   *string `json:"userId"`
	UserName *string `json:"userName"`
}

type GetChatHistoryUsingPost200ApplicationJSONData struct {
	Messages []GetChatHistoryUsingPost200ApplicationJSONDataMessages `json:"messages"`
}

type GetChatHistoryUsingPost200ApplicationJSON struct {
	Code    *int64                                         `json:"code"`
	Data    *GetChatHistoryUsingPost200ApplicationJSONData `json:"data"`
	Message *string                                        `json:"message"`
}

type GetChatHistoryUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetChatHistoryUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetChatHistoryUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetChatHistoryUsingPostResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	GetChatHistoryUsingPost200ApplicationJSONObject *GetChatHistoryUsingPost200ApplicationJSON
	GetChatHistoryUsingPost400ApplicationJSONObject *GetChatHistoryUsingPost400ApplicationJSON
	GetChatHistoryUsingPost401ApplicationJSONObject *GetChatHistoryUsingPost401ApplicationJSON
	GetChatHistoryUsingPost500ApplicationJSONObject *GetChatHistoryUsingPost500ApplicationJSON
}
