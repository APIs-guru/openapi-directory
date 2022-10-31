package operations

type SendClientsMessageUsingPostQueryParams struct {
	Msg   *string `queryParam:"style=form,explode=true,name=msg"`
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type SendClientsMessageUsingPostRequest struct {
	QueryParams SendClientsMessageUsingPostQueryParams
}

type SendClientsMessageUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SendClientsMessageUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SendClientsMessageUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SendClientsMessageUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SendClientsMessageUsingPostResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	SendClientsMessageUsingPost200ApplicationJSONObject *SendClientsMessageUsingPost200ApplicationJSON
	SendClientsMessageUsingPost400ApplicationJSONObject *SendClientsMessageUsingPost400ApplicationJSON
	SendClientsMessageUsingPost401ApplicationJSONObject *SendClientsMessageUsingPost401ApplicationJSON
	SendClientsMessageUsingPost500ApplicationJSONObject *SendClientsMessageUsingPost500ApplicationJSON
}
