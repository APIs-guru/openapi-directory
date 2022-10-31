package operations

type GetChatHeadUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type GetChatHeadUsingPostRequest struct {
	QueryParams GetChatHeadUsingPostQueryParams
}

type GetChatHeadUsingPost200ApplicationJSONDataChatHead struct {
	Text     *string `json:"text,omitempty"`
	Time     *int64  `json:"time,omitempty"`
	UserID   *string `json:"userId,omitempty"`
	UserName *string `json:"userName,omitempty"`
}

type GetChatHeadUsingPost200ApplicationJSONData struct {
	ChatHead *GetChatHeadUsingPost200ApplicationJSONDataChatHead `json:"chatHead,omitempty"`
}

type GetChatHeadUsingPost200ApplicationJSON struct {
	Code    *int64                                      `json:"code,omitempty"`
	Data    *GetChatHeadUsingPost200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                     `json:"message,omitempty"`
}

type GetChatHeadUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetChatHeadUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetChatHeadUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetChatHeadUsingPostResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	GetChatHeadUsingPost200ApplicationJSONObject *GetChatHeadUsingPost200ApplicationJSON
	GetChatHeadUsingPost400ApplicationJSONObject *GetChatHeadUsingPost400ApplicationJSON
	GetChatHeadUsingPost401ApplicationJSONObject *GetChatHeadUsingPost401ApplicationJSON
	GetChatHeadUsingPost500ApplicationJSONObject *GetChatHeadUsingPost500ApplicationJSON
}
