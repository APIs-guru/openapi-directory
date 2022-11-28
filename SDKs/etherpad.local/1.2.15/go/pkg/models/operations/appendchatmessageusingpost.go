package operations

type AppendChatMessageUsingPostQueryParams struct {
	AuthorID *string `queryParam:"style=form,explode=true,name=authorID"`
	PadID    *string `queryParam:"style=form,explode=true,name=padID"`
	Text     *string `queryParam:"style=form,explode=true,name=text"`
	Time     *string `queryParam:"style=form,explode=true,name=time"`
}

type AppendChatMessageUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type AppendChatMessageUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type AppendChatMessageUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type AppendChatMessageUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type AppendChatMessageUsingPostRequest struct {
	QueryParams AppendChatMessageUsingPostQueryParams
}

type AppendChatMessageUsingPostResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	AppendChatMessageUsingPost200ApplicationJSONObject *AppendChatMessageUsingPost200ApplicationJSON
	AppendChatMessageUsingPost400ApplicationJSONObject *AppendChatMessageUsingPost400ApplicationJSON
	AppendChatMessageUsingPost401ApplicationJSONObject *AppendChatMessageUsingPost401ApplicationJSON
	AppendChatMessageUsingPost500ApplicationJSONObject *AppendChatMessageUsingPost500ApplicationJSON
}
