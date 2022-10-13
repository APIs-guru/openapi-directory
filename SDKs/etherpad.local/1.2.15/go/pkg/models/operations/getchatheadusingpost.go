package operations

type GetChatHeadUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type GetChatHeadUsingPostRequest struct {
	QueryParams GetChatHeadUsingPostQueryParams
}

type GetChatHeadUsingPost200ApplicationJSONDataChatHead struct {
	Text     *string `json:"text"`
	Time     *int64  `json:"time"`
	UserID   *string `json:"userId"`
	UserName *string `json:"userName"`
}

type GetChatHeadUsingPost200ApplicationJSONData struct {
	ChatHead *GetChatHeadUsingPost200ApplicationJSONDataChatHead `json:"chatHead"`
}

type GetChatHeadUsingPost200ApplicationJSON struct {
	Code    *int64                                      `json:"code"`
	Data    *GetChatHeadUsingPost200ApplicationJSONData `json:"data"`
	Message *string                                     `json:"message"`
}

type GetChatHeadUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetChatHeadUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetChatHeadUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetChatHeadUsingPostResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	GetChatHeadUsingPost200ApplicationJSONObject *GetChatHeadUsingPost200ApplicationJSON
	GetChatHeadUsingPost400ApplicationJSONObject *GetChatHeadUsingPost400ApplicationJSON
	GetChatHeadUsingPost401ApplicationJSONObject *GetChatHeadUsingPost401ApplicationJSON
	GetChatHeadUsingPost500ApplicationJSONObject *GetChatHeadUsingPost500ApplicationJSON
}
