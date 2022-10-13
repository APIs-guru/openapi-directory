package operations

type GetChatHeadUsingGetQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type GetChatHeadUsingGetRequest struct {
	QueryParams GetChatHeadUsingGetQueryParams
}

type GetChatHeadUsingGet200ApplicationJSONDataChatHead struct {
	Text     *string `json:"text"`
	Time     *int64  `json:"time"`
	UserID   *string `json:"userId"`
	UserName *string `json:"userName"`
}

type GetChatHeadUsingGet200ApplicationJSONData struct {
	ChatHead *GetChatHeadUsingGet200ApplicationJSONDataChatHead `json:"chatHead"`
}

type GetChatHeadUsingGet200ApplicationJSON struct {
	Code    *int64                                     `json:"code"`
	Data    *GetChatHeadUsingGet200ApplicationJSONData `json:"data"`
	Message *string                                    `json:"message"`
}

type GetChatHeadUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetChatHeadUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetChatHeadUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type GetChatHeadUsingGetResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	GetChatHeadUsingGet200ApplicationJSONObject *GetChatHeadUsingGet200ApplicationJSON
	GetChatHeadUsingGet400ApplicationJSONObject *GetChatHeadUsingGet400ApplicationJSON
	GetChatHeadUsingGet401ApplicationJSONObject *GetChatHeadUsingGet401ApplicationJSON
	GetChatHeadUsingGet500ApplicationJSONObject *GetChatHeadUsingGet500ApplicationJSON
}
